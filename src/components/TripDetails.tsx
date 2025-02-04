import {ProductInterface} from "@/utils/typesAndInterfaces";
import Image from "next/image";
import Reservation from "@/components/Reservation";
import InfoSection from "@/components/InfoSection";
import LocationSection from "@/components/LocationSection";

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

    return (
        <div className='flex flex-col md:flex-row-reverse gap-4 lg:gap-10'>
            <div className="h-fit md:sticky top-4 m-auto md:m-0">
                <Reservation/>
            </div>
            <article key={id}
                     className="w-full bg-slate-50 rounded-lg drop-shadow-md hover:drop-shadow-xl duration-300 flex overflow-hidden">
                <div className='w-full flex flex-col'>
                    <div className='relative'>
                        {media && media.length > 1 ? (
                            media.slice(0, 1).map(media => (
                                <div key={media.id} className='w-full aspect-video overflow-hidden'>
                                    <Image
                                        className='group-hover:rotate-1 group-hover:scale-105 duration-300 w-full h-full object-cover aspect-video min-w-[200px] min-h-[200px]'
                                        src={media.url} alt={media.url} width={media.width}
                                        height={media.height}/>
                                </div>
                            ))
                        ) : media && media.length === 1 ? (
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
                                        <Image src="/assets/icons/location-pin.png" alt="Lokalizacja" width={25}
                                               height={25}
                                               className="object-contain self-start w-[20px] h-auto"/>
                                        <div className="w-full flex gap-1 flex-wrap">
                                            <span>{location.city},</span>
                                            <span>{location.province},</span>
                                            <span>{country_name}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <Image src="/assets/icons/website.png" alt="Ikona strony internetowej"
                                               width={20}
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
                                        <p className='text-2xl font-semibold text-blue-900'>Od {min_price} {max_price && (Number(max_price) - Number(min_price) !== 0) &&
                                            <span>do {max_price}</span>} {currency}</p>
                                    </div>}

                                    <div className='flex flex-col gap-4 py-4'>
                                        <InfoSection title="Plan wydarzenia:" content={schedule_description}/>
                                        <InfoSection title="Opiekun:" content={dedicated_trip_caregiver_user?.name}/>
                                        <InfoSection title="Ubezpieczenie:"
                                                     flag="ubezpieczenie"
                                                     content={insurance_type}
                                                     additionalContent={insurance_description}
                                        />
                                        <InfoSection title="Dodatkowe informacje:" content={additional_info_text}/>

                                        <div>
                                            <h3 className="font-semibold">Transport:</h3>
                                            {transport_type ? (
                                                <div>
                                                    <p>{remap[transport_type as keyof typeof remap]}</p>
                                                </div>) : (
                                                <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                    organizatorem.</p>
                                            )}
                                            {transport_vehicle &&
                                                <p>{remap[transport_vehicle as keyof typeof remap]}</p>}
                                            {pickup_collection_address &&
                                                <p>{pickup_collection_place}, {pickup_collection_address}, {pickup_collection_date}, {(pickup_collection_time && pickup_collection_time / 100)?.toFixed(2).replace(".", ":")}</p>
                                            }
                                            {pickup_route_price && Number(pickup_route_price) > 0 &&
                                                <p>Cena transportu: {Number(pickup_route_price)} {currency}</p>}
                                        </div>

                                        <InfoSection
                                            title="Wyżywienie:"
                                            flag="wyzywienie"
                                            content={food_type}
                                            additionalContent={food_description}
                                            foodDiets={food_diets}
                                        />

                                        <div>
                                            <h3 className="font-semibold">Zakwaterowanie:</h3>
                                            {accommodation ? (
                                                <div>
                                                    {accommodation.name && <p>{accommodation.name}</p>}
                                                    {accommodation.description && <p>{accommodation.description}</p>}
                                                    <p>{accommodation.city}, {accommodation.province}, {accommodation.country_name}</p>
                                                    <p>{accommodation.street && accommodation.street} {accommodation.house_number && accommodation.house_number}{accommodation.room_number && "/" + accommodation.room_number}{accommodation.room_number && accommodation.postcode && ", "}{accommodation.postcode && accommodation.postcode}</p>
                                                </div>
                                            ) : (
                                                <p className="text-gray-600">Brak informacji – skontaktuj się z
                                                    organizatorem.</p>
                                            )}
                                        </div>

                                        <LocationSection location={location} country_name={country_name} transport_type={transport_type} description={description}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}