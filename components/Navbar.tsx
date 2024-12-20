// import React from 'react'
// import { Input } from './ui/input'

// function Navbar() {
//   return (
//     <nav className='w-full bg-[#FFFFFF]'>
//         <div className='max-w-7xl flex justify-between items-center py-2'>
    
//             <h1 className='font-bold text-[32px] text-[#3563E9] absolute top-10 left-12'>MORENT</h1>

//         <div>
//             <Input placeholder='Search Something here' className='w-[492] h-[44] rounded-[70px] placeholder:pl-14 placeholder:text-[#596780] mr-40 absolute top-10 left-64 ' />
//             <img src="/search-normal.png" alt="seach" width={24} height={24} className='absolute top-[50] left-[280]'/>
//             <img src="/filter.png" alt="filter" width={24} height={24} className='absolute top-[50] left-[710]'/>    
//         </div>
//         <div className='flex justify-center items-center gap-5 absolute top-[40] left-[1172]'>
//             <img src="/Like.png" alt="like" className='h-[44] w-[44]'/>
//             <img src="/Notification.png" alt="notification" className='h-[44] w-[44]'/>
//             <img src="/Settings.png" alt="setting" className='h-[44] w-[44]'/>
//             <img src="/Profil.png" alt="profile" className='h-[44] w-[44]'/>
//         </div>
//         </div>
//         <div className='border mb-24 text-[#13131329] relative top-[98] w-[100%] ' ></div>
//     </nav>
//   )
// }


// export default Navbar

'use client'
import React, { useState } from 'react';
import { Input } from './ui/input';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFFFFF] shadow-md">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <h1 className="font-bold text-[28px] md:text-[32px] text-[#3563E9]">
          MORENT
        </h1>

        {/* Search Bar for Larger Screens */}
        <div className="hidden lg:flex items-center flex-1 mx-10">
          <div className="relative w-full max-w-[492px]">
            <Input
              placeholder="Search Something here"
              className="w-full h-[44px] rounded-[70px] placeholder:pl-14 placeholder:text-[#596780] pl-6"
            />
            <img
              src="/search-normal.png"
              alt="search"
              className="absolute top-1/2 left-4 transform -translate-y-1/2"
              width={24}
              height={24}
            />
          </div>
          <img
            src="/filter.png"
            alt="filter"
            className=" absolute top-[35] left-[770]"
            width={24}
            height={24}
          />
        </div>

        {/* Icons for Larger Screens */}
        <div className="hidden lg:flex items-center gap-5">
          <img src="/Like.png" alt="like" className="h-[44px] w-[44px]" />
          <img
            src="/Notification.png"
            alt="notification"
            className="h-[44px] w-[44px]"
          />
          <img src="/Settings.png" alt="setting" className="h-[44px] w-[44px]" />
          <img src="/Profil.png" alt="profile" className="h-[44px] w-[44px]" />
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col items-center space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <>
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="block h-0.5 w-6 bg-black"></span>
            </>
          ) : (
            <span className="block w-6 h-6 bg-black rounded-full items-center justify-center text-white">
              X
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] px-6 py-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Input
              placeholder="Search Something here"
              className="w-full h-[44px] rounded-[70px] placeholder:pl-14 placeholder:text-[#596780] pl-6"
            />
            <img
              src="/search-normal.png"
              alt="search"
              className="absolute top-1/2 left-4 transform -translate-y-1/2"
              width={24}
              height={24}
            />
               <img
            src="/filter.png"
            alt="filter"
            className="absolute top-1/2 left-[300] transform -translate-y-1/2"
            width={24}
            height={24}
          />
          </div>

          {/* Icons */}
          <div className="flex items-center justify-between gap-4">
            <img src="/Like.png" alt="like" className="h-[44px] w-[44px]" />
            <img
              src="/Notification.png"
              alt="notification"
              className="h-[44px] w-[44px]"
            />
            <img
              src="/Settings.png"
              alt="setting"
              className="h-[44px] w-[44px]"
            />
            <img src="/Profil.png" alt="profile" className="h-[44px] w-[44px]" />
          </div>
        </div>
      )}

      {/* Bottom Border */}
      <div className="border-b mx-auto text-[#13131329]" style={{ maxWidth: '90%' }} />
    </nav>
  );
}

export default Navbar;