"use client";
import React, { useEffect, useState, useMemo } from 'react';

// 


function useStockOptionsMine () {
    const [optionArray, setOptionArray] = useState(() => {
        return JSON.parse(localStorage.getItem("optionsMine")) || {};
    });
    const [selectedSymbol, setSelectedSymbol] = useState(null)

    function add(optionQuote, premiumSelected) {
        const i = premiumSelected;
        const optionSymbol = optionQuote.optionSymbol[i]
        const option = {
            optionSymbol: optionQuote.optionSymbol[i],
            underlying: optionQuote.underlying[i],
            expiration: optionQuote.expiration[i],
            strike: optionQuote.strike[i],
            mid: optionQuote.mid[i],
            yield_: optionQuote.yield_[i],
            yearlyYield: optionQuote.yearlyYield[i]
        };

        // Make a NEW copy, don't change the old one directly
   
        const updated = { ...optionArray, [optionSymbol]: option }; // 1. new object, not mutation
        setOptionArray(updated);
        localStorage.setItem("optionsMine", JSON.stringify(updated)); // 2. save the WHOLE updated object 
    }

   function del(symbol) {
        setOptionArray((prev) => {
            const copy = { ...prev };
            delete copy[symbol];
            return copy;
        });
    }

    function get () {
        return optionArray;
    }

    function clear () {
        setOptionArray({})
        localStorage.removeItem("optionsMine")
    }

    function List() {
        const rows = Object.values(optionArray);
        if (rows.length === 0) return <div>No options yet</div>;

        // Get column names from the data itself - from first object
        const columns = Object.keys(rows[0]);

        function formatLabel(key) {
            // optionSymbol -> Option Symbol, yearlyYield -> Yearly Yield, yield_ -> Yield
            return key.replace('_', '').replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());
        }

    //  top, right, bottom, left 
    const ROW_SPACING = {padding: "0px 7px 0px 7px", margin: 0}
    return (
         <div>
            {selectedSymbol != null && <div> selected={selectedSymbol} </div>}
          &nbsp; <button style={{background: 'aqua'}} type="button" onClick={()=> del(selectedSymbol)}>del-selected </button>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
                <tr>
                    {columns.map((key) => (
                        <th key={key} style={{...ROW_SPACING, border: '1px solid #ccc', textAlign: 'left' }}>{formatLabel(key)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((option) => (
                    <tr key={option.optionSymbol}
                     onClick={() => setSelectedSymbol(option.optionSymbol)}
                         style={{ cursor: 'pointer', background: selectedSymbol === option.optionSymbol ? '#e0f0ff' : 'transparent' }}>
                        {columns.map((key) => (
                            <td  key={key} style={{...ROW_SPACING, border: '1px solid #ccc', }}>{option[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        {/* <pre> {JSON.stringify(optionArray, null, 2)}</pre> */}

        </div>
    );
    }

    return { optionArray, add, del, get, List, clear };
}

export {useStockOptionsMine};