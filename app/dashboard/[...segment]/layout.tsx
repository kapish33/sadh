import { montserrat, openSans } from "@config/fonts";
import "../../globals.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${openSans.className}`}>
        {children}
      </body>
    </html>
  );
}
