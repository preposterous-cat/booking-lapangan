import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Booking Lapangan",
  description: "Tes Kominfo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased pt-5",
          inter.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
