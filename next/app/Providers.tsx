"use client";

import type { ReactNode } from "react";
import { BasicTable } from "../table/BasicTable";
import { AuthProvider } from "../contexts/AuthContext";
import { SharedProvider } from "../contexts/SharedContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <SharedProvider>
        <BasicTable />
        <div
          style={{
            border: "2px solid blue",
            background: "#f0f0e0",
            paddingTop: "6px",
          }}
        >
          {children}
        </div>
      </SharedProvider>
    </AuthProvider>
  );
}