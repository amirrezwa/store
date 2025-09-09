import React from "react";
import Navbar from "./Navbat";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
