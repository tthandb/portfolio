import Providers from "../components/Providers";
import { staatliches } from "./fonts";
import "@repo/ui/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SBC Rating Calculator",
  description: "Calculator tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={staatliches.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
