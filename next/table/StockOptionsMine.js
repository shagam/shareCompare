"use client";
import React, { useEffect, useState, useMemo } from 'react';

// 


function useStockOptionsMine () {
    const [optionArray, setOptionArray] = useState({})
    // const keys_ = Object.keys(optionArray)
    // console.log ('keys=' + keys_, keys_[0])
    // console.log ('optionArray=', optionArray)

    // const keys__ = Object.keys(keys_)

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
        setOptionArray((prev) => ({ ...prev, [optionSymbol]: option }));
    }

   function del(optionSymbol) {
        setOptionArray((prev) => {
            const copy = { ...prev };
            delete copy[optionSymbol];
            return copy;
        });
    }

    function get () {
        return optionArray;
    }
    //  top, right, bottom, left 
    const ROW_SPACING = {padding: "0px 7px 0px 7px", margin: 0}

    function List() {
        const rows = Object.values(optionArray);
        if (rows.length === 0) return <div>No options yet</div>;

        // Get column names from the data itself - from first object
        const columns = Object.keys(rows[0]);

        function formatLabel(key) {
            // optionSymbol -> Option Symbol, yearlyYield -> Yearly Yield, yield_ -> Yield
            return key.replace('_', '').replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());
        }

    return (
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
                    <tr key={option.optionSymbol}>
                        {columns.map((key) => (
                            <td  key={key} style={{...ROW_SPACING, border: '1px solid #ccc', }}>{option[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
    }

    return { optionArray, add, del, get, List };
}

export {useStockOptionsMine};