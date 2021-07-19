import {
    DotsHorizontalIcon,VideoCameraIcon
} from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import Contact from "./Contact";
//For now on, it is hard coded. In later development of this app, I wiil fetch these contacts from firebase storage. I will give the functionality of storing info in database and fetching from there
const contacts=[
    {
        name:"Elon Mask",
        src:"https://links.papareact.com/kxk",
    },
    {
        name:"Jeff Bezos",
        src:"https://links.papareact.com/f0p",
      
    },
    {
        name:"Mark Zuckerburg",
        src:"https://links.papareact.com/snf",

    },
    {
        name:"Bill Gates",
        src:"https://links.papareact.com/d0c",
    },
    {
        name:"Harry Potter",
        src:"https://links.papareact.com/6gg",
    },
    {
        name:"The Queen",
        src:"https://links.papareact.com/r57",
    },
    {
        name:"James Bond",
        src:"https://links.papareact.com/zvy",
    },
];
function Widgets() {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                 <VideoCameraIcon className='h-6'/>
                 <SearchIcon className='h-6'/>
                 <DotsHorizontalIcon className='h-6'/>
                </div>
            </div>

            {
                contacts.map((contact)=>(
                    <Contact key={contact.src} src={contact.src} name={contact.name}/>
                ))
            }
        </div>
    )
}

export default Widgets