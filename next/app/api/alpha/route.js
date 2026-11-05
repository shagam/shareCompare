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

    // let API_Call;
    // if (weekly)
    //   API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_${periodCapital}_ADJUSTED`;
    // else
    //   API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED`;

    // API_Call += `&symbol=${sym}&outputsize=full&apikey=${API_KEY}`

    // API_Call += `&extended_hours=true`

    // fetch(API_Call)
    //     .then(
    //         function(response) {
    //             const respStr = JSON.stringify (response);
    //             if (response.status !== 200 || ! response.ok)
    //                 console.log(response);
    //             return response.json();
    //         }
    //     )
    //     .then(
    //         (chartData) => {
    //           const dataStr = JSON.stringify(chartData);
    //           if (dataStr === "{}") {
    //             errorAdd([sym, 'Invalid symbol, or fail to fetch historical data'])
    //             return;
    //           }
    //           if (dataStr && dataStr.includes('Burst pattern detected')) {
    //             errorAdd([sym, dataStr.substring(0, 130)]);
    //             console.log (sym, dataStr);
    //             return;
    //           }
    //           if (LOG_API) {
    //             console.log (API_Call);
    //             console.dir (chartData)
    //             // console.log (dataStr.substring(0,150));
    //           }




//Runs on server, get key from .env.local 
export async function GET(request) {
  // The secret key is accessed safely on the server
  const API_KEY = process.env.HRRP_API_ALPHAVANTAGE_KEY;
  const { searchParams } = new URL(request.url);
  const sym = searchParams.get('symbol');
  const weekly = searchParams.get('weekly');  
  var API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED`;
  API_Call += `&symbol=${sym}&outputsize=full&apikey=${API_KEY}`



  // Example: Using the secret to fetch external data
  const response = await fetch(API_Call, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });

  const data = await response.json();

  // Only return the sanitized data to the client, NEVER the key
  return NextResponse.json({ data });
}

//     
//process.env.NEXT_PUBLIC_ALPHAVANTAGE_KEY