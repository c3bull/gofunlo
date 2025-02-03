import {ProductInterface} from "@/utils/typesAndInterfaces";
import Image from "next/image";
import Link from "next/link";

export default function Product({
                                    id,
                                    name,
                                    description,
                                    type,
                                    company_id,
                                    location,
                                    company,
                                    product_id,
                                    max_trip_end_date,
                                    max_price,
                                    max_trip_start_date,
                                    min_trip_start_date,
                                    min_trip_end_date,
                                    country_name,
                                    dedicated_trip_caregiver_user,
                                    food_description,
                                    food_diets,
                                    max_age,
                                    min_age,
                                    country_code,
                                    media,
                                    places,
                                    currency,
                                    min_price,
                                    status
                                }: ProductInterface) {


    // console.log(places)
    return (
        <Link href={id} legacyBehavior>
            <article
                className='cursor-pointer group w-full bg-slate-50 rounded-lg drop-shadow-md hover:drop-shadow-xl duration-300 flex overflow-clip'>
                <div className='w-full flex flex-col'>
                    <div className='relative'>
                        {media.length > 1 ? (
                            media.slice(0, 1).map(media => (
                                <div key={media.id} className='w-full aspect-video overflow-hidden'>
                                    <Image
                                        className='group-hover:rotate-1 group-hover:scale-105 duration-300 w-full h-full object-cover aspect-video min-w-[200px] min-h-[200px]'
                                        src={media.url} alt={media.url} width={media.width}
                                        height={media.height}/>
                                </div>
                            ))
                        ) : media.length === 1 ? (
                            media.map(media => (
                                <div key={media.id} className='w-full aspect-video overflow-hidden'>
                                    <Image
                                        className='group-hover:rotate-1 group-hover:scale-105 duration-300 w-full h-full object-cover aspect-video min-w-[200px] min-h-[200px]'
                                        src={media.url} alt={media.url} width={media.width}
                                        height={media.height}/>
                                </div>
                            ))
                        ) : (
                            <div className='w-full aspect-video overflow-hidden  flex items-center justify-center'>
                                <Image
                                    src="/assets/icons/holiday.jpg"
                                    alt="image"
                                    width={500}
                                    height={500}
                                    className='group-hover:rotate-1 group-hover:scale-105 duration-300 w-full h-full object-cover aspect-video min-w-[200px] min-h-[200px]'
                                />
                            </div>
                        )}
                        <div className='absolute top-2 right-2'>
                            <div
                                className={`${status === "ACTIVE" ? "bg-green-100 border-green-400" : ""} ${status === "DRAFT" ? "bg-orange-100 border-orange-400" : ""} border-2 bg-opacity-90 py-1 px-4 rounded-full`}>
                                <p>{status}</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 h-full'>
                        <div className='h-full  flex flex-col gap-4'>
                            <div className='flex flex-col gap-1 border-b pb-4'>
                                <p className='text-sm text-red-500'>{type}</p>
                                <p className="text-2xl font-semibold">{name}</p>
                                <p className="text-xl">{description}</p>
                            </div>
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <div className='flex gap-2'>
                                        <Image src="/assets/icons/location-pin.png" alt="location" width={25}
                                               height={25}
                                               className='object-contain self-start w-[20px] h-auto'/>
                                        <div className='w-full flex gap-1 flex-wrap'>
                                            <span>{location.city},</span> <span>{location.province},</span>
                                            <div className='w-fit flex gap-2'>
                                                {country_name}

                                                {company.country === "pl" ?
                                                    <Image src="/assets/icons/pl.png" alt="Polish flag"
                                                           className='w-[14px] object-contain self-start pt-[5px]'
                                                           width={20}
                                                           height={20}/> :
                                                    <Image src="/assets/icons/us.png" alt="American flag"
                                                           className='w-[14px] object-contain'
                                                           width={20}
                                                           height={20}/>}
                                            </div>
                                        </div>
                                        {/*<p>{location.driving_directions}</p>*/}
                                        {/*<p>{location.province}</p>*/}
                                    </div>
                                    <div>
                                        <div className='flex gap-2 items-center'>
                                            <Image src="/assets/icons/website.png" alt="website icon" width={20}
                                                   height={20}/>
                                            <a href={company.fc_website_url} target="_blank" rel="noopener noreferrer">
                                                {company.name}
                                            </a>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <Image src="/assets/icons/phone.png" alt="phone icon" width={20}
                                                   height={20}/>
                                            <p>{company.phone}</p>
                                        </div>
                                        {/*<p>{company.fee}</p>*/}
                                    </div>
                                    <div className='flex flex-col'>
                                        <div>
                                            <div className='flex gap-2'>
                                                <Image src="/assets/icons/booking.png" alt="booking icon" width={20}
                                                       height={20} className='object-contain self-start pt-0.5'/>
                                                <div className='w-full flex gap-x-2 flex-wrap'>
                                                    <p>{min_trip_start_date}</p> - <p>{max_trip_end_date}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <p>👤</p>
                                            <p>{dedicated_trip_caregiver_user.first_name} <span
                                                className='font-semibold'>{dedicated_trip_caregiver_user.last_name}</span>
                                            </p>
                                            {/*<p>{dedicated_trip_caregiver_user.first_name}</p>*/}
                                            {/*<p>{dedicated_trip_caregiver_user.last_name}</p>*/}
                                        </div>
                                        <div className='flex gap-2'>
                                            <Image src="/assets/icons/age.png" alt="age icon" width={0} height={0}
                                                   className='object-contain self-start pt-1.5 w-[20px] h-auto'/>
                                            <p>przeznaczone dla osób w wieku {min_age} - {max_age}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex items-center gap-2 pt-4'>
                                    <Image src="/assets/icons/price.png" alt="price icon" width={20} height={20}/>
                                    <p className='text-2xl font-semibold text-blue-900'>Od {min_price ? min_price : "❓"} {currency}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}