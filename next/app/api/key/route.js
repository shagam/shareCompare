import { NextResponse } from 'next/server';

//Runs on server, get from .env.local 
export async function GET() {
  // The secret key is accessed safely on the server
  const apiKey = process.env.HRRP_API_ALPHAVANTAGE_KEY;

  // Example: Using the secret to fetch external data
  const response = await fetch('https://external-api.com/data', {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  });

  const data = await response.json();

  // Only return the sanitized data to the client, NEVER the key
  return NextResponse.json({ data });
}

//     
//process.env.NEXT_PUBLIC_ALPHAVANTAGE_KEY