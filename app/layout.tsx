import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_NAME } from "@/constants/shared";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS / Firebase CRUD",
  description: "A simple CRUD app using NextJS and Firebase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              {APP_NAME}
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition"
              >
                Home
              </Link>
              <Link
                href="/books"
                className="text-gray-700 hover:text-primary transition"
              >
                Books
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
