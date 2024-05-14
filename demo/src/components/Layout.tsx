import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isSideBar = location.pathname !== "/";

  return (
    <main>
      <Header />
      <div className={`"flex mt-24 ml-[350px] pr-[60px]" ${isSideBar ? 'ml-[350px]' : 'ml-[60px]'}`}>
        {isSideBar && <SideNav />}
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
