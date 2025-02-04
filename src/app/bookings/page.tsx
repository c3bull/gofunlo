"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function AllBookingsPage() {

    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-w-[260px]">
            <div className="px-4 lg:px-0 w-full flex justify-center">
                <div className='w-full flex flex-col sm:max-w-[500px] md:max-w-full lg:max-w-[960px] '>
                    <p>Przepraszamy, aktualnie prowadzimy pracę nad tą stroną</p>
                    <p>Nastąpi przekierowanie na stronę główną</p>
                </div>
            </div>
        </div>
    )
}