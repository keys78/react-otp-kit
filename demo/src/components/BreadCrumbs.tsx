import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activePath, setActivePath] = useState("");

  const pathname = location.pathname.endsWith("/")
    ? location.pathname.slice(0, -1)
    : location.pathname;
  const pathHash = location.hash.substring(1);
  const paths = pathname.split("/");

  if (pathHash) {
    paths.push(pathHash);
  }

  const navigateTo = (index: number) => {
    let path = "/" + paths[index];
    if (index === paths.length - 1 && pathHash) {
      path = `/${paths.slice(0, -1).join("/")}${location.hash}`;
    }
    navigate(path);
    setActivePath('/' + paths[index])

  };

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <div className="capitalize mb-[16px] flex items-center">
      {paths?.map((path, index) => (
        <React.Fragment key={index}>
          <span
            className={`text-[14px] ${
              index !== paths?.length - 1 && "cursor-pointer"
            } ${"/" + path === activePath && "active"}`}
            onClick={() => navigateTo(index)}
          >
            {path === "" ? "Home" : path}
          </span>
          <span
            className={`px-[4px] mb-[-5px] ${index === paths?.length - 1 && "hidden"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumbs;
