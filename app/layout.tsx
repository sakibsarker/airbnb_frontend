import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import AddPropertyModal from "./components/modals/AddPropertyModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Django Bnb",
  description: "Rent House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="pt-24">
          {children}
          <LoginModal />
          <SignupModal />
          <AddPropertyModal />
        </div>
      </body>
    </html>
  );
}
