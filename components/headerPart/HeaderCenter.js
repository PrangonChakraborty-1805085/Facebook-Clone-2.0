import { HomeIcon,UserGroupIcon} from "@heroicons/react/solid";
import {FlagIcon,PlayIcon,ShoppingCartIcon}from "@heroicons/react/outline";
import HeaderCenterIcon from "./HeaderCenterIcon";
function HeaderCenter() {
    return (
        <div className="flex justify-center flex-grow">
            <div className="flex space-x-6 md:space-x-2">
             <HeaderCenterIcon active={true} Icon={HomeIcon}/>
             <HeaderCenterIcon Icon={FlagIcon}/>
             <HeaderCenterIcon Icon={PlayIcon}/>
             <HeaderCenterIcon Icon={ShoppingCartIcon}/>
             <HeaderCenterIcon Icon={UserGroupIcon}/>
            </div>
        </div>
    )
}

export default HeaderCenter
