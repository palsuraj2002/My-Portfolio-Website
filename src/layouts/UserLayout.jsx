import React from 'react'
import PillNav from '../components/ui/PillNav';
import react from '../assets/react.svg'
import Particles from "../components/ui/Particles";

const UserLayout = () => {
  return (
    <div className="flex flex-col bg-black">
      <div className="flex justify-center">
        <PillNav
          logo={react}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          theme="light"
          initialLoadAnimation
        />
      </div>

      <div style={{ width: "100%", height: "80vh", position: "relative" }}>
        <Particles
          particleColors={["#fff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
    </div>
  );
}

export default UserLayout