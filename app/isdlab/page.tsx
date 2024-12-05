import React from 'react';

const Isdlab = () => {
  const cardData = [
    {
      title: "ISD Lab Training",
      description: "The Department of Computing Technologies has partnered with M/S. SiGeTech, a technical expert in providing innovative technology solutions to empower the industry, academic institutions, and research labs, through SRM Alumni Mr. Manojkumar, Scientific advisor to setup Intelligent System Design Lab. This Lab is set up by a team of faculty members who are contributing to the domain Green Computing.",
      imageUrl: "your-image-url.jpg" // Replace with your changeable image URL
    },
    {
      title: "Expert Talk on Green Computing by Professor of Practice Mr. Mohandoss",
      description: "The Department of Computing Technologies has partnered with M/S. SiGeTech, a technical expert in providing innovative technology solutions to empower the industry, academic institutions, and research labs, through SRM Alumni Mr. Manojkumar, Scientific advisor to setup Intelligent System Design Lab. This Lab is set up by a team of faculty members who are contributing to the domain Green Computing.",
      imageUrl: "your-image-url.jpg" // Replace with your changeable image URL
    },
    {
      title: "Webinar on Sustainable Developments By Dr. Vasan Prabhu Veeramani",
      description: "The Department of Computing Technologies has partnered with M/S. SiGeTech, a technical expert in providing innovative technology solutions to empower the industry, academic institutions, and research labs, through SRM Alumni Mr. Manojkumar, Scientific advisor to setup Intelligent System Design Lab. This Lab is set up by a team of faculty members who are contributing to the domain Green Computing.",
      imageUrl: "your-image-url.jpg" // Replace with your changeable image URL
    }
  ];

  return (
    <div className="">
      <div className="flex flex-col w-11/12 mx-auto space-y-4 pt-64">
        {cardData.map((card, index) => (
          <div key={index} className="flex w-full space-x-4 p-12">
            {/* Left Part */}
            <div className="flex flex-col justify-center flex-1 p-4 rounded-lg shadow">
              <div
                className="text-left text-[60px] font-bold leading-[70px] bg-gradient-to-br from-[#191919] to-[#7F7F7F] bg-clip-text text-transparent mb-2"
                style={{
                  fontFamily: 'SF Pro Display, Arial, Helvetica, sans-serif',
                  margin: 0,
                  lineHeight: 'normal',
                }}
              >
                {card.title}
              </div>

              <p className="mb-4 text-white text-xl opacity-80">
                {card.description} {/* Changeable description */}
              </p>
              <button className="mt-auto text-white text-3xl py-2 px-0 rounded hover:bg-blue-600 flex justify-start">
                Learn More
              </button>
            </div>

            {/* Right Part */}
            <div className="w-[353px] flex-shrink-0 h-[288px] border rounded-lg">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-auto rounded-lg shadow"
              />{/* Changeable */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Isdlab;
