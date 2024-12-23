"use client";

import React, { useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useTheme } from "next-themes";

const Testimonials = () => {
  const profiles = [
    {
      name: "Aryan Kumar",
      location: "Rajasthan",
      rating: "4.5",
      description:
        "I've tried several e-waste platforms, but Green Volt is a game-changer. The convenience, educational content, and the overall experience have been fantastic. Highly recommended!",
      picture: "https://via.placeholder.com/150",
    },
    {
      name: "Sneha Singh",
      location: "Maharashtra",
      rating: "4.8",
      description:
        "A truly transformative experience! The educational content helped me make informed decisions.",
      picture: "https://via.placeholder.com/150",
    },
    {
      name: "Ravi Sharma",
      location: "Delhi",
      rating: "4.2",
      description:
        "Simple and effective service. I would definitely use this platform again.",
      picture: "https://via.placeholder.com/150",
    },
    {
      name: "Harish",
      location: "Bihar",
      rating: "4.7",
      description: "Very very good.",
      picture: "https://via.placeholder.com/150",
    },
    {
      name: "Sreeram",
      location: "Bihar",
      rating: "4.9",
      description: "Very good! Everyone should try it.",
      picture: "https://via.placeholder.com/150",
    },
    {
      name: "Yogesh",
      location: "Bihar",
      rating: "4.6",
      description: "Good.",
      picture: "https://via.placeholder.com/150",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const testimonialsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(profiles.length / testimonialsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(profiles.length / testimonialsPerPage)) %
        Math.ceil(profiles.length / testimonialsPerPage)
    );
  };

  return (
    <div className=" relative w-full h-screen mt-24 xl:mt-44 flex flex-col items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Bgec.png')" }}
      />
      {/* TOP */}
      <div className="text-[10vw] md:text-[150px] text-center font-bold mb-[-40px] block font-sf-pro bg-gradient-to-r from-[#32bf00] to-[#175900] bg-clip-text text-transparent tracking-tight">
        Testimonials
      </div>

      {/* MIDDLE CARDS */}
      <div className="flex flex-wrap justify-center my-auto gap-4">
        {profiles
          .slice(
            currentIndex * testimonialsPerPage,
            currentIndex * testimonialsPerPage + testimonialsPerPage
          )
          .map((profile, index) => (
            <div
              key={index}
              className="flex flex-col border rounded-lg relative w-full sm:w-80 lg:w-[418px] h-[255px]"
              style={{ borderColor: "#10C900" }}
            >
              <BorderBeam />
              <div className="relative z-10 shadow-md rounded-3xl overflow-hidden flex flex-col h-full p-4 bg-black">
                <div className="text-center text-xl md:text-2xl font-bold capitalize flex-grow">
                  <div className="flex mb-4">
                    <div className="flex-shrink-0">
                      <img
                        src={profile.picture}
                        alt={profile.name}
                        className="w-16 h-16 rounded-full"
                      />
                    </div>
                    <div className="flex-grow flex items-center justify-between pl-4">
                      <div>
                        <h2 className="text-left text-lg md:text-xl font-bold text-white">
                          {profile.name}
                        </h2>
                        <p className=" text-left text-green-600">
                          {profile.location}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <p className="text-lg font-semibold text-white">
                          Rating: {profile.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="text-gray-300 text-left text-sm">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* FOOTER */}
      <div className="flex justify-between px-4 lg:px-44 items-center w-full mt-6">
        {/* LEFT */}
        <div>
          <div className="bg-green-700 rounded-lg inline-block w-[80px] mr-6">
            &nbsp;
          </div>
          <div className="bg-green-500 rounded-full inline-block w-[18px]">
            &nbsp;
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-end items-center w-full mt-6 pr-4 sm:pr-10">
          <button
            onClick={handlePrev}
            className="mr-3 rounded-full w-16 h-16 flex items-center justify-center bg-black border-2 border-green-700"
          >
            <div className="text-green-700 text-3xl" style={{ lineHeight: 0 }}>
              &#8592;
            </div>
          </button>
          <button
            onClick={handleNext}
            className="rounded-full w-16 h-16 flex items-center justify-center bg-black border-2 border-green-700 "
          >
            <div className="text-green-700 text-3xl" style={{ lineHeight: 0 }}>
              &#8594;
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
