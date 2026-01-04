// app/layout.tsx
import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import ThemeRegistry from "./theme-registry";

export const metadata: Metadata = { title: "LinkedIn UI (MUI)" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <CssBaseline />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
