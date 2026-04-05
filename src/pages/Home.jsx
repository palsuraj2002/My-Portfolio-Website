import React from "react";
import Particles from "../components/ui/Particles";
import ProfileCard from "../components/ui/ProfileCard";
import Lanyard from "../components/ui/Lanyard";
import SNP from "../assets/SNP.png";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0" style={{ height: "100vh" }}>
        <Particles
          particleColors={["#ffffff", "#3b82f6"]} // Adding a hint of blue to match your dev vibe
          particleCount={150}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:flex-row md:gap-20">
        {/* Interactive Lanyard Section */}
        {/* <div className="w-full h-[100%]">
          <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
        </div> */}

        {/* Profile Card Section */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <ProfileCard
            name="Suraj Nagina Pal"
            title="Full Stack Developer"
            handle="palsuraj2002"
            status="Available for Work"
            contactText="Get In Touch"
            avatarUrl={SNP}
            showUserInfo={true} // Set to true if you want the details to pop
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() =>
              (window.location.href = "mailto:connectwithsuraj@gmail.com")
            }
            behindGlowColor={false}
            behindGlowEnabled={false}
            innerGradient={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
