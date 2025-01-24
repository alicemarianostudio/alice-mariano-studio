import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { navigationQuery } from "@/sanity/queries/navigation";

import BackgroundSetter from "@/components/BackgroundSetter";
import OmnisendScript from "@/components/omnisend";

import GoogleAnalytics from "@/components/google";

const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    omnisend: any[];
  }
}

export const metadata: Metadata = {
  title: "Alice Mariano Studio",
  description:
    "Alice Mariano Studio is a place that honors home decor and design, featuring curated moodboards and expert guides to inspire you with the perfect pieces for your space.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navData = await client.fetch(navigationQuery);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1FBV4JKMGD"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1FBV4JKMGD');
        `}
      </Script>

      {/* Include the new GoogleAnalytics client-side component */}
      <GoogleAnalytics />
      <html lang="en">
        <body className={inter.className}>
          <BackgroundSetter>
            <NavBar navigation={navData} />
            {children}
            <Footer />
            <Script
              id="calendly"
              src="https://assets.calendly.com/assets/external/widget.js"
            />
            <OmnisendScript />
          </BackgroundSetter>
        </body>
      </html>
    </>
  );
}
