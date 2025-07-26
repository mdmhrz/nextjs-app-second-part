import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Learning Next.js',
    template: '%s | Next.js App'
  },
  keywords: ['Next.js', 'React', 'JavaScript', 'Learning'],
  description: "This is a Next.js application for learning purposes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
