"use client";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCheck, faHourglass, faChartLine } from '@fortawesome/free-solid-svg-icons';

export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40" id="aboutus">
            <BackgroundRadialRight />
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div className="md:col-span-1 flex flex-col justify-center items-center">
                        <Reveal>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-center font-montserrat">
                                <span className="block degradedBlue bg-Orange">
                                    Gestión de boliches
                                </span>
                            </h1>
                        </Reveal>
                        <Reveal>
                            <p className="max-w-md mt-6 text-base md:text-xl font-light font-montserrat tracking-wide text-center md:text-center">
                                Impulsa tu evento con la última tecnología y llevándolo a otro nivel.
                            </p>
                        </Reveal>
                    </div>
                    <div className="md:col-span-1 grid grid-cols-1 gap-8">
                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6 flex items-center">
                                    <FontAwesomeIcon icon={faRocket} className="text-purple-500 text-xl md:text-2xl mr-4 flex-shrink-0" />
                                    <div>
                                        <Reveal>
                                            <h3 className="text-xl md:text-2xl font-semibold">Fluidez en barras y cajas</h3>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-sm md:text-base">
                                                Operaciones rápidas y eficientes que aumentan la productividad.
                                            </p>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </MotionTransition>

                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6 flex items-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-purple-500 text-xl md:text-2xl mr-4 flex-shrink-0" />
                                    <div>
                                        <Reveal>
                                            <h3 className="text-xl md:text-2xl font-semibold">Individualización del cliente</h3>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-sm md:text-base">
                                                Reconocimiento de datos y preferencias del cliente.
                                            </p>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </MotionTransition>

                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6 flex items-center">
                                    <FontAwesomeIcon icon={faHourglass} className="text-purple-500 text-xl md:text-2xl mr-4 flex-shrink-0" />
                                    <div>
                                        <Reveal>
                                            <h3 className="text-xl md:text-2xl font-semibold">Gestión integral en tiempo real</h3>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-sm md:text-base">
                                                Monitoreo y control basadas en datos en tiempo real.
                                            </p>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </MotionTransition>

                        <MotionTransition>
                            <div className="border-transparent shadow-dark rounded-3xl bg-white bg-opacity-5 backdrop-blur-lg">
                                <div className="p-6 flex items-center">
                                    <FontAwesomeIcon icon={faChartLine} className="text-purple-500 text-xl md:text-2xl mr-4 flex-shrink-0" />
                                    <div>
                                        <Reveal>
                                            <h3 className="text-xl md:text-2xl font-semibold">Análisis avanzado de métricas y KPIs</h3>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-sm md:text-base">
                                                Evaluación de datos para optimizar estrategias y mejorar el rendimiento.
                                            </p>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </MotionTransition>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstBlock;
