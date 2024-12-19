import React from 'react'
import { Input } from './ui/input'

function Navbar() {
  return (
    <nav className='w-full bg-[#FFFFFF]'>
        <div className='max-w-7xl flex justify-between items-center py-2'>
    
            <h1 className='font-bold text-[32px] text-[#3563E9] absolute top-10 left-12'>MORENT</h1>

        <div>
            <Input placeholder='Search Something here' className='w-[492] h-[44] rounded-[70px] placeholder:pl-14 placeholder:text-[#596780] mr-40 absolute top-10 left-64 ' />
            <img src="/search-normal.png" alt="seach" width={24} height={24} className='absolute top-[50] left-[280]'/>
            <img src="/filter.png" alt="filter" width={24} height={24} className='absolute top-[50] left-[710]'/>    
        </div>
        <div className='flex justify-center items-center gap-5 absolute top-[40] left-[1172]'>
            <img src="/Like.png" alt="like" className='h-[44] w-[44]'/>
            <img src="/Notification.png" alt="notification" className='h-[44] w-[44]'/>
            <img src="/Settings.png" alt="setting" className='h-[44] w-[44]'/>
            <img src="/Profil.png" alt="profile" className='h-[44] w-[44]'/>
        </div>
        </div>
        <div className='border mb-24 text-[#13131329] relative top-[98] w-[100%] ' ></div>
    </nav>
  )
}

export default Navbar