import Footer from "@components/server/Footer";
import "../globals.scss";
import Headers from "@components/Headers";
import { montserrat, openSans, tiroGurmukhi } from "@config/fonts";
export { universalMetaData as metadata } from "@seoconfig/universal"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${openSans.className} ${tiroGurmukhi.className}`}>
        <div id="main" className="bg-main">
          <Headers />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
