import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
});

export const metadata = {
  title: "Little Smiles Event",
  description: "Customized Return Gifts for Every Celebration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}