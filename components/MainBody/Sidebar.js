// import { useSession } from "next-auth/client"
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../firebase'
import {
    ClockIcon,CalendarIcon,DesktopComputerIcon,UsersIcon
} from "@heroicons/react/solid";
import {
    ChevronDownIcon,UserGroupIcon,ShoppingBagIcon
}from "@heroicons/react/outline";
import SidebarRowComponent from "./SidebarRowComponent";
function Sidebar() {
    // const [session,loading]=useSession()
    const [user]=useAuthState(auth);
    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            <SidebarRowComponent src={user.photoURL} title={user.email.substring(0,6)}/>
            <SidebarRowComponent Icon={UsersIcon} title='Friends'/>
            <SidebarRowComponent Icon={UserGroupIcon} title='Groups'/>
            <SidebarRowComponent Icon={ShoppingBagIcon} title='Marketplace'/>
            <SidebarRowComponent Icon={DesktopComputerIcon} title='Watch'/>
            <SidebarRowComponent Icon={CalendarIcon} title='Events'/>
            <SidebarRowComponent Icon={ClockIcon} title='Memories'/>
            <SidebarRowComponent Icon={ChevronDownIcon} title='See More'/>
        </div>
    )
}

export default Sidebar
