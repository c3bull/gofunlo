import Image from "next/image";
import {LocationInterface} from "@/utils/typesAndInterfaces";

export default function LocationSection({location, country_name, transport_type, description}: {
    location: LocationInterface,
    country_name: string,
    transport_type: string | undefined,
    description: string | undefined
}) {

    const remap = {
        own: "Na własną rękę",
        no_eggs: "🥚 Bez jajek",
        vegan: "🌱 Wegańskie",
        no_fish: "🐟 Bez ryb",
        vegetarian: "☘️ Wegetariańskie",
        provided: "Zapewniony",
        bus: "Autobus",
        wlasny: "Własny"
    };

    return (
        <div className='w-full'>
            <h3 className="font-semibold">Lokalizacja:</h3>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex-1'>
                    <Image
                        src="/assets/icons/noimage.jpg"
                        alt="image"
                        width={500}
                        height={500}
                        className='rounded-lg w-full h-full object-cover aspect-video md:aspect-square md:min-w-[200px] md:min-h-[200px]'
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
                                           className="object-contain self-start w-[16px] h-auto pt-0.5"/>
                                    <p>{location.city && location.city}{location.city && location.province && ", "}{location.province && location.province}, {country_name && country_name}</p>
                                </div>
                                <div>
                                    <p>
                                       <span
                                           className='font-semibold'>Dojazd:</span> {transport_type && transport_type.trim() ? remap[transport_type as keyof typeof remap] :
                                        <span className="text-gray-600">-</span>}
                                    </p>
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
                            <p className="text-gray-600">Brak informacji – skontaktuj
                                się z
                                organizatorem.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}