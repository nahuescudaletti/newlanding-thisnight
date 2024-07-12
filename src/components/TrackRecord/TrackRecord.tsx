"use client"

import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal"
import CountUp from "react-countup";
import { dataTrackRecord } from "./DataTrackRecord";
import { ClientsTN } from "../ClientsTN";

export function TrackRecord() {
    return (
        <div className="relative px-6 py-20 md:py-40" id="features">
            <BackgroundRadialLeft />
            <MotionTransition>
                <div className="grid max-w-7xl mx-auto md:grid-cols-1">
                    <div className="flex flex-col justify-center items-center text-center">
                        <Reveal>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-1">
                                <span className="block degradedBlue bg-OrangeLight font-semibold font-montserrat">Nuestro recorrido</span>
                            </h1>
                        </Reveal>
                        <Reveal>
                            <p className="w-full mt-10 text-base md:text-lg font-normal font-montserrat">Cada día, más eventos se suman a This Night para optimizar su gestión y mejorar la experiencia de sus clientes.</p>
                        </Reveal>
                    </div>
                </div>
            </MotionTransition>
            <MotionTransition className="max-w-5xl py-10 mx-auto md:py-20">
                <div className="justify-between md:flex">
                    {dataTrackRecord.map(({ id, startNumber, endNumber, text }) => (
                        <div key={id} className="py-5 text-xl md:text-2xl text-center md:text-left">
                            {id === 1 && (
                                <>
                                    +<CountUp start={startNumber} end={endNumber} duration={2.5} enableScrollSpy />
                                    {" "}
                                    <span className="degradedBlue bg-OrangeLight">{text}</span>
                                </>
                            )}
                            {id === 2 && (
                                <>
                                    +<CountUp start={startNumber} end={endNumber} duration={5} enableScrollSpy />
                                    {" "}
                                    <span className="degradedBlue bg-OrangeLight">{text}</span>
                                </>
                            )}
                            {id === 3 && (
                                <>
                                    <CountUp start={startNumber} end={endNumber} duration={2.5} enableScrollSpy />
                                    {" "}
                                    <span className="degradedBlue bg-OrangeLight">{text}</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </MotionTransition>
            <ClientsTN/>
        </div>
    )
}
