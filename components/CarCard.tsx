interface carCardProps{
    carName:string;
    type:string;
    price:number;
    originalPrice?:number;
    fuel:number;
    transmission:string;
    capacity:number;
    image:string;
    img:string;
}

function CarCard(props:carCardProps){
    return(
        <div className="border p-4 rounded-lg w-[304] h-[388] bg-[#FFFFFF] ">
            
            <h2 className="text-lg font-semibold mt-2 flex items-center gap-36">{props.carName} <img src={props.img} alt="heart" className="h-[24] w-[24]" /></h2>
            <p className="font-bold text-[14px] text-[#90A3BF] ">{props.type}</p>
            <img src={props.image} alt={props.carName} className="w-[240] h-[78] object-cover rounded-md relative top-[58]"/>
            <div className='flex items-center justify-between mt-32'>
               <div className='flex items-center gap-1'>
               <img src="/gas-station.png" className='h-[24] w-[24]'/> 
               <p className='font-medium text-[#90A3BF] text-[14px]'>{props.fuel}L</p>
              </div>
              <div className='flex items-center gap-1'>
                  <img src="/Car (2).png" className='h-[24] w-[24]'/> 
                  <p className='font-medium text-[#90A3BF] text-[14px]'>{props.transmission}</p>
              </div>
              <div className='flex items-center gap-1'>
               <img src="/profile-2user.png" className='h-[24] w-[24]'/> 
                 <p className='font-medium text-[#90A3BF] text-[14px]'>{props.capacity}</p>
                     </div>
            </div>
             <div className="flex items-center justify-between mt-[28]">
            <div>
                <p className="text-xl font-bold text-[#1A202C]">${props.price}.00/<span className="font-bold text-[14px] text-[#90A3BF]">day</span></p>
                {props.originalPrice && (
                    <span className="text-sm line-through text-gray-400 ml-2">${props.originalPrice}.00</span>
                )}
            </div>
            <img src="/Button Rental.png" className='w-[116] h-[44]' />
            </div>

        </div>
    );
};
export default CarCard;