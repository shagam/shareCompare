"use client";
// import BasicTable from "../table/BasicTable";

// export default function Page() {
//   return null// <BasicTable />;
// }

// 'use client';

import { useState } from 'react';
// import { useShared } from '../contexts/SharedContext';
import {IpContext} from '../contexts/IpContext';



export default function Page() {
  const {localIp, localIpv4, eliHome, city, countryName, countryCode, regionName, ip, os} = IpContext();
  const [data, setData] = useState(null);

  async function fetchData(symbol, weekly) {
    // The browser calls YOUR server, not the external API directly
    // const res = await fetch('/api/my-secret-route');
    const res = await fetch(`/api/alpha?symbol=${symbol}&weekly=${weekly}`);
    const result = await res.json();
    setData(result.data);
  }
  
  return (
    <div>
      {eliHome && <button onClick={fetchData}>Fetch Securely</button>}
      {eliHome && <button onClick={() => fetchData('MSFT', false)}>MSFT Daily</button>}
      {eliHome && <button onClick={() => fetchData('AAPL', false)}>AAPL Daily</button>}
      {eliHome && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
};
