import {
    BellIcon,ChatIcon,ChevronDownIcon,ViewGridIcon
} from "@heroicons/react/solid";
import {auth} from "../../firebase"
// import { signOut, useSession } from "next-auth/client";
import {useAuthState} from 'react-firebase-hooks/auth'
import Image from 'next/image'
function HeaderRight() {
    // const [session]=useSession()
    const [user]=useAuthState(auth);
    return (
        <div className="flex items-center sm:space-x-2 justify-end">
            {/* profile pic */}
            <Image
             onClick={()=>auth.signOut()}
             className='rounded-full cursor-pointer'
             src={user.photoURL}
             width={40}
             height={40}
             layout='fixed'
            />
            <p className="hidden sm:inline-flex font-semibold pr-3 whitespace-nowrap">{user.email.substring(0,6)}</p>
            <ViewGridIcon className="icon"/> {/* Here icon is a custom class*/}
            <ChatIcon className="icon"/>
            <BellIcon className="icon"/>
            <ChevronDownIcon className="icon"/>
        </div>
    )
}

export default HeaderRight
