import Image from "next/image";
import { useMoralis } from "react-moralis";
import profilePic from '../public/images/pic.png'
import Initialzing from "./Initialzing";

function Login() {
    const { authenticate, isAuthenticating } = useMoralis();

    if (isAuthenticating) {
           return(
            <Initialzing/> 
           ) 
        }

    return (
        <div className="bg-black relative">
            <h1>I am the Login Screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
               
                <Image
                    className="object-cover rounded-full" 
                    src={profilePic}
                    height={200}
                    width={200}
                />
               
                <button 
                    onClick={authenticate}
                    className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the Metaverse
                </button>
            </div>

            <div className="w-full h-screen">
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login
