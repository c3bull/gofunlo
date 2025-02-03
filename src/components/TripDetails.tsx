import {ProductInterface} from "@/utils/typesAndInterfaces";
import Image from "next/image";

export default function TripDetails({
                                        id,
                                        currency,
                                        min_price,
                                        status,
                                        min_age,
                                        max_age,
                                        max_price,
                                        min_trip_start_date,
                                        country_name,
                                        location,
                                        company,
                                        name,
                                        description,
                                        food_description,
                                        food_diets,
                                        media,
                                        dedicated_trip_caregiver_user,
                                        max_trip_end_date,
                                        type,
                                        additional_info_text,
                                        transport_type,
                                        food_type,
                                        transport_vehicle,
                                        insurance_description,
                                        schedule_description,
                                        pickup_collection_address,
                                        pickup_collection_place,
                                        pickup_collection_date,
                                        pickup_collection_time,
                                        pickup_route_price,
                                        accommodation, insurance_type
                                    }: ProductInterface) {

    console.log('loc ', location)
    console.log('acc ', accommodation)

    const remap = {
        own: "Na własną rękę",
        no_eggs: "🥚 Bez jajek",
        vegan: "🌱 Wegańskie",
        no_fish: "🐟 Bez ryb",
        vegetarian: "☘️ Wegetariańskie",
        provided: "Zapewniony",
        bus: "Autobus",
    };

    // const myIcon = remap[icon];

    return (
        <article key={id}
            className="w-full bg-slate-50 rounded-lg drop-shadow-md hover:drop-shadow-xl duration-300 flex overflow-hidden">
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
                    <div className="absolute top-2 right-2">
                        <div
                            className={`border-2 py-1 px-4 rounded-full bg-opacity-90 
                                ${status === "ACTIVE" ? "bg-green-100 border-green-400" : ""}
                                ${status === "DRAFT" ? "bg-orange-100 border-orange-400" : ""}`}
                        >
                            <p>{status}</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 h-full'>
                    <div className="p-4 h-full">
                        <div className="h-full flex flex-col gap-4">
                            <div className="flex flex-col gap-1 border-b pb-4">
                                <p className='text-sm text-red-500'>{type}</p>
                                <h1 className="text-3xl font-semibold text-blue-900">{name}</h1>
                                <p className="text-xl">{description}</p>
                            </div>

                            <div className="flex flex-col justify-between h-full">
                                <div className="flex gap-2">
                                    <Image src="/assets/icons/location-pin.png" alt="Lokalizacja" width={25} height={25}
                                           className="object-contain self-start w-[20px] h-auto"/>
                                    <div className="w-full flex gap-1 flex-wrap">
                                        <span>{location.city},</span>
                                        <span>{location.province},</span>
                                        <span>{country_name}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Image src="/assets/icons/website.png" alt="Ikona strony internetowej" width={20}
                                           height={20}/>
                                    <a
                                        href={company.fc_website_url.startsWith("http") ? company.fc_website_url : `https://${company.fc_website_url}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {company.name}
                                    </a>
                                </div>

                                <div className="flex gap-2">
                                    <Image src="/assets/icons/age.png" alt="Ikona wieku" width={20} height={20}
                                           className="object-contain self-start pt-1.5 w-[20px] h-auto"/>
                                    <p>Przeznaczone dla osób w wieku {min_age} - {max_age} lat</p>
                                </div>

                                <div className="border-b pb-4">
                                    {min_trip_start_date && <div className="flex gap-2">
                                        <Image src="/assets/icons/booking.png" alt="Ikona rezerwacji" width={20}
                                               height={20} className="object-contain self-start pt-0.5"/>
                                        <div className="w-full flex gap-x-2 flex-wrap">
                                            <p>{min_trip_start_date}</p> - <p>{max_trip_end_date}</p>
                                        </div>
                                    </div>}
                                </div>
                                {min_price && <div className='flex items-center gap-2 pt-4'>
                                    <Image src="/assets/icons/price.png" alt="price icon" width={20} height={20}/>
                                    <p className='text-2xl font-semibold text-blue-900'>Od {min_price} {max_price && (Number(max_price) - Number(min_price) !== 0) && <span>do {max_price}</span>} {currency}</p>
                                </div>}
                                <div className='flex flex-col gap-4 py-4'>

                                    <div>
                                        <h3 className="font-semibold">Plan wydarzenia:</h3>
                                        {schedule_description ? (
                                            <p>{schedule_description}</p>
                                        ) : (
                                            <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                organizatorem.</p>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Opiekun:</h3>
                                        {dedicated_trip_caregiver_user ? (
                                            <p>{dedicated_trip_caregiver_user.first_name} {dedicated_trip_caregiver_user.last_name}</p>
                                        ) : (
                                            <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                organizatorem.</p>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Ubezpieczenie:</h3>
                                        {insurance_type ? (
                                            <p>{insurance_type}{insurance_description && insurance_description.trim() &&
                                                <span>, {insurance_description}</span>}</p>
                                        ) : (
                                            <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                organizatorem.</p>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Dodatkowe informacje:</h3>
                                        {additional_info_text ? (
                                            <p>{additional_info_text}</p>
                                        ) : (
                                            <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                organizatorem.</p>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Transport:</h3>
                                        {transport_type ? (
                                            <div>
                                                <p>{remap[transport_type as keyof typeof remap]}</p>
                                            </div>) : (
                                            <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                organizatorem.</p>
                                        )}
                                        {transport_vehicle && <p>{remap[transport_vehicle as keyof typeof remap]}</p>}
                                        {pickup_collection_address &&
                                            <p>{pickup_collection_place}, {pickup_collection_address}, {pickup_collection_date}, {(pickup_collection_time && pickup_collection_time / 100)?.toFixed(2).replace(".", ":")}</p>
                                        }
                                        {pickup_route_price && Number(pickup_route_price) > 0 &&
                                            <p>Cena transportu: {Number(pickup_route_price)} {currency}</p>}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Wyżywienie:</h3>
                                        {food_type ? (
                                            <p>{food_type}{food_description && <span>, {food_description}</span>}</p>
                                        ) : (
                                            <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                organizatorem.</p>
                                        )}
                                        {food_type === "tak" && food_diets && food_diets?.map(food => (
                                            <p>{remap[food as keyof typeof remap]}</p>
                                        ))}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Zakwaterowanie:</h3>
                                        {accommodation ? (
                                            <div>
                                                {accommodation.name && <p>{accommodation.name}</p>}
                                                {accommodation.description && <p>{accommodation.description}</p>}
                                                <p>{accommodation.city}, {accommodation.province}, {accommodation.country_name}</p>
                                                <p>{accommodation.street} {accommodation.house_number}/{accommodation.room_number}, {accommodation.postcode}</p>
                                            </div>
                                        ) : (
                                            <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                organizatorem.</p>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">Lokalizacja:</h3>
                                        <div className='flex flex-col md:flex-row gap-4'>
                                            <div className='flex-1'>
                                                <Image
                                                    src="/assets/icons/noimage.jpg"
                                                    alt="image"
                                                    width={500}
                                                    height={500}
                                                    className='rounded-lg w-full h-full object-cover aspect-square min-w-[200px] min-h-[200px]'
                                                />
                                            </div>
                                            <div className='flex-[3]'>
                                                <div>
                                                    {location ? (
                                                        <div className='py-2 flex flex-col gap-2'>
                                                            <div className="flex gap-2">
                                                                <Image src="/assets/icons/location-pin.png"
                                                                       alt="Lokalizacja"
                                                                       width={22} height={22}
                                                                       className="object-contain self-start w-[18px] h-auto"/>
                                                                <p>{location.city}, {location.province}, {country_name}</p>
                                                            </div>
                                                            <div>
                                                                <p>
                                                                    <span
                                                                        className='font-semibold'>Dojazd:</span> {transport_type ? remap[transport_type as keyof typeof remap] :
                                                                    <p className="text-gray-600">-</p>}
                                                                </p>
                                                                <p></p>
                                                            </div>
                                                            <div>
                                                            <span
                                                                className='font-semibold'>Opis:</span> {description ? description :
                                                                <p className="text-gray-600">-</p>}
                                                            </div>
                                                            <div>
                                                            <span
                                                                className='font-semibold'>Wskazówki dojazdu:</span> {location.driving_directions ? location.driving_directions :
                                                                <p className="text-gray-600">Brak informacji –
                                                                    skontaktuj się z
                                                                    organizatorem.</p>}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                            organizatorem.</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}