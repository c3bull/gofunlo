import Link from "next/link";

export default function Reservation() {

    return (
        <Link href="/bookings/book_5213ZLCLZQ"
              className='hover:bg-black duration-300 rounded-full max-w-44 max-h-44 flex items-center justify-center text-center bg-blue-900 text-white aspect-square p-10'>
            Rezerwacje
        </Link>
    )
}