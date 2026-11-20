"use client";

import type { ReactNode } from "react";
import {BasicTable} from "../table/BasicTable";
import { AuthProvider } from "../contexts/AuthContext";
// import { IpProvider } from "../contexts/IpContext";
// import { MobileProvider } from "../contexts/MobileContext";
import {SharedProvider} from '../contexts/SharedContext'

export default function RootLayout({ children, }: {
  children: ReactNode;}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <SharedProvider>
            <BasicTable/>
              <div  style={{border: '2px solid blue',background: '#f0f0e0', paddingTop: '6px',}}>
                {children }
              </div>
          </SharedProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
