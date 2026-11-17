import type { ReactNode } from "react";

export const metadata = { title: "Team Tasks — WS1 homework starter" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", maxWidth: 720, margin: "40px auto", padding: "0 16px" }}>
        {children}
      </body>
    </html>
  );
}
