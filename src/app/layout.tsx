import Image from "next/image";
import "./globals.scss";
import { Poppins } from "next/font/google";
import logo from "../assets/logo.svg";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "VecDraws",
  description:
    "A collection of drawings that explain concepts in computer science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
