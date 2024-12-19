import React from 'react'
import CarList from '@/components/CarList'
import PopularCar from '@/components/CarList2'
const Hero = () => {
  return (
    <div className='w-full bg-[#F6F7F9] h-[2120]'>
        <div className='max-w-7xl'>
            <div className='flex '>
                <div className='relative top-[32] left-[64] '><img src="/Ads 1.png" /></div>
                <div className='relative top-[32] left-[100]'> <img src="/Ads 2.png" /></div>
            </div>
            <div className='flex items-center '>
                <div className=' w-[582] bg-[#FFFFFF] h-[132] rounded-lg relative top-[70] left-[64] '>
                    <div className='flex items-center p-4 ml-6 '>
                    <img src="/mark.png" alt="mark" className='h-[16] w-[16] '/>
                    <p className='font-semibold ml-2'>Pick-Up</p>
                    </div>
                    <div className='w-[486] h-[48] flex justify-between items-center ml-12'>
                        <div className=' border-r-2 my-4 h-[48] w-[146] leading-6'>
                         <h1 className='font-bold text-[16px]'>Location</h1>
                        <p className='flex items-center gap-4 text-[12px] text-[#90A3BF] font-medium'>Select your City <img src="/arrow-down.png" alt="arrow" className='h-[14] w-[14]' />
                        </p>
                        </div>
                        <div className=' border-r-2 my-4 h-[48] w-[146] leading-6 ml-5'>
                         <h1 className='font-bold text-[16px] '>Date</h1>
                        <p className='flex items-center gap-4 text-[12px] text-[#90A3BF] font-medium'>Select your date <img src="/arrow-down.png" alt="arrow" className='h-[14] w-[14]' />
                        </p>
                        </div>
                        <div className='  my-4 h-[48] w-[146] leading-6 ml-5'>
                         <h1 className='font-bold text-[16px] '>Time</h1>
                        <p className='flex items-center gap-4 text-[12px] text-[#90A3BF] font-medium'>Select your time <img src="/arrow-down.png" alt="arrow" className='h-[14] w-[14]' />
                        </p>
                        </div> 
                       
                    </div>
                </div>
                <div className=' h-28 w-28 relative right-4 left-[80] top-20'>
                            <img src="/switch.png" alt="switch" className='w-[130] h-[100] '/>
                        </div>
                       
                        
                        <div className=' w-[582] bg-[#FFFFFF] h-[132] rounded-lg relative top-[70] left-[97]'>
                    <div className='flex items-center p-4 ml-6 '>
                    <img src="/mark (1).png" alt="mark" className='h-[16] w-[16] '/>
                    <p className='font-semibold ml-2'>Drop-Off</p>
                    </div>
                    <div className='w-[486] h-[48] flex justify-evenly items-center ml-12'>
                        <div className=' border-r-2 my-4 h-[48] w-[146] leading-6'>
                         <h1 className='font-bold text-[16px]'>Location</h1>
                        <p className='flex items-center gap-4 text-[12px] text-[#90A3BF] font-medium'>Select your City <img src="/arrow-down.png" alt="arrow" className='h-[14] w-[14]' />
                        </p>
                        </div>
                        <div className=' border-r-2 my-4 h-[48] w-[146] leading-6 ml-5'>
                         <h1 className='font-bold text-[16px] '>Date</h1>
                        <p className='flex items-center gap-4 text-[12px] text-[#90A3BF] font-medium'>Select your date <img src="/arrow-down.png" alt="arrow" className='h-[14] w-[14]' />
                        </p>
                        </div>
                        <div className='  my-4 h-[48] w-[146] leading-6 ml-5'>
                         <h1 className='font-bold text-[16px]  '>Time</h1>
                        <p className='flex items-center gap-4 text-[12px] text-[#90A3BF] font-medium'>Select your time <img src="/arrow-down.png" alt="arrow" className='h-[14] w-[14]' />
                        </p>
                        </div> 
                       
                    </div>
                   
                </div>
                
            </div>
            <div className=' relative top-[44] left-[40] mt-10 ml-6 '>
         <div className='flex items-center gap-[1092]'>
        <h1 className='font-semibold text-[#90A3BF] text-[16px] ml-5 mt-5'>Popular Car</h1>
        <h2 className='text-[16px] font-semibold text-[#3563E9]'>View All</h2>
        </div>
        <CarList />
        </div>
        <div className=' relative top-[44] left-[40] mt-10 ml-6 '>
         <div className='flex items-center gap-[1092]'>
        <h1 className='font-semibold text-[#90A3BF] text-[16px] ml-5 mt-5'>Recomendation Car</h1>
    
        </div>
        <PopularCar />
        </div>

        <div className='flex items-center mt-[70] justify-center'>
            <img src="/show More.png" className='h-[44] w-[156] relative left-[90]' />
            <p className='text-[14px] text-[#90A3BF] font-semibold relative left-[630]'>120 Car</p>
        </div>
    
        
           
        </div>
       

        
    </div>
  )
}

export default Hero