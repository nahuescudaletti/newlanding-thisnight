"use client"

import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Team() {
    return (
        <div className="relative" id="team">
            <BackgroundRadialLeft />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 font-montserrat degradedBlue bg-Orange">
                        Equipo
                    </h2>
                </Reveal>
                <Slide />
            </div>
        </div>
    )
}
