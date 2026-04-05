import React from "react";
import { LogOut, Settings, UserPen } from "lucide-react";

const UserAvatar = ({ src }) => {
  const data = [
    { id: "1", icon: UserPen, label: "Profile" },
    { id: "2", icon: Settings, label: "Settings" },
    { id: "3", icon: LogOut, label: "Logout" },
  ];

  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={src} />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          {data.map((item) => (
            <li key={item.id}>
              <a className="flex items-center gap-2">
                <item.icon size={16} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserAvatar;
