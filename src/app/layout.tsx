import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Breadcrumbs from "@/utils/Breadcrumbs";

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    title: "GoFunlo - zadanie rekrutacyjne",
    description: "GoFunlo - zadanie rekrutacyjne",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${poppins.className} antialiased min-w-[260px]`}
        >
        <div className='py-10'>
            <Breadcrumbs/>
        </div>
        {children}
        </body>
        </html>
    );
}
