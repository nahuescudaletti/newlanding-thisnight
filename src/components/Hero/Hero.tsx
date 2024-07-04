"use client"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { getBasePath } from '../../utils/utils'
import Link from "next/link"

export function Hero() {
    return (
        <MotionTransition>          
            <div className="relative bg-cover bg-center z-0 h-[75vh] md:h-[100vh]" style={{ backgroundImage: `url(${getBasePath()}/assets/finalhero2.png)` }}>
                <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
                    <h3 className="text-center text-base md:text-xl lg:text-4xl font-light font-montserrat">The ultimate nightlife experience</h3>
                    <Image
                        src={`${getBasePath()}/assets/celus.png`} // Replace with your image path
                        alt="example" // Provide an appropriate alt text
                        width={400} // Set the desired width
                        height={400} // Set the desired height
                    />
                    <p className="text-center text-xs md:text-sm lg:text-2xl font-montserrat mb-8">Gestiona tu evento en tiempo real desde una sola App.</p>
                    <div className="my-10">
                        <Link href="#form" className="px-4 py-3 rounded-md bg-OrangeRadial font-regular font-montserrat">Agendar un meet!</Link>
                    </div>
                </div>
            </div>
        </MotionTransition>
    )
}
