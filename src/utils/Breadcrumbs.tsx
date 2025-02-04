"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const Breadcrumbs = () => {
    const pathname = usePathname();

    if (!pathname) return null;

    const pathSegments = pathname.split("/").filter(Boolean);

    return (
        <div className="min-w-[260px]">
            <div className="px-4 lg:px-0 py-8 md:py-10 lg:py-16 w-full flex justify-center">
                <div className='w-full flex flex-col sm:max-w-[500px] md:max-w-full lg:max-w-[960px] '>
                    <nav className="w-full text-sm text-gray-500">
                        <ul className="flex items-center gap-x-2 flex-wrap">
                            <li>
                                <Link href="/" className="hover:underline">Home</Link>
                                {pathSegments.length > 0 && <span> / </span>}
                            </li>
                            {pathSegments.map((segment, index) => {
                                const href = "/" + pathSegments.slice(0, index + 1).join("/");
                                return (
                                    <li key={href}>
                                        <Link href={href} className="hover:underline capitalize">
                                            {decodeURIComponent(segment)}
                                        </Link>
                                        {index < pathSegments.length - 1 && <span> / </span>}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;