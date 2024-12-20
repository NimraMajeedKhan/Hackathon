import CarCard from "@/components/CarCard";
interface Car{
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

function CarList(){

    const cars:Car[] =[
        {
            carName:'Koenigsegg',
            type:'Sport',
            price:99,
            fuel:90,
            transmission:'Manual',
            capacity:2,
            image:'/car (1).png',
            img:'/heart.png'
        },
        {
            carName:'Nisaan GT-R',
            type:'Sport',
            price:80,
            fuel:80,
            transmission:'Manual',
            capacity:2,
            image:'/car (3).png',
             img:'/heart (2).png',
             originalPrice:100
        },
        {
            carName:'Rolls Royce',
            type:'Sedan',
            price:96,
            fuel:70,
            transmission:'Manual',
            capacity:4,
            image:'/car (4).png',
             img:'/heart.png',
            
        },
        {
            carName:'Nissan GT-R',
            type:'Sport',
            price:80,
            fuel:80,
            transmission:'Manual',
            capacity:2,
            image:'/car (5).png',
             img:'/heart (2).png'
        }
    ]
    return(
        <div className="w-[1312] flex justify-between items-center gap-8 py-6">{cars.map((car,index)=>(
            <CarCard key={index}{...car} />
        ))}
        </div>
    )
}
export default CarList;

