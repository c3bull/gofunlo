import Image from "next/image";
import products from "./data/response_products.json"
import Product from "@/components/Product";
import _ from "lodash";
import {PlaceInterface} from "@/utils/typesAndInterfaces";

export default function Home() {
    // console.log(products)
    return (
        <div className="flex flex-col w-full items-center">
            <div
                className='w-full flex flex-col sm:max-w-[500px] md:max-w-full lg:max-w-[960px] xl:max-w-[1096px] 2xl:max-w-[1280px]'>

                <div className='px-4 py-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {products.data.map((product) => (
                        <Product status={product.status} min_price={product.min_price} key={product.id} id={product.id}
                                 name={product.name} description={product.description}
                                 type={product.type}
                                 company_id={product.company_id}
                                 location={_.pick(product.location, ["city", "province", "driving_directions"])}
                                 food_description={product.food_description}
                                 media={product.media?.map(({id, url, width, height, provider}) => ({
                                     id,
                                     url,
                                     width,
                                     height,
                                     provider
                                 })) || []}
                                 country_code={product.country_code} country_name={product.country_name}
                                 min_age={product.min_age} max_age={product.max_age}

                                 places={product.places?.map(({place}) =>
                                     place ? _.pick(place, ["id", "city", "name", "type", "status", "country", "company_id", "created_at", "description", "website_url", "country_name"]) : null
                                 ).filter((item): item is PlaceInterface => item !== null) || []}

                                 food_diets={product.food_diets}
                                 currency={product.currency}
                                 company={product.company}
                                 dedicated_trip_caregiver_user={product.dedicated_trip_caregiver_user}
                                 product_id={product.product_id} max_price={product.max_price}
                                 min_trip_start_date={product.min_trip_start_date}
                                 min_trip_end_date={product.min_trip_end_date}
                                 max_trip_start_date={product.max_trip_start_date}
                                 max_trip_end_date={product.max_trip_end_date}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
