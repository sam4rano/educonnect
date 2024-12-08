import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/utils/theme-provider";
import { Kanit, Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./Provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["400", "500", "600", "700"],
  variable: "--font-Kanit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Educonnect",
  description: "Student's question and answer repository",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${kanit.variable} antialiased`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <ToastContainer />
        </Providers>
        {/* <SessionProvider></SessionProvider> */}
      </body>
    </html>
  );
}
