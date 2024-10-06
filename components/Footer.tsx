import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className="flex w-[94%] mx-auto justify-center mt-[100px]">
         <hr className='w-full h-[1px] bg-[#9C9C9C] '/>
        </div>

        <div className='w-[90%%] mx-auto'>
            <div className="text-[50px] md:text-[60px] xl:text-[70px] text-[#9c9c9c] text-left pt-10  px-12 shadow-[rgba(0,0,0,0.7)_-8px_4px_8px] font-bold">
              Contact
            </div>

            <div className='px-12 pt-8'>
                <pre>
                    <div className='w-[228px] relative text-[23px] md:text-[25px] xl:text-[30px]  text-[#9c9c9c] text-left shadow-[rgba(0,0,0,0.7)_-8px_4px_8px]'><span className='font-bold text-[35px] md:text-[42px] xl:text-[50px]'>Address</span>   TP 1307 &#183; SRM-IST &#183; Kattankulathur</div>
                    <div className='w-[228px] relative text-[30px]  text-[#9c9c9c] text-left shadow-[rgba(0,0,0,0.7)_-8px_4px_8px]'><span className='font-bold text-[35px] md:text-[42px] xl:text-[50px]'>Phone</span>     +91 94444 60822</div>
                    <div className='w-[228px] relative text-[30px]  text-[#9c9c9c] text-left shadow-[rgba(0,0,0,0.7)_-8px_4px_8px]'><span className='font-bold text-[35px] md:text-[42px] xl:text-[50px]'>Email</span>     poovamme@srmist.edu.in</div>
                </pre>
            </div>
            
            <div className="flex justify-center pt-24 w-[718px] mb-8 mx-auto text-[25px] font-sf-pro text-[#9c9c9c] shadow-[rgba(0,0,0,0.7)_-8px_4px_8px]">
            Copyright © 2023 Green-Computing. All rights reserved..
            </div>
        </div>
    </div>
  )
}

export default Footer