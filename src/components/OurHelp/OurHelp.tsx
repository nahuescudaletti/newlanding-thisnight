"use client";

import { RiArrowRightLine } from 'react-icons/ri';
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { dataOurhelp } from "./DataOurHelp";
import { useRouter } from 'next/navigation';

export function OurHelp() {
    const router = useRouter();

    const handleLearnMore = (title: string, description: string, features: any[]) => {
        // Construir la descripción completa usando los beneficios y descripciones de features
        const fullDescription = features.map(feature => `${feature.beneficios}: ${feature.descriptionBeneficios}`).join('\n');

        router.push(`/FormProducts?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&description2=${encodeURIComponent(fullDescription)}`);
    };

    return (
        <div className="relative px-4 py-20 md:py-20" id='products'>
            <BackgroundRadialRight />
            <div className="max-w-7xl mx-auto">
                <MotionTransition>
                    <div className="flex flex-col justify-center items-center text-center h-full text-white">
                        <Reveal>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat">
                                <span className="block degradedBlue bg-Orange">
                                   Módulos
                                </span>
                            </h1>
                        </Reveal>
                        <Reveal>
                            <p className="w-full mx-auto mt-5 text-base md:text-xl font-light font-montserrat tracking-wide text-center mb-10">
                                Con nuestros módulos, garantizamos una administración eficiente y sin pérdidas para tu evento.
                            </p>
                        </Reveal>
                    </div>
                </MotionTransition>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
                    {dataOurhelp.map(({ id, title, description, features }) => (
                        <MotionTransition key={id}>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg h-full">
                                <div className="p-6 h-full flex flex-col justify-between">
                                    <div>
                                        <Reveal>
                                            <h3 className="text-xl md:text-2xl font-regular font-montserrat">{title}</h3>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-sm md:text-base font-thin">{description}</p>
                                        </Reveal>
                                    </div>
                                    <Reveal>
                                        <button
                                            onClick={() => handleLearnMore(title, description, features)}
                                            className="text-orange-500 mt-4 flex items-center space-x-2 text-sm"
                                        >
                                            Learn more
                                            <RiArrowRightLine className="text-orange-500 text-m" />
                                        </button>
                                    </Reveal>
                                </div>
                            </div>
                        </MotionTransition>
                    ))}
                </div>
            </div>
        </div>
    );
}
