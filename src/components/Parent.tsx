import Image from "next/image";
import {ParticipantsInterface} from "@/utils/typesAndInterfaces";

export default function Parent({ parent }: { parent: ParticipantsInterface }) {
    return (
        <div>
            <div className='flex gap-x-2 items-center'>
                <p>👤</p>
                <p>{parent.first_name} {parent.last_name}</p>
            </div>
            {parent.birth_date &&
                <div className='flex gap-x-2 items-center'>
                    <Image src="/assets/icons/birthday.png" alt="price icon"
                           width={20} height={20}/>
                    <p>{parent.birth_date}</p>
                </div>}

            {parent.pesel && <div className='flex gap-x-2 items-center'>
                <Image src="/assets/icons/age.png" alt="price icon" width={20}
                       height={20}/>
                <p>{parent.pesel}</p>
            </div>}
            {parent.phone && <div className='flex gap-x-2 items-center'>
                <Image src="/assets/icons/phone.png" alt="price icon" width={20}
                       height={20}/>
                <p>{parent.phone}</p>
            </div>}
            {parent.email && <div className='flex gap-x-2 items-center'>
                <Image src="/assets/icons/email.png" alt="price icon" width={20}
                       height={20}/>
                <p>{parent.email}</p>
            </div>}
            {parent.street && <div className='flex gap-x-2 items-center'>
                <Image src="/assets/icons/house.png" alt="price icon" width={20}
                       height={20}/>
                <p> {parent.street} {parent.street_number && parent.street_number}{parent.house_number && "/"}{parent.house_number}, {parent.postcode && parent.postcode} {parent.city && parent.city}, {parent.province && parent.province}</p>
            </div>}
        </div>
    );
}