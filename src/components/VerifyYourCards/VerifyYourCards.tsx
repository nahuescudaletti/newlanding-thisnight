"use client";
import React from 'react';
import { getBasePath } from '@/utils/utils';

export function VerifyYourCards() {
    return (
        <div className="max-w-7xl mx-auto py-20 md:p-40" id='verify'>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center mb-10 md:mb-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat">
                        <span className="block degradedBlue bg-Orange">
                            Verifica tu tarjeta
                        </span>
                    </h1>
                    <img src={`${getBasePath()}/assets/verify.png`} alt="Icon" className="w-8 h-8 sm:w-12 sm:h-12 mx-2" />
                </div>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-3/5 p-4 flex flex-col justify-center">
                        <p className="text-lg md:text-2xl mb-6 md:mb-10 text-center">
                            ¿Alguna vez imaginaste poder anticipar las preferencias de tus clientes antes de que las expresen?
                        </p>
                        <p className="text-base md:text-lg text-center mb-6 md:mb-10">
                            Con <span className='text-purple-400 text-lg md:text-xl'>This Night</span> hemos llevado la experiencia a un nuevo nivel.
                        </p>
                        <p className="text-base md:text-lg text-center">
                            Identificarás asistencias, tragos favoritos e incluso el promedio de gastos por noche. Imagina poder contactar a un cliente potencial con la oferta perfecta para que se sienta como en casa. En nuestro mundo, individualizar al cliente es la clave.
                        </p>
                    </div>
                    <div className="w-full md:w-2/5 p-4 text-center">
                        <img src={`${getBasePath()}/assets/stats2.png`} alt="Loader GIF" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};
