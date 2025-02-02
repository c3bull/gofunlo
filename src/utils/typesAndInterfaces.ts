import {ReactNode} from "react";

export interface ProductInterface {
    id: string,
    name: string,
    description: string,
    type: string,
    company_id: string,
    location: LocationInterface,
    food_description: string | null,
    media: MediaInterface[],
    country_code: string,
    country_name: string,
    min_age: number,
    max_age: number,
    places: PlaceInterface[],
    food_diets: string[] | null,
    currency: string,
    company: CompanyInterface,
    dedicated_trip_caregiver_user: DedicatedTripCaregiveUserInterface,
    product_id: string,
    status: string,
    max_price: number | null,
    min_price: number | null,
    min_trip_start_date: string | null,
    min_trip_end_date: string | null,
    max_trip_start_date: string | null,
    max_trip_end_date: string | null,
}

export interface LocationInterface {
    city: string,
    province: string,
    driving_directions: string | null
}

export interface CompanyInterface {
    name: string,
    id: string,
    logo_image_url?: null,
    fc_website_url: string,
    phone: string,
    country: string,
    fee: number,
}

export interface MediaInterface {
    id: string,
    url: string,
    width: number,
    height: number,
    provider: string,
}

export interface DedicatedTripCaregiveUserInterface {
    name: string,
    id: string,
    first_name: string,
    last_name: string
}

export interface PlaceInterface {
    id: string,
    city: string,
    name: string,
    type: string,
    status: string,
    country: string,
    company_id: string,
    created_at: string,
    description: string,
    website_url: string,
    country_name: string,
}

export interface BookingInterface {
    id: string,
    status: string,
    participants: ParticipantsInterface[],
    total_price: number,
    payable_price: number | null,
    trip_data: TripDataInterface,
    product_data: ProductDataInterface,
}

export interface ParticipantsInterface {
    id: string,
    city: string,
    pesel: string,
    street: string,
    postcode: string,
    province: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    house_number: string,
}

export interface TripDataInterface {
    id: string,
    name: string,
    status: string,
    min_age: number,
    max_age: number,
    bookings: BookingsInterface[],
    end_date: string,
}

export interface BookingsInterface {
    id: string,
    city: string,
    type: string,
    email: string
    phone: string,
    street: string,
    house_number: string,
    postcode: string,
    province: string,
    first_name: string,
    last_name: string,
    participants: ParticipantsInterface[],
}

export interface ProductDataInterface {
    id: string,
    name: string,
    type: string,
    main_photo: PhotoInterface,
    description: string,
    country_name: string,
}

export interface PhotoInterface {
    id: string,
    url: string,
    width: number,
    height: number,
}