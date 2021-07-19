import Image from 'next/image';
import { signIn } from 'next-auth/client';
function Login() {
    return (
        <div className="grid place-items-center">
            <Image src="https://links.papareact.com/t4i" width={400} height={400} objectFit="contain"/>

            <h1 onClick={signIn} className="text-center p-5 rounded-full bg-blue-500 cursor-pointer text-white">Login with Facebook</h1>
        </div>
    )
}

export default Login
