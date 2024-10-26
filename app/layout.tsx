import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/NavBar";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the document
export const metadata: Metadata = {
  title: "My Next.js App", // Update title to be more descriptive
  description: "A simple application built with Next.js and Tailwind CSS", // Update description
};

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          {children} {/* Render child components */}
        </body>
      </html>
    </ThemeProvider>
  );
}
