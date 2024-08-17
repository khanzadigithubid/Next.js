import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin: LinkedIn - Connect Clients",
  description: "Admin Page: LinkedIn is a professional networking platform designed to help individuals and businesses connect, share, and grow their professional networks. Here a quick overview of its key features and functions."
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <span>Logout Navbar</span>
        {children}
        </>
        
  );
}
