import React, { ReactNode, useState, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BreadCrumbs from "./BreadCrumbs";

const SideNav = lazy(() => import("./SideNav")); // Lazy load SideNav

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const isSideBar: boolean = location.pathname !== "/";

  const toggleSideBar = (): void => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <main>
      <Header toggleSideBar={toggleSideBar} />
      <div className="flex items-start">
        <Suspense fallback={<div>Loading....</div>}>
          {
            <div
              className={`overflow-scroll bg-baseFour border border-accent-1 rounded-r-[10px] fixed h-full z-50 transition-all duration-500 md:hidden block ${
                isSideBarOpen ? "left-0" : "-left-full"
              }`}
            >
              <button
                className="md:hidden block pt-6 pl-5 -mb-16"
                onClick={toggleSideBar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
              <SideNav toggleSideBar={toggleSideBar} />
            </div>
          }
          {isSideBar && (
            <div className="md:block hidden">
              <SideNav />
            </div>
          )}
        </Suspense>
        <div
          className={`md:px-[60px] px-[20px] mt-24 max-w-[1200px] ${
            !isSideBar ? "mx-auto" : ""
          }`}
        >
          { location.pathname !== '/' && <BreadCrumbs /> }
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
};


export default Layout;
