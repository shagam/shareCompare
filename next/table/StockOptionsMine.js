"use client";
import React, { useEffect, useState, useMemo } from 'react';

function stocksOptionsMine () {

    const [optopnArray, setOptionArray] = useState([])

    function add (optionSymbol, option) {
        optopnArray[optionSymbol] = option

    }

    function del (optionSymbol) {
        delete optopnArray[optionSymbol]
    }

    function get () {
        return optopnArray;
    }

    return (
        <div>
            {optopnArray.length > 0 && <div>

            </div>}
        </div>
    )
}

export {stocksOptionsMine, add, del, get};