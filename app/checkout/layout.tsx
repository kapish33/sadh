import { montserrat, openSans } from "@config/fonts";
import Script from "next/script";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={`${montserrat.className} ${openSans.className}`}>
          {children}
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
