import Header from "./(layout)/header/Header";
import "./styles/globals.css";
import Footer from "./components/Footer";
import { Metadata } from "next";
import localFont from "next/font/local";

// const iranSans = localFont({
//   src: [
//     {
//       path: "fonts/iransans/IRANSansX-Regular.woff",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "fonts/iransans/IRANSansX-Bold.woff",
//       weight: "700",
//       style: "normal",
//     },
//   ],
// });

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی دیجیکالا",
  description: "فروشگاه اینترنتی دیجیکالا",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`w-full`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
