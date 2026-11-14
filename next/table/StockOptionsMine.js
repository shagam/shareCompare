"use client";
import React, { useEffect, useState, useMemo } from 'react';

// 


function useStockOptionsMine () {
    const [optionArray, setOptionArray] = useState([])

    function add(optionQuote, premiumSelected) {
        const i = premiumSelected;
        const optionSymbol = optionQuote.optionSymbol[i]
        const option = {
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

    function List() {
        return (
            <div>
                {Object.keys(optionArray).length > 0 && <div>
                    {Object.keys(optionArray).map((optionSymbol) => (
                        <div key={optionSymbol}>{optionSymbol} - {optionArray[optionSymbol].mid}</div>
                    ))}
                </div>}
            </div>
        );
    }

    return { optionArray, add, del, get, List };
}

export {useStockOptionsMine};