/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

import LayoutHeader from "./components/LayoutHeader";
import Sidebar from "./components/Sidebar";

import Progress from "./components/Progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INFLU – Creator & Influencer CRM | UGC Workflow & Collaboration Platform",
  description:
    "INFLU is the all-in-one CRM for creators, influencers, agencies, and UGC teams. Manage clients, campaigns, portfolios, deliverables, payments, and collaboration in one platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased home-one`}
      >
        
        <Progress />
         <LayoutHeader />
         <Sidebar />
         
        {children}
       
     
     {/* JS LOADING ORDER — IMPORTANT */}

        {/* jQuery must load FIRST */}
        <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="beforeInteractive" />

        {/* Plugins requiring jQuery */}
        <Script src="/assets/js/vendor/counter.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery.meanmenu.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery.magnific-popup.min.js" strategy="afterInteractive" />

        {/* Chart.js */}
        <Script src="/assets/js/vendor/chart.js" strategy="afterInteractive" />

        {/* GSAP & animation plugins */}
        <Script src="/assets/js/vendor/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/ScrollToPlugin.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/split-types.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/MotionPathPlugin.min.js" strategy="afterInteractive" />

        {/* Custom */}
        <Script src="/assets/js/vendor/backToTop.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
       </body>
    </html>
  );
}
