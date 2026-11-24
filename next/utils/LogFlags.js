"use client";
import React, {useState, useMemo, useEffect} from 'react'

import Link from "next/link";
import { useShared } from '../contexts/SharedContext';

import memoryStore from "../components/MemoryStore";

// import "./logFlagaStyles.css";
// https://contactmentor.com/checkbox-list-react-js-example/

//** props.checkList   Flags defined in app.js */

const LogFlags = (props) => {

  console.log ('props', props, props.logFlags)
// const logFlags = memoryStore.get('logFlags')
// const setLogFlags = memoryStore.get('setLogFlags')

const {chartSymbol, setChartSymbol,
      infoSymbol, setInfoSymbol,
      gainMap, setGainMap,
      chartData, setChartData,
      stockInfo, setStockInfo,
      gainRawDividand, setGainRawDividand,
      gainData, setGainData,
      
      daily, setDaily,
      logFlags, setLogFlags,

      price, setPrice,
      priceDivHigh, setPriceDivHigh,

      stockChartXValues, setStockChartXValues,
      stockChartYValues, setStockChartYValues,

      servList,
      servNameList, 
      servSelect, setServSelect,
      ssl, setSsl,
      PORT, setPORT,


    } = useShared();


   // State with list of all checked item
   var logFlagsRaw = localStorage.getItem('logFlags')
    // setLogFlags(logFlagsRaw)
    console.log ('LogFlags logFlagsRaw=', logFlagsRaw, 'logFlags=', logFlags)

   if (! logFlagsRaw)
    logFlagsRaw = "[]";
   const [checked, setChecked] = useState(JSON.parse(logFlagsRaw));
   

   // Add/Remove checked item from list
   const handleCheck = (event) => {
     var updatedList = [...checked];
     if (event.target.checked) {
       if (! checked.includes(event.target.value))
       updatedList = [...checked, event.target.value];
     } else {
       updatedList.splice(checked.indexOf(event.target.value), 1);
     }
     setChecked(updatedList);
     setLogFlags(updatedList)
     console.log('LogFlags handleCheck updatedList=', updatedList)
     localStorage.setItem('logFlags', JSON.stringify(updatedList));
   };
 
   // Generate string of checked items
   const checkedItems = checked.length
     ? checked.reduce((total, item) => {
         return total + ", " + item;
       })
     : "";
 

   // Return classes based on whether item is checked

   var isChecked = (item) =>
     checked.includes(item) ? "checked-item" : "not-checked-item";
 
    return (
      <div>
        <hr/> 
        <div>
            <Link href="/" > Home </Link>
        </div>

        <hr/> 
        <h4 style={{color:'Green'}}>Console.log flags  </h4>
        <hr/> 
        
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 8px' }}>
            {props.checkList.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  whiteSpace: 'nowrap', // keeps box + text together
                  flexShrink: 0, // don't squash it
                }}
              >
                <input
                  value={item}
                  type="checkbox"
                  checked={checked.includes(item)}
                  onChange={handleCheck}
                  style={{ margin: 0, cursor: 'pointer' }}
                />
                <span>&nbsp;{item}&nbsp;&nbsp;</span>
              </div>
            ))}
          </div>
          <br></br>
        </div>
      </div>
    );
  }
  
 
 export default LogFlags
   