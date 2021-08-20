import Image from 'next/image';
import firebase from "firebase/app";
import "firebase/auth";
//import { signIn } from 'next-auth/client';
function Login() {
    const provider = new firebase.auth.FacebookAuthProvider();
    const signIn=()=>{
        firebase.auth().signInWithRedirect(provider);
    }
    return (
        <div className="grid place-items-center">
            <Image src="https://links.papareact.com/t4i" width={400} height={400} objectFit="contain"/>

            <h1 onClick={signIn} className="text-center p-5 rounded-full bg-blue-500 cursor-pointer text-white hover:bg-blue-700 active:bg-blue-900">Login with Facebook</h1>
        </div>
    )
}

export default Login
