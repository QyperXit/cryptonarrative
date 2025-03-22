import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex justify-center items-center text-[#d4d4d4] font-mono">
      <div className="container mx-auto px-4">
        <Header />
        <main className="py-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
