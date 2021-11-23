import Image from 'next/image';
import {auth,provider} from '../firebase';
function Login() {
    const signIn=()=>{
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <div className="grid place-items-center">
            <Image src="https://links.papareact.com/t4i" width={400} height={400} objectFit="contain"/>

            <h1 onClick={signIn} className="text-center p-5 rounded-full bg-blue-500 cursor-pointer text-white hover:bg-blue-700 active:bg-blue-900">Sign in with Goggle</h1>
            
        </div>
    )
}

export default Login
