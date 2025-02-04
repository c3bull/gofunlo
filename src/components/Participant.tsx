import Image from "next/image";
import {ParticipantsInterface} from "@/utils/typesAndInterfaces";

export default function Participant({participant}: { participant: ParticipantsInterface }) {
    return (
        <div>
            {participant.first_name && <div className='flex gap-x-2 items-center'>
                <p>👤</p>
                <p>{participant.first_name} {participant.last_name}</p>
            </div>}
            {participant.birth_date && <div className='flex gap-x-2 items-center'>
                <Image src="/assets/icons/birthday.png" alt="birthday icon" width={20} height={20}/>
                <p>{participant.birth_date}</p>
            </div>}
            {participant.phone && <div className='flex gap-x-2 items-center'>
                <Image src="/assets/icons/phone.png" alt="price icon" width={20}
                       height={20}/>
                <p>{participant.phone}</p>
            </div>}
            {participant.email && <div className='flex gap-x-2 items-center'>
                <Image src="/assets/icons/email.png" alt="price icon" width={20}
                       height={20}/>
                <p>{participant.email}</p>
            </div>}
            {participant.pesel && <div className='flex gap-x-2 items-center'>
                <Image src="/assets/icons/age.png" alt="age icon" width={20} height={20}/>
                <p>{participant.pesel}</p>
            </div>}
            {participant.street &&
                <div className='flex gap-x-2 items-center'>
                    <Image src="/assets/icons/house.png" alt="house icon" width={20} height={20}/>
                    <p> {participant.street} {participant.street_number && participant.street_number}{participant.house_number && "/"}{participant.house_number}, {participant.postcode && participant.postcode} {participant.city && participant.city}, {participant.province && participant.province}</p>
                </div>}
        </div>
    );
}