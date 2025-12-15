import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const roboto = Roboto({
  weight: ["400"]
})

const playfairDisplay = Playfair_Display({
  weight: ["400"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: "Next shop",
  description: "Developed by Saiful Alom",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${playfairDisplay.variable}`}>
        {children}
        <Toaster
          position="top-center"
          richColors
        />
      </body>
    </html>
  );
}
