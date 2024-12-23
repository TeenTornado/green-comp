"use client";
import React from "react";
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
        "I've tried several e-waste platforms, but Green Volt is a game-changer. The convenience, educational content, and the overall experience have been fantastic. Highly recommended!",
      picture: "https://via.placeholder.com/150",
    },
    {
      name: "Ravi Sharma",
      location: "Delhi",
      rating: "4.2",
      description:
        "I've tried several e-waste platforms, but Green Volt is a game-changer. The convenience, educational content, and the overall experience have been fantastic. Highly recommended!",
      picture: "https://via.placeholder.com/150",
    },
  ];

  const theme = useTheme();

  return (
    <div className=" relative w-full h-screen mt-24 xl:mt-44 flex flex-col items-center">
      {/* TOP */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Bgec.png')" }}
      />
      <div className="text-[150px] text-center font-bold mb-[-40px] block font-sf-pro bg-gradient-to-r from-[#32bf00] to-[#175900] bg-clip-text text-transparent tracking-tight">
        Testimonials
      </div>

      {/* MIDDLE CARDS */}
      <div className="flex flex-wrap justify-center my-auto">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="m-4 flex flex-col border border-green-900 rounded-lg relative w-[418px] h-[255px]"
          >
            {/* BorderBeam for shining border effect */}

            <BorderBeam />
            <div className=" z-10 shadow-md rounded-3xl overflow-hidden flex flex-col h-full p-4 bg-black">
              {/* Inner content */}
              <div className="text-center text-2xl font-bold capitalize flex-grow">
                <div className="flex mb-4">
                  <div className="flex-shrink-0">
                    <img
                      src={profile.picture}
                      alt={profile.name}
                      className="w-24 h-24 rounded-full"
                    />
                  </div>
                  <div className="flex-grow flex items-center justify-between pl-4">
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {profile.name}
                      </h2>{" "}
                      {/* Text color changed to white */}
                      <p className="text-green-600">{profile.location}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-lg font-semibold text-white">
                        Rating: {profile.rating}
                      </p>{" "}
                      {/* Text color changed to white */}
                    </div>
                  </div>
                </div>
                {/* Bottom div with description */}
                <div className="p-2">
                  <p className="text-gray-300 text-sm">{profile.description}</p>{" "}
                  {/* Text color changed for better contrast */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between px-44 items-center w-full">
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
        <div>
          <span>arrow</span> <span>arrow</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
