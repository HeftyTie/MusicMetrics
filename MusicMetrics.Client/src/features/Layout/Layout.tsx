import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { NavigationBar } from "./components/NavigationBar";
import { Drawer } from "./components/Drawer/Drawer";
import "./Layout.css";

export const Layout: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div
        className={`transition-transform ${
          isDrawerOpen ? "transform translate-x-64 md:translate-x-0" : ""
        }`}
      >
        <div className="flex flex-col">
          <NavigationBar toggleDrawer={toggleDrawer} />
          <div className="overflow-y-auto no-scrollbar mb-[5vh]">
            <Outlet />
          </div>
          <div className="fixed bottom-0 w-full bg-current shadow-inner">
            <Footer />
          </div>
        </div>
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};
