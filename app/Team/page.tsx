import React from 'react'

const Team = () => {

  const cardData = [
    { name: "POOVAMMAL" },
    { name: "Jon Snow" },
    { name: "Arya Stark" },
    { name: "Daenerys Targaryen" },
    { name: "Tyrion Lannister" },
    { name: "Cersei Lannister" },
    { name: "Bran Stark" },
    { name: "Sansa Stark" },
    { name: "Jorah Mormont" },
    { name: "Petyr Baelish" },
    { name: "Sandor Clegane" },
    { name: "The Hound" },
  ];

  
  return (
    <div className='flex flex-col mt-20'>
      {/*TOP TITLE*/}
        <div className="flex justify-around mt-24">
            <div className="text-white font-bold flex justify-center items-center">DOT</div>
            <div
                      className="text-left text-[160px] font-bold  bg-gradient-to-br from-[#191919] to-[#7F7F7F] bg-clip-text text-transparent mb-2"
                      style={{
                        fontFamily: 'SF Pro Display, Arial, Helvetica, sans-serif',
                        margin: 0,
                        lineHeight: 'normal',
                      }}
                    > Team </div>
            <div className="text-white flex justify-center items-center">dot</div>
        </div>


      {/*MIDDLE SINGLE CARD*/}
        <div className="border h-[239px] w-[351px] rounded-xl mx-auto mt-24">
              <div className="text-white">POOVAMMAL</div>
        </div>


        {/*BOTTOM CARDS LOOPED*/}
        <div className="flex justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mt-24 max-w-screen-lg">
    {cardData.map((card, index) => (
      <div
        key={index}
        className="border h-[239px] w-[351px] rounded-xl flex items-center justify-center"
      >
        <div className="text-white text-xl">{card.name}</div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default Team