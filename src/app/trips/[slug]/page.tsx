"use client"

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import Bookings from "../../data/response_bookings.json"
import BookingDetails from "@/components/BookingDetails";
import products from "@/app/data/response_products.json";
import Product from "@/components/Product";
import _ from "lodash";
import {BookingInterface, PlaceInterface} from "@/utils/typesAndInterfaces";

export default function Trip() {
    const [booking, setBooking] = useState<BookingInterface | undefined>(undefined);
    const pathname = usePathname()


    useEffect(() => {
        const myBooking = pathname?.split("/").pop();
        const matchedBooking = Bookings.data.find(item => item.id === myBooking);

        if (matchedBooking) {
            setBooking(matchedBooking);
        }

        console.log('Matched Product:', matchedBooking);
        console.log('products:', booking);

    }, [pathname]);
    console.log(booking)
    return (
        <>
            <div className="min-w-[260px]">
                <div className="py-8 md:py-10 lg:py-16 w-full flex justify-center">
                    <div
                        className="custom-paddings custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-items-center pb-4 md:pb-10 gap-10 md:gap-6 lg:gap-10">
                        {booking && <BookingDetails id={booking.id} status={booking.status}
                                                    participants={booking.participants?.map(({
                                                                                                 id,
                                                                                                 city,
                                                                                                 pesel,
                                                                                                 street,
                                                                                                 postcode,
                                                                                                 province,
                                                                                                 first_name,
                                                                                                 last_name,
                                                                                                 birth_date,
                                                                                                 house_number
                                                                                             }) => ({
                                                        id,
                                                        city,
                                                        pesel,
                                                        street,
                                                        postcode,
                                                        province,
                                                        first_name,
                                                        last_name,
                                                        birth_date,
                                                        house_number,
                                                    })) || []}
                                                    payable_price={booking.payable_price}
                                                    key={booking.id}
                                                    total_price={booking.total_price}
                                                    trip_data={{
                                                        id: booking.trip_data.id,
                                                        name: booking.trip_data.name,
                                                        status: booking.trip_data.status,
                                                        min_age: booking.trip_data.min_age,
                                                        max_age: booking.trip_data.max_age,
                                                        bookings: booking.trip_data.bookings || [],
                                                        end_date: booking.trip_data.end_date || "",
                                                    }}
                                                    product_data={{
                                                        id: booking.product_data.id,
                                                        name: booking.product_data.name,
                                                        type: booking.product_data.type,
                                                        main_photo: booking.product_data.main_photo,
                                                        description: booking.product_data.description,
                                                        country_name: booking.product_data.country_name
                                                    }}
                        />}
                    </div>
                </div>
            </div>
        </>
    )
}