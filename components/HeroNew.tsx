import React from 'react'

import PopularCar from '@/components/CarList2'
const HeroNew = () => {
  return (
    <div className='w-[1080] bg-[#F6F7F9] h-[2120]'>
        <div className='max-w-7xl'>
           
            <div className='flex items-center '>
                <div className=' w-[486] bg-[#FFFFFF] h-[132] rounded-lg relative top-[70] left-[64] '>
                    <div className='flex items-center p-4 ml-6'>
                    <img src="/mark.png" alt="mark" className='h-[16] w-[16]'/>
                    <p className='font-semibold ml-2'>Pick-Up</p>
                    </div>
                    <div className='w-[438] h-[48] flex justify-between items-center ml-12'>
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
                <div className=' h-28 w-28 relative right-1 left-[20] top-20'>
                            <img src="/switch.png" alt="switch" className='w-[130] h-[100] '/>
                        </div>
                       
                        
                        <div className=' w-[486] bg-[#FFFFFF] h-[132] rounded-lg relative top-[70] left-[8]'>
                    <div className='flex items-center p-4 ml-6 '>
                    <img src="/mark (1).png" alt="mark" className='h-[16] w-[16] '/>
                    <p className='font-semibold ml-2'>Drop-Off</p>
                    </div>
                    <div className='w-[438] h-[48] flex justify-evenly items-center ml-12'>
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
         
        <div className=' relative top-[44] left-[40] mt-10 ml-6 flex flex-col-3 '>
         
        <PopularCar />
    
        </div>

    
        
           
        </div>
       

        
    </div>
  )
}

export default HeroNew;