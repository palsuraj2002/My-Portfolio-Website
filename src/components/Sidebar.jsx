import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router";
import { Outlet } from "react-router-dom";
import { LayoutDashboard, Award } from "lucide-react";

const Sidebar = () => {
  const data = [
    { id: 1, icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { id: 2, icon: Award, label: "Skills", path: "/skills" },
  ];
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        <main className="p-6 grow bg-base-100">
          <Outlet />
        </main>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow gap-2">
            {data.map((item) => (
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip={`${item.label}`}
                key={item.id}
              >
                <NavLink
                  to={item.path}
                  className={({
                    isActive,
                  }) => `flex items-center gap-3 p-2 rounded-lg transition-colors 
                  ${isActive ? "bg-gray-400 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                >
                  <item.icon size={20} color="#000" />
                  <span className="is-drawer-close:hidden text-md font-medium">
                    {item.label}
                  </span>
                </NavLink>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
