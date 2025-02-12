
import "./globals.css";


export const metadata = {
  title: "FitPlus",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-fa">
      <body dir="rtl" className="bg-bg">
        {children}
      </body>
    </html>
  );
}
