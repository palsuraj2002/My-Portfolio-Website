import React from 'react'
import PillNav from '../components/ui/PillNav';
import react from '../assets/react.svg'
import colorLogo from "../assets/high-resolution-color-logo.png";

import Home from '../pages/Home';

const UserLayout = () => {
  return (
    <div className="flex flex-col bg-black">
      <div className="flex justify-center">
        <PillNav
          logo={colorLogo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            // { label: "About", href: "/about" },
            // { label: "Services", href: "/services" },
            // { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#ffffff"
          pillColor="#000000"
          hoveredPillTextColor="#000000"
          pillTextColor="#ffffff"
          theme="light"
          initialLoadAnimation
        />
      </div>
        <Home/>
    </div>
  );
}

export default UserLayout