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

function PopularCar(){

    const cars:Car[] =[
        {
            carName:'AllNewRush',
            type:'SUV',
            price:99,
            fuel:70,
            transmission:'Manual',
            capacity:2,
            image:'/car (9).png',
            img:'/heart.png',
            originalPrice:80
        },
        {
            carName:'CR-V',
            type:'SUV',
            price:80,
            fuel:80,
            transmission:'Manual',
            capacity:2,
            image:'/car (7).png',
             img:'/heart (2).png'
        },
        {
            carName:'AllNnewTerios',
            type:'SUV',
            price:74,
            fuel:90,
            transmission:'Manual',
            capacity:4,
            image:'/car (10).png',
             img:'/heart.png'
        },
        {
            carName:'CR-V',
            type:'SUV',
            price:80,
            fuel:80,
            transmission:'Manual',
            capacity:2,
            image:'/car (11).png',
             img:'/heart (2).png'
        },
        {
            carName:'MGZXExclusive',
            type:'Hatchback',
            price:76,
            fuel:70,
            transmission:'Manual',
            capacity:2,
            image:'/car (12).png',
            img:'/heart.png',
            originalPrice:80
        },
        {
            carName:'NewMGZS',
            type:'SUV',
            price:80,
            fuel:80,
            transmission:'Manual',
            capacity:2,
            image:'/car (13).png',
             img:'/heart (2).png'
        },
        {
            carName:'MGZXExcite',
            type:'Hatchback',
            price:74,
            fuel:90,
            transmission:'Manual',
            capacity:4,
            image:'/car (14).png',
             img:'/heart.png'
        },
        {
            carName:'NewMGZX',
            type:'SUV',
            price:80,
            fuel:80,
            transmission:'Manual',
            capacity:2,
            image:'/car (15).png',
             img:'/heart (2).png'
        }
    ]
    return(
        <div className="w-[1312] flex flex-wrap items-center gap-8 py-6">{cars.map((car,index)=>(
            <CarCard key={index}{...car} />
        ))}
        </div>
    )
}
export default PopularCar;