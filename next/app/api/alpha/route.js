import { NextResponse } from 'next/server';

 const period = [['DAILY', 'Daily'],['WEEKLY', 'Weekly'],['MONTHLY', 'Monthly)']];
    let periodCapital = period[1][0];  

  
  // 1. open: '87.7500'
  // 2. high: '97.7300'
  // 3. low:  '86.7500'
  // 4. close: '90.6200'
  // 5. adjusted close: '0.6867'
  // 6. volume: '25776200'
  // 7. dividend amount:'0.0000'

  // const openOrCloseText = openMarketFlag ? '1. open' : '4. close';

    


//Runs on server, get key from .env.local 
export async function GET(request) {
  // The secret key is accessed safely on the server
  const API_KEY = process.env.HRRP_API_ALPHAVANTAGE_KEY;
  const { searchParams } = new URL(request.url);
  const sym = searchParams.get('symbol');
  const weekly = searchParams.get('weekly');
  const function_ = searchParams.get("function") || "TIME_SERIES_DAILY_ADJUSTED"; // Default to daily if not provided
  const keywords = searchParams.get("keywords") || ""; // Default to empty string if not provided
  const log = searchParams.get("log") || false; // Default to false if not provided


  var periodTag 
  var API_Call

  if (function_ === 'SYMBOL_SEARCH') {
    API_Call = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH`;
    API_Call += `&keywords=${keywords}&apikey=${API_KEY}`;
  }

  else if (function_ === 'OVERVIEW') {
    API_Call = `https://www.alphavantage.co/query?function=OVERVIEW`;
    API_Call += `&symbol=${sym}&apikey=${API_KEY}`;
  }

  else {// TIME_SERIOS_DAILY_ADJUSTED or TIME_SERIES_WEEKLY_ADJUSTED
    if (weekly === 'true')
        periodTag = 'TIME_SERIES_WEEKLY_ADJUSTED';
    else
        periodTag = "TIME_SERIES_DAILY_ADJUSTED" //"Time Series (Daily)"

    API_Call = `https://www.alphavantage.co/query?function=${periodTag}`;
    API_Call += `&symbol=${sym}&outputsize=full&apikey=${API_KEY}`
  }
  console.log("route:", API_Call);

  // Example: Using the secret to fetch external data
  const response = await fetch(API_Call, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });

  const data = await response.json();
  if (log)
    console.log ("route data:", data);

  // Only return the sanitized data to the client, NEVER the key
  return NextResponse.json( data );
}

//     
//process.env.NEXT_PUBLIC_ALPHAVANTAGE_KEY