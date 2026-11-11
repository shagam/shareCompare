"use client";
import React, {useState} from 'react';

import Link from "next/link";
import MobileContext from '../contexts/MobileContext'

import {IpContext, getIpInfo} from '../contexts/IpContext';

import { useShared } from '../contexts/SharedContext';
import { pageHeader } from '../table/StockInfo'

const investorRelationsArray = [

    {
        link:         'https://www.microsoft.com/en-us/investor/default',
        name:         'Microsoft Investor Relations',
        ticker:       'MSFT',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },   
    {
        link:         'https://abc.xyz/investor/',
        name:         'Alphabet Investor Relations',
        ticker:       'GOOGL',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },
    {
        link:         'https://investor.lilly.com/investor-relations?mobile=1',
        name:         'Eli Lily Investor Relations',
        ticker:       'LLY',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },
    {
        link:         'https://investors.micron.com/news/press-release/2026/Micron-Technology-Inc--Reports-Record-Fiscal-Fourth-Quarter-and-Full-Year-2026-Results/',
        name:         'Micron Investor Relations',
        ticker:       'MU',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },
    {
        link:         'https://investors.broadcom.com/financial-information/quarterly-results',
        name:         'Broadcom Investor Relations/AVGO',
        ticker:       'AVGO',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },
    {
        link:         'https://investors.pfizer.com/Investors/Overview/default.aspx',
        name:         'Pfizer Investor Relations/PFE',
        ticker:       'PFE',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },
    // {
    //     link:         'https://d1io3yog0oux5.cloudfront.net/_648c46270830f3cdda50c797644ab1ae/amd/db/841/9237/financial_tables_pdf/Q2+2026+GAAP+and+Non-GAAP+Earnings+Tables.pdf',
    //     name:         'AMD',
    //     // description:  'Stock market bubble. Can we predict future crash? ',
    // },

    {
        link:         'https://investor.asml.com/static-files/2ad61577-1882-4473-8a69-bbaced05e0a4',
        name:         'ASML holdings Investor Relations',
        ticker:       'ASML',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },
    {
        link:         'https://investor.tsmc.com/english/quarterly-results/2026/q3',
        name:         'Taiwan Semiconductor Investor Relations',
        ticker:       'TSMC',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },
    {
        link:         'https://ir.appliedmaterials.com/static-files/425ac634-4ee7-4c41-a07f-fa9e3c42b797',
        name:         'Applied Materials Investor Relations',
        ticker:       'AMAT',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },
    {
        link:         'https://investor.atmeta.com/financials/default.aspx',
        name:         'Facebook Investor Relations',
        ticker:       'META',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },
    {
        link:         'https://fiscal.ai/company/NASDAQ_SKHY/investor-relations/547968/',
        name:         'SKHY Investor Relations',
        ticker:       'SKHY',
        // description:  'Stock market bubble. Can we predict future crash? ',
    },







]




function InvestorRelations () {
    const {eliHome} = IpContext();
    const {isMobile} = MobileContext();
    const [mobile, setMobile]  = useState(isMobile);
    const [searchText, setSearchText] = useState('');
    // https://www.w3schools.com/cssref/pr_class_display.php


    return (

    <div style = {{ border: '2px solid blue', background: '#f0f0e0', padding: '5px', margin: '5px'}} >

        {pageHeader (null, 'Investor Relations', 'Information for investors and shareholders', null,null)}

        <hr style={{ border: '3px solid #000000'}}/> 


        <div className='w-100 text-left mt-2' style={{color:'magenta'}}>



            {/* {eliHome && <div style={{display:'flex'}}> <ComboBoxSelect serv={language} nameList={languageList} setSelect={setLanguage} title='backEnd' options={languageList} defaultValue={language}/> &nbsp;&nbsp;</div>}  */}
            <div style={{display: 'flex'}}>              
                <hr style={{ border: '3px solid #000000'}}/> 
            </div>
        </div>         

        {/* <hr/> */}
        <div >
            <table>
                <tbody> 
                      {investorRelationsArray.map((item, index) => {
                        return ((!searchText || ! item.description || ! item.name ||
                        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchText.toLowerCase()))               
                    ) && 
                        <tr key={index} >
                            <td>{item.ticker}</td>
                            <td>
                                { <a href={item.link}><b>{item.name}</b> </a>}
                            </td>
                            <td>{item.description}</td>
                        </tr>
                      })}
                </tbody>
            </table>


        </div>
        <hr/> 

    </div>
    )}

    export default InvestorRelations