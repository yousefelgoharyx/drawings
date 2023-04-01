import "./globals.scss";
import { Poppins } from "next/font/google";

const montserrat = Poppins({
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
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
