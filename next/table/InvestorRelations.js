"use client";
import React, {useState} from 'react';

import Link from "next/link";
import MobileContext from '../contexts/MobileContext'

import {IpContext, getIpInfo} from '../contexts/IpContext';

import { useShared } from '../contexts/SharedContext';
import { pageHeader } from '../table/StockInfo'

const investorRelationsArray = [
   {
        link:         'https://investor.nvidia.com/financial-info/financial-reports/',
        name:         'Nvidia',
        ticker:       'NVDA',
    },   
    {
        link:         'https://investors.micron.com/news/press-release/2026/Micron-Technology-Inc--Reports-Record-Fiscal-Fourth-Quarter-and-Full-Year-2026-Results/',
        name:         'Micron',
        ticker:       'MU',
    },
    {
        link:         'https://investors.broadcom.com/financial-information/quarterly-results',
        name:         'Broadcom',
        ticker:       'AVGO',
    },
    {
        link:         'https://investor.asml.com/static-files/2ad61577-1882-4473-8a69-bbaced05e0a4',
        name:         'ASML holdings',
        ticker:       'ASML',
    },
    {
        link:         'https://investor.tsmc.com/english/quarterly-results/2026/q3',
        name:         'Taiwan Semiconductor and manufecturing',
        ticker:       'TSM',
    },
    {
        link:         'https://ir.appliedmaterials.com/static-files/425ac634-4ee7-4c41-a07f-fa9e3c42b797',
        name:         'Applied Materials Corporation',
        ticker:       'AMAT',
    },
    {
        link:         'https://ir.amd.com/',
        name:         'Advanvced micro devices',
        ticker:       'AMD',
    },
    {
        link:         'https://fiscal.ai/company/NASDAQ_SKHY/investor-relations/547968/',
        name:         'SK Hynex',
        ticker:       'SKHY',
    },
    {
        link:         '',
        name:         '---',
        ticker:       ' ',
    },

    
    {
        link:         'https://investor.apple.com/investor-relations/default.aspx',
        name:         'Apple',
        ticker:       'AAPL',
    },
    {
        link:         'https://www.microsoft.com/en-us/investor/default',
        name:         'Microsoft',
        ticker:       'MSFT',
    },
    {
        link:         'https://ir.aboutamazon.com/sec-filings/default.aspx',
        name:         'Amazon',
        ticker:       'AMZN',
    },
    {
        link:         'https://abc.xyz/investor/',
        name:         'Alphabet',
        ticker:       'GOOGL',
    },
    {
        link:         'https://investor.atmeta.com/financials/default.aspx',
        name:         'Facebook',
        ticker:       'META',
    },

    {
        link:         '',
        name:         '---',
        ticker:       ' ',
    },
   {
        link:         'https://ir.spacex.com/investors/default.aspx',
        name:         'SpaceX',
        ticker:       'SPCX',
    },


    {
        link:         'https://investor.lilly.com/investor-relations?mobile=1',
        name:         'Eli Lilly',
        ticker:       'LLY',
    },
    {
        link:         'https://investors.pfizer.com/Investors/Overview/default.aspx',
        name:         'Pfizer',
        ticker:       'PFE',
    },
 
   



    // {
    //     link:         'https://www.astrazeneca.com/investor-relations.html',
    //     name:         'AstraZeneca Investor Relations',
    //     ticker:       'AZN',
    //     // description:  'Stock market bubble. Can we predict future crash? ',
    // },

]




function InvestorRelations () {
    const {eliHome} = IpContext();
    const {isMobile} = MobileContext();
    const [mobile, setMobile]  = useState(isMobile);
    const [searchText, setSearchText] = useState('');
    // https://www.w3schools.com/cssref/pr_class_display.php

    const ROW_SPACING = {padding: "0px 5px 4px 8px", margin: '0px'}
  //  top, right, bottom, left 

    return (

    <div style = {{ border: '2px solid blue', background: '#f0f0e0', padding: '5px', margin: '5px'}} >

        {pageHeader (null, 'Investor Relations links', 'Financial Information for investors and shareholders. Quaterly and yearly', null,null)}

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
                        <tr style={ROW_SPACING} key={index} >
                            <td style={ROW_SPACING}>
                                { <a href={item.link}><b>{item.ticker}</b> </a>}
                            </td>
                            <td style={ROW_SPACING}>{item.name}</td>
                            {/* <td>{item.description}</td> */}
                        </tr>
                      })}
                </tbody>
            </table>


        </div>
        <hr/> 

    </div>
    )}

    export default InvestorRelations