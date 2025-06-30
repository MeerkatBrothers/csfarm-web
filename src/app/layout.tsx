import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import clsx from "clsx";

import "@/styles/global.css";

import QueryProvider from "@/lib/providers/QueryProvider";

import { LoginModalProvider } from "@/domains/auth/providers/LoginModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "씨에스팜 | 개발 지식 농장",
  description: "매일 심고 수확하는 개발 지식의 밭",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <body className={clsx("min-h-screen antialiased", geistSans.variable, geistMono.variable)}>
        <QueryProvider>
          <LoginModalProvider>{children}</LoginModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
