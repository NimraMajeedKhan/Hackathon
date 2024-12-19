import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[340] bg-[#FFFFFF] h-[1600]'>
      <div className='relative top-8 left-8 leading-[3] mt-16 '>
        <p className=' text-[#90A3BF] font-semibold text-[12px]'>TYPE</p>
        <div className='flex gap-2 '>
          <img src="/tick-square.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>Sport <span className='text-[#90A3BF]'>(0)</span></p>
        </div>
        <div className='flex gap-2'>
          <img src="/tick-square.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>SUV <span className='text-[#90A3BF]'>(12)</span></p>
        </div>
        <div className='flex gap-2 '>
          <img src="/Ceklist.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>MPV <span className='text-[#90A3BF]'>(16)</span></p>
        </div>
        <div className='flex gap-2'>
          <img src="/Ceklist.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>Sedan <span className='text-[#90A3BF]'>(20)</span></p>
        </div>
        <div className='flex gap-2'>
          <img src="/Ceklist.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>Coupe <span className='text-[#90A3BF]'>(14)</span></p>
        </div>
        <div className='flex gap-2'>
          <img src="/Ceklist.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>Hatchback <span className='text-[#90A3BF]'>(14)</span></p>
        </div>
      </div>

      <div className='relative top-12 left-8 leading-[3] mt-4 '>
        <p className=' text-[#90A3BF] font-semibold text-[12px]'>CAPACITY</p>
        <div className='flex gap-2 '>
          <img src="/tick-square.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>2 Person <span className='text-[#90A3BF]'>(10)</span></p>
        </div>
        <div className='flex gap-2'>
          <img src="/Ceklist.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>4 Person<span className='text-[#90A3BF]'>(14)</span></p>
        </div>
        <div className='flex gap-2 '>
          <img src="/Ceklist.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>6 Person <span className='text-[#90A3BF]'>(12)</span></p>
        </div>
        <div className='flex gap-2'>
          <img src="/tick-square.png" className='h-[24] w-[24] mt-3' />
          <p className='font-semibold texr-[20px]'>8 or More <span className='text-[#90A3BF]'>(16)</span></p>
        </div>
      
       
      </div>
      <div className='relative top-12 left-8 leading-[3] mt-4 '>
      <p className=' text-[#90A3BF] font-semibold text-[12px]'>PRICE</p>
      <img src="/P R I C E  R A N G E.png" className='[296] h-[20]' />
      <p className='text-[20px] text-[#596780] font-semibold leading-9'>Max.$100.00</p>
      </div>
    
   
    </div>
    )
}

export default Sidebar