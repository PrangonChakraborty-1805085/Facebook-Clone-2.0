import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";


function Header() {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            
            <HeaderLeft/>
            <HeaderCenter/>
            <HeaderRight/>
        </div>
    )
}

export default Header
