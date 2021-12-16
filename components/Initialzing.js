import { useMoralis } from "react-moralis";
import profilePic from '../public/images/pic.png'
import Image from "next/image";


function Initialzing() {
    return (
        <div className="bg-black relative">
            <h1>I am the Login Screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <button
                    className="bg-red-500 rounded-lg p-5 font-bold animate-pulse">Initializing...
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

export default Initialzing
