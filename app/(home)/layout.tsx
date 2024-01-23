import Footer from "@components/server/Footer";
import "../globals.scss";
import Headers from "@components/Headers";
import { montserrat, openSans, tiroGurmukhi, roboto, inter } from "@config/fonts";
import Script from "next/script";
import ScrollToTop from "@/source/components/ScrollToTop";
export { universalMetaData as metadata } from "@seoconfig/universal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <html lang="en">
      <body className={`${montserrat.className} ${openSans.className} ${tiroGurmukhi.className} ${roboto.className} ${inter.className}`}>
        <div className="bg-main-mobile md:bg-main">
          <Headers />
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
    <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
