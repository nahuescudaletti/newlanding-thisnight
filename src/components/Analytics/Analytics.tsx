"use client";
import { getBasePath } from '@/utils/utils';
import React from 'react';

export function Analytics() {
    return (
        <div className="max-w-7xl mx-auto p-4 pt-20 md:pt-40">
            <div className="flex flex-col items-center justify-center mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat degradedBlue bg-Orange">
                    Servicio de Análisis de Datos Personalizado
                </h2>
                <p className="text-lg md:text-xl text-white my-10">
                    Ofrecemos un servicio exclusivo de análisis de datos diseñado para optimizar el rendimiento y las estadísticas de tu discoteca. Nuestro equipo está dedicado a proporcionarte insights precisos y estratégicos sobre tus operaciones y resultados.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center bg-gradient-to-br from-violet-950 to-violet-500 backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-lg p-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Análisis Profundo de Datos</h3>
                            <p className="text-sm md:text-base text-gray-200">
                                Evaluamos tus datos operativos para identificar áreas de mejora y oportunidades de crecimiento.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-br from-violet-950 to-violet-500 backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-lg p-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Asesoramiento Estratégico</h3>
                            <p className="text-sm md:text-base text-gray-200">
                                Recibe recomendaciones personalizadas para optimizar la rentabilidad y eficiencia operativa de tu discoteca.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-lg md:text-xl text-center text-gray-200">
                        Este servicio viene incluido con la adquisición de alguno de nuestros módulos y puede ser personalizado según las necesidades del cliente, ya sea cuatrimestral o anual.
                    </p>
                </div>
                <div className="mt-12">
                    <img src={`${getBasePath()}/assets/analitics2.png`} alt="Ejemplo Imagen" className="mx-auto max-w-full md:max-w-7xl" />
                </div>
            </div>
        </div>
    );
};