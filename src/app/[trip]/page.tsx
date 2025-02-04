"use client"

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import Trips from "../data/response_products.json"
import {ProductInterface} from "@/utils/typesAndInterfaces";
import TripDetails from "@/components/TripDetails";

export default function Trip() {
    const [trip, setTrip] = useState<ProductInterface | undefined>();
    const pathname = usePathname()

    useEffect(() => {
        const myTrip = pathname?.split("/").pop();
        const matchedTrip = Trips.data.find(item => item.id === myTrip);

        if (matchedTrip) {
            // @ts-ignore
            setTrip(matchedTrip);
        }
    }, [pathname]);

    return (
        <div className="min-w-[260px]">
            <div className="w-full flex justify-center">
                <div className='w-full flex flex-col sm:max-w-[500px] md:max-w-full lg:max-w-[960px] '>
                    <div
                        className='px-4 sm:px-0 md:px-4 lg:px-0 grid grid-cols-1 gap-4 sm:gap-10 md:gap-4 lg:gap-10'>
                        {trip && <TripDetails additional_info_text={trip.additional_info_text} id={trip.id}
                                              status={trip.status} min_price={trip.min_price}
                                              key={trip.id} media={trip.media} places={trip.places}
                                              currency={trip.currency}
                                              company={trip.company}
                                              dedicated_trip_caregiver_user={trip.dedicated_trip_caregiver_user}
                                              product_id={trip.id} max_trip_end_date={trip.max_trip_end_date}
                                              max_trip_start_date={trip.max_trip_start_date}
                                              min_trip_end_date={trip.min_trip_end_date}
                                              min_trip_start_date={trip.min_trip_start_date}
                                              company_id={trip.company_id} location={trip.location}
                                              max_price={trip.max_price}
                                              food_diets={trip.food_diets} max_age={trip.max_age}
                                              min_age={trip.min_age} country_name={trip.country_name}
                                              country_code={trip.country_code}
                                              food_description={trip.food_description}
                                              description={trip.description}
                                              type={trip.type} name={trip.name} transport_type={trip.transport_type}
                                              insurance_description={trip.insurance_description}
                                              food_type={trip.food_type}
                                              pickup_collection_address={trip.pickup_collection_address}
                                              pickup_collection_date={trip.pickup_collection_date}
                                              pickup_collection_place={trip.pickup_collection_place}
                                              pickup_collection_time={trip.pickup_collection_time}
                                              pickup_route_price={trip.pickup_route_price}
                                              schedule_description={trip.schedule_description}
                                              transport_vehicle={trip.transport_vehicle}
                                              accommodation={trip.accommodation} insurance_type={trip.insurance_type}
                        />}
                    </div>
                </div>
            </div>
        </div>
    )
}