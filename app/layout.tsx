import Footer from "@components/server/Footer";
import "./globals.scss";
import { Montserrat, Open_Sans } from "next/font/google";
import Headers from "@components/Headers";
export { universalMetaData as metadata } from "@seoconfig/universal"; // For Setting Global SEO

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${openSans.className}`}>
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
