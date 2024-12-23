import React from "react";
import { Meteors } from "./magicui/meteors";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Meteors number={20} />
      </div>

      <div className="relative z-10 flex flex-col justify-end">
        <div className="pl-10 pt-60">
          <b className="text-[180px] leading-none block font-[SF Pro Display] bg-gradient-to-r from-[#32bf00] to-[#175900] bg-clip-text text-transparent">
            Green
          </b>
          <b className="text-[180px] leading-none block font-[SF Pro Display] bg-gradient-to-r from-[#32bf00] to-[#175900] bg-clip-text text-transparent mb-3">
            Computing
          </b>
        </div>

        <div className="w-full max-w-[990px] text-[21px] pl-12 tracking-[0.1em] font-[SF Pro Display] text-white text-justify flex items-center opacity-80 mb-20">
          Our vision is to harness the power of Information Technology and
          Artificial Intelligence to drive sustainable development. By
          leveraging cutting-edge digital solutions, we aim to minimize
          environmental impact, optimize resource efficiency, and promote
          eco-friendly innovations. Through green computing practices, we strive
          to create a world where technology not only advances human progress
          but also safeguards the planet for future generations.
        </div>
      </div>
    </div>
  );
};

export default Hero;
