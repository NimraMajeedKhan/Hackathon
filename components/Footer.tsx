import React from 'react'
 
function Footer() {
  return (
    <div className='w-[1440] h-[480] bg-[#FFFFFF] '>
        <div className='flex justify-between '>
         <div className='relative top-[80] left-[60]'>
            <h1 className='font-bold  text-[#3563E9] text-[32px] mb-5 mt-4 '>MORENT</h1>
            <p className='font-medium text-[16px] text-[#13131399]'>Our vision is to provide convenience <br />
              and help increase your sales business</p>  
            
         </div>
         <div className='flex relative top-[100] right-[130] leading-10 '>
          <div className='ml-7'>
          <h1 className='font-semibold text-[20px]'>About</h1>
          <ul className='text-[16px] font-medium text-[#13131399]'>
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Bussiness Relation</li>
          </ul>
          </div>
          <div className='ml-20'>
          <h1 className='font-semibold text-[20px]'>Community</h1>
          <ul className='text-[16px] font-medium text-[#13131399]'>
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
          </div>
          <div className='ml-20'>
          <h1 className='font-semibold text-[20px]'>Socials</h1>
          <ul className='text-[16px] font-medium text-[#13131399]'>
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
          </div>
         </div>
       
        </div>
        <div className='border mb-24 text-[#13131329] relative top-[150] left-[40] w-[95%] ' ></div>
        <div className='flex'>
        <div className='relative top-[90] left-[44] text-[16px] text-[#1A202C] font-medium'>©2022 MORENT. All rights reserved</div>
        <div className='flex gap-10 relative top-[90] left-[850]'>
          <p className='font-semibold text-[16px]'>Privacy & Policy</p>
          <p className='font-semibold text-[16px]'>Term & Condition</p>
        </div>
        </div>
    </div>
     
  )
}

export default Footer