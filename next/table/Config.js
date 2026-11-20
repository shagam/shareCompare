"use client";
import React, {useState, useMemo, useEffect} from 'react';

import AlphaVantage from '../AlphaVantage'

import Link from "next/link";
import {IpContext, getIpInfo} from '../contexts/IpContext';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import MobileContext from '../contexts/MobileContext'
import {beep2, beep} from '../utils/ErrorList'
import {disclaimerPurge, getDisclaimerDate} from './Disclaimer'
import { useShared } from '../contexts/SharedContext';
import { pageHeader } from './StockInfo'
import { ComboBoxSelect } from '../utils/ComboBoxSelect'
import {todaySplit, todayDate, todayDateSplit, dateSplit, monthsBack, daysBack, compareDate, daysFrom1970, 
  searchDateInArray, monthsBackTest, daysBackTest, getDate, getDateSec, dateStr, isDailyXArray} from '../utils/Date'
import memoryStore from "../components/MemoryStore";

const  Config = (props) => { 

const {chartSymbol, setChartSymbol,
      symbol,
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

  const [configFlag, setConfigFlag] = useState (false);
  //console.log(`AlphaVantage localStorage ${alpha}`); 
  const {localIp, localIpv4, eliHome, err, ip, os} = IpContext();
  const {userAgent, userAgentMobile, isAndroid, isIPhone, isMobile} = MobileContext();
  const { resetPassword, currentUser, admin } = useAuth(); //, currentUser

  const [serviceInfo, setServiceInfo] = useState('')
  const [disclaimerDate, setDisclaimerDate] = useState('')

  const configFlagChange = () => {setConfigFlag (! configFlag)}


  const portArray = [5000, 5001]

  const tblHightOPtions = ['20vh','30vh', '40vh', '50vh','60vh', '75vh'];
  const [tablHight, setTablHight] = useState(() => localStorage.getItem("tblHight") || tblHightOPtions[2]);
  const tblWidthOPtions = ['75vw', '100vw', '120vw', '140vw', '160vw'];
  const [tablWidth, setTablWidth] = useState(() => localStorage.getItem("tblWidth") || tblWidthOPtions[1]);


  var  yearlyPercent_temp = useMemo(() => (localStorage.getItem('yearlyPercent')), []);
  var yearlyPercent;
  if (yearlyPercent_temp)
    yearlyPercent = true
  else
    yearlyPercent = false

  useEffect (() => { 
    // setGainMap([]);
    // setChartSymbol()
          }, [daily]) 
  memoryStore.set('yearlyPercent', yearlyPercent);
  memoryStore.set('tablHight', tablHight);
  memoryStore.set('tablWidth', tablWidth);

  const rows = memoryStore.get('rows');
  const saveTable = memoryStore.get('saveTable');

  function purgeRestoreStockTable () {
    const keys = Object.keys(rows);
    // empty table 
    for (let i = keys.length -1; i >= 0; i--) {
      delete rows[i].values.mon
      delete rows[i].values.mon3
      delete rows[i].values.mon6
      delete rows[i].values.year
      delete rows[i].values.year2
      delete rows[i].values.year5
      delete rows[i].values.year10
      delete rows[i].values.year20
    }
    setGainMap([]);
    setChartSymbol()
    saveTable();
    window.location.reload(false);
  }

  function setYearlyPercent_wrapper () {
    // setYearlyPercent(! yearlyPercent)
    yearlyPercent = ! yearlyPercent
    purgeRestoreStockTable ()
    if (yearlyPercent)
      localStorage.setItem('yearlyPercent',yearlyPercent)
    else
      localStorage.removeItem('yearlyPercent')
  }

  function setYearlyPercent_wrapper () {
    // setYearlyPercent(! yearlyPercent)
    yearlyPercent = ! yearlyPercent
    purgeRestoreStockTable ()
    if (yearlyPercent)
      localStorage.setItem('yearlyPercent',yearlyPercent)
    else
      localStorage.removeItem('yearlyPercent')
  }



  function purgeTableLoadDefault () {
    purgeStockTable ()
    window.location.reload(false);
  }

  function purgeStockTable () {
    for (let index = props.rows.length -1; index >= 0; index--)
      props.rows.splice(index, 1);
    props.saveTable();
  }

  function reloadPage() {
    window.location.reload(false);
  }

  function columnsHiddenPurge() {
    localStorage.removeItem('columnsHidden')
    reloadPage()
  }
  
  function disclaimerGetDate() {
    const disclaimerDate_ = getDisclaimerDate()
    setDisclaimerDate(disclaimerDate_)
    console.log ('disclaimer', disclaimerDate_, disclaimerDate_.count);
    return disclaimerDate_;
  }

   const style = {
    // background: 'blue',
    // color: 'red',
    // fontSize: 200,
    border: '2px solid blue'
  };
  //   
  return (

    <div >

      {/* <h6 style={{color: 'blue'}}> Config &nbsp;  </h6> */}
    
      {
        <div id = "config_id">

          {/* <h6  style={{color:'#33ee33', fontWeight: 'bold', fontStyle: "italic"}}> &nbsp; Configuration, purge table and other activity  &nbsp; </h6> */}
          {pageHeader ('', 'config', 'Configuration state changes, purge table, login etc' )}

          <div>  &nbsp; <Link href="/dashboard" > Login Dashboard </Link>  </div>

          {/* ====== Filter buttons */} 
          <div  style={{display:'flex', paddingTop: '5px'}}>
            &nbsp; <button onClick={purgeTableLoadDefault} > Purge table default </button> &nbsp;&nbsp; 
            {/*<button onClick={purgeStockTable} > Purge stock table </button> &nbsp;&nbsp; */}
            <button onClick={columnsHiddenPurge} > Default Hidden columns </button>  &nbsp;
            {/* <div> &nbsp; <button onClick={reloadPage} > Reload page </button> &nbsp; </div> */}
          </div>

          <div style={{display:'flex'}}>
            <button style={{height: '30px'}} type="button" className="stock_button_class" onClick={()=>props.saveTable()}>saveTable</button> &nbsp;
            <button onClick={props.refreshByToggleColumns} > Refresh table </button> &nbsp;
          </div>
          
          <hr style={{ border: '3px solid #000000'}}/> 
          <div style={{display:'flex'}}>
            <button onClick={disclaimerPurge} > disclaimer refresh </button> &nbsp;
            <button onClick={disclaimerGetDate} > disclaimer date </button> &nbsp;
            {disclaimerDate &&
             <div>{disclaimerDate.date}, Count: {disclaimerDate.count} </div>}
          </div>

          <hr style={{ border: '3px solid #000000'}}/> 
          <div style={{display: 'flex'}}>Url:  &nbsp;  <div style={{color: '#0077ff'}}> {window.location.href} </div> </div>



          {/* from BasicTable */}
          <hr style={{ border: '3px solid #000000'}}/> 
          {/* <div>Lauout</div> */}
          <div style={{display:'flex'}}>


            <div style={{display:'flex'}}>
              <ComboBoxSelect serv={servSelect} nameList={servNameList} setSelect={setServSelect} title='backEnd' options={servList} defaultValue={servSelect}/> &nbsp;&nbsp; 
            </div> 
            {eliHome && <div style={{display:'flex'}}> <ComboBoxSelect serv={PORT} nameList={portArray} setSelect={setPORT} title='' options={portArray} defaultValue={PORT}/> &nbsp;&nbsp;</div>} &nbsp; &nbsp;       
          </div>       

          <div style={{display:'flex'}}>
            <ComboBoxSelect serv={daily} nameList={['weekly','daily',]} setSelect={setDaily} title='' TITLE='data resultion. weekly or daily ' options={[false,true]} defaultValue={false} /> &nbsp;
              {stockChartYValues.length > 0 && isDailyXArray(stockChartXValues) !== daily && <div style={{color:'red'}}>mode missmatch, press gain</div>}
              
            {eliHome && <ComboBoxSelect serv={yearlyPercent} nameList={['gain_factor','year_percent',]} setSelect={setYearlyPercent_wrapper} 
                TITLE={'table entries: yearly-percent gain vs gain-factor (1.5 means 50% gain)'} options={[false,true]} defaultValue={false} />} &nbsp; &nbsp;
          </div>  


          <div style={{display:'flex'}}>
            <ComboBoxSelect serv={tablHight} nameList={tblHightOPtions} setSelect={setTablHight} title='Table:_height' options={tblHightOPtions} defaultValue={tablHight} localStore = "tblHight"/> &nbsp;
            <ComboBoxSelect serv={tablWidth} nameList={tblWidthOPtions} setSelect={setTablWidth} title='width' options={tblWidthOPtions} defaultValue={tablWidth} localStore = "tblWidth"/>
          </div>      


          {/* Service info */}
          <hr style={{ border: '3px solid #000000'}}/> 
          {eliHome && <div><input  type="checkbox" checked={serviceInfo}  onChange={() => setServiceInfo(! serviceInfo)} />  service-info </div>}

          {serviceInfo && <div>

          <div> &nbsp; </div>
          {/* {isMobile && <div> &nbsp; </div>}  */}
          {admin && false && <div>
            <button type="button" onClick={()=>beep2 ()}>beep2</button> &nbsp;
            <button type="button" onClick={()=>beep(20,64,50)}>64Hz</button>&nbsp;  {/*beep(vol, freq, duration){ */}
            <button type="button" onClick={()=>beep(20,128,50)}>128Hz</button>&nbsp; {/*beep(vol, freq, duration){ */}
            <button type="button" onClick={()=>beep(20,256,50)}>256Hz</button> &nbsp;
            <button type="button" onClick={()=>beep(20,512,50)}>512Hz</button>&nbsp;
            <button type="button" onClick={()=>beep(20,1024,50)}>1024Hz</button>&nbsp;
            <button type="button" onClick={()=>beep(20,2048,50)}>2048Hz</button>&nbsp;
            <button type="button" onClick={()=>beep(20,3072,50)}>3072Hz</button>&nbsp;
            <button type="button" onClick={()=>beep(20,3430,80)}>3430Hz</button>&nbsp;
          </div>}
          {/* <div> &nbsp; </div>  */}
          {/* <hr/> */}

          
          {/* ====== General checlboxes */} 
          <div  style={{display:'flex', paddingTop: '5px'}}>            
            <div style={{display:'flex'}}> &nbsp; &nbsp; <input  type="checkbox" checked={props.smoothSpikes} 
              onChange={() => props.setSmoothSpikes(! props.smoothSpikes)} />  &nbsp;smoothSpikes  &nbsp;  </div>
            
            <div style={{display:'flex'}}>  &nbsp; <input  type="checkbox" checked={props.openMarketFlag}
              onChange={() => props.setOpenMaretFlag(! props.openMarketFlag,)} />  &nbsp;OpenMarket </div>
          </div>

               
          {/* <div>&nbsp; </div> */}
          {admin && <AlphaVantage alphaCallBack={props.alphaCallBack} />}

          {/* ====== Location info */} 
          <div>&nbsp; </div>

          {/* {eliHome && <div>Global-ip: {localIpv4} </div>} */}
          {eliHome && <div>ip={ip}  &nbsp; os={os}</div>}
          {eliHome && <div>Browser:  {userAgent} </div>}
          <div style={{color: 'red'}}> {err} </div>
          
          <div>&nbsp; </div>
          <p>Platform:  {navigator.platform} </p> 
          <p>Browser CodeName: { navigator.appCodeName}</p>
          <p>Browser Language: {navigator.language} </p> 
          <p>isMobile: {isMobile? 'true' : 'false'}</p>
          {/* <p> User-agent header:  {navigator.userAgent} </p> */}
        </div>}   {/* end of service info  */}
        </div>
      }

    </div>
  )
}

export default Config