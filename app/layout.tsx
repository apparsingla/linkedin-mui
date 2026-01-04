// app/layout.tsx
import type { Metadata } from "next";
import ThemeRegistry from "./theme-registry";

export const metadata: Metadata = { title: "LinkedIn UI (MUI)" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
