import {
    BellIcon,ChatIcon,ChevronDownIcon,ViewGridIcon
} from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/client";
import Image from 'next/image'
function HeaderRight() {
    const [session]=useSession()
    return (
        <div className="flex items-center sm:space-x-2 justify-end">
            {/* profile pic */}
            <Image
             onClick={signOut}
             className='rounded-full cursor-pointer'
             src={session.user.image}
             width={40}
             height={40}
             layout='fixed'
            />
            <p className="hidden sm:inline-flex font-semibold pr-3 whitespace-nowrap">{session.user.name}</p>
            <ViewGridIcon className="icon"/> {/* Here icon is a custom class*/}
            <ChatIcon className="icon"/>
            <BellIcon className="icon"/>
            <ChevronDownIcon className="icon"/>
        </div>
    )
}

export default HeaderRight
