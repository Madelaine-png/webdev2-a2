/*
 * File: layout.tsx
 * Author: Sarah Sheraz
 * Date: October 30, 2026
 *
 * layout component
 */

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Major section: Page metadata
export const metadata: Metadata = {
  title: "Northstar High School | Student Portal",
  description: "Manage students, grades and honour roll statistics.",
};

// Major section: Root layout
interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
        {/* Shared navigation */}
        <Navbar />

        {/* Current page content */}
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Shared footer */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
