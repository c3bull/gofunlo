import {BookingInterface} from "@/utils/typesAndInterfaces";
import Image from "next/image";
import Participant from "@/components/Participant";
import InfoSection from "@/components/InfoSection";
import LocationSection from "@/components/LocationSection";

export default function BookingDetails({
                                           id,
                                           payable_price,
                                           trip_data,
                                           total_price,
                                           participants,
                                           product_data,
                                           currency,
                                           destination_description, status_label
                                       }: BookingInterface) {

    return (
        <article
            key={id} className="w-full bg-slate-50 rounded-lg drop-shadow-md hover:drop-shadow-xl duration-300 flex overflow-hidden">
            <div className='w-full flex flex-col'>
                <div className='relative'>
                    {product_data.main_photo ? (
                        <div key={product_data.id} className="w-full aspect-video overflow-hidden">
                            <Image
                                className="w-full h-full object-cover min-w-[200px] min-h-[200px]"
                                src={product_data.main_photo.url}
                                alt={`Zdjęcie produktu: ${product_data.name}`}
                                width={product_data.main_photo.width}
                                height={product_data.main_photo.height}
                            />
                        </div>
                    ) : (
                        <div
                            className="w-full aspect-video overflow-hidden flex items-center justify-center bg-gray-200">
                            <Image
                                src="/assets/icons/holiday.jpg"
                                alt="Brak zdjęcia produktu"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover min-w-[200px] min-h-[200px]"
                            />
                        </div>
                    )}
                    <div className="absolute top-2 right-2">
                        <div
                            className={`border-2 py-1 px-4 rounded-full bg-opacity-90 font-semibold
                                ${status_label === "Zaliczka Opłacona" ? "bg-green-100 border-green-400" : "bg-orange-100 border-orange-400"}`}>
                            <p>{status_label}</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 h-full'>
                    <div className="p-4 h-full">
                        <div className="h-full flex flex-col gap-4">
                            <div className="flex flex-col gap-1 border-b pb-4">
                                <h1 className="text-3xl font-semibold text-blue-900">{product_data.name}</h1>
                                <p className="text-xl">{product_data.description}</p>
                            </div>

                            <div className="flex flex-col justify-between h-full">
                                <div className="flex gap-2">
                                    <Image src="/assets/icons/location-pin.png" alt="Lokalizacja" width={25} height={25}
                                           className="object-contain self-start w-[20px] h-auto"/>
                                    <div className="w-full flex gap-1 flex-wrap">
                                        <span>{product_data.location.city},</span>
                                        <span>{product_data.location.province},</span>
                                        <span>{product_data.country_name}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <Image src="/assets/icons/website.png" alt="Ikona strony internetowej" width={20}
                                           height={20}/>
                                    <a
                                        href={product_data.company.fc_website_url.startsWith("http") ? product_data.company.fc_website_url : `https://${product_data.company.fc_website_url}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {product_data.company.name}
                                    </a>
                                </div>

                                <div className="flex gap-2">
                                    <Image src="/assets/icons/age.png" alt="Ikona wieku" width={20} height={20}
                                           className="object-contain self-start pt-1.5 w-[20px] h-auto"/>
                                    <p>Przeznaczone dla osób w wieku {trip_data.min_age} - {trip_data.max_age} lat</p>
                                </div>

                                <div className="border-b pb-4">
                                    <div className="flex gap-2">
                                        <Image src="/assets/icons/booking.png" alt="Ikona rezerwacji" width={20}
                                               height={20} className="object-contain self-start pt-0.5"/>
                                        <div className="w-full flex gap-x-2 flex-wrap">
                                            <p>{trip_data.start_date}</p> - <p>{trip_data.end_date}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 py-4 border-b">
                                    <Image src="/assets/icons/price.png" alt="Ikona ceny" width={20} height={20}/>
                                    <p className={`text-xl font-semibold 
                                    ${payable_price && total_price - payable_price === 0 ? "text-green-600" : "text-red-600"}`}>
                                        Opłacone: {payable_price} / {total_price} {currency}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-y-4 py-4 border-b">
                                    <h2 className="font-semibold text-lg">Uczestnicy:</h2>
                                    {trip_data.bookings?.map((booking) => (
                                        <Participant participant={booking.parent} key={booking.parent.id}/>
                                    ))}
                                    {participants?.map((participant) => (
                                        <Participant participant={participant} key={participant.id}/>
                                    ))}
                                </div>

                                <div className='flex flex-col gap-4 py-4'>
                                    <InfoSection title="Plan wydarzenia:" content={product_data.schedule_description}/>
                                    <InfoSection title="Wyżywienie:" content={product_data.food_type}/>
                                    <InfoSection title="Ubezpieczenie:" content={product_data.insurance_description}/>
                                    <InfoSection title="Dodatkowe informacje:" content={product_data.additional_info_text}/>
                                    <LocationSection location={product_data.location} country_name={product_data.country_name} transport_type={product_data.transport_type} description={destination_description}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}