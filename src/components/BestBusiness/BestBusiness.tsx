"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Reveal } from '../Reveal';
import { BackgroundRadialLeft } from '../BackgroundRadialLeft';
import { getBasePath } from '@/utils/utils';
import { benefitsCardData } from './benefitsCardData.data';
import { benefitsTicketData } from './benefitsTicketData.data';
import { benefitsIdData } from './benefitsIdData.data';

// Importa los estilos y el módulo EffectCards de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export function BestBusiness() {
    return (
        <div className="relative px-6 py-20 md:py-40" id="features">
            <BackgroundRadialLeft />
            <div className="flex flex-col justify-center items-center text-center">
                <Reveal>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-3">
                        <span className="block degradedBlue bg-OrangeLight font-semibold font-montserrat">Beneficios</span>
                    </h1>
                </Reveal>
            </div>
            <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-3 gap-8">
                {/* N-Cards */}
                <div className="col-span-1 flex flex-col items-center">
                    <Reveal>
                        <h4 className='text-xl md:text-4xl font-semibold text-center mb-6 font-montserrat'>N-Cards</h4>
                        <div className="flex justify-center mb-6">
                            <Image
                                src={`${getBasePath()}/assets/tarjetazoom.gif`}
                                alt="Animated example"
                                width={150}
                                height={150}
                            />
                        </div>
                    </Reveal>
                    <Swiper
                        effect={'cards'} // Aplica el efecto de tarjetas
                        grabCursor={true}
                        modules={[EffectCards]} // Importa el módulo EffectCards
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        loop
                        className="w-full mb-6"
                    >
                        {benefitsCardData.map((benefit, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative border-transparent shadow-dark rounded-3xl bg-gradient-to-br from-violet-950	 to-violet-500	 backdrop-blur-lg overflow-hidden h-full">
                                    
                                    <div className="p-6 h-full flex flex-col justify-around relative">
                                        <h4 className="text-xl md:text-2xl font-regular font-montserrat text-white">{benefit.title}</h4>
                                        <p className="text-sm md:text-base font-thin text-white">{benefit.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* N-Tickets */}
                <div className="col-span-1 flex flex-col items-center">
                    <Reveal>
                        <h4 className='text-xl md:text-4xl font-semibold text-center mb-6 font-montserrat'>N-Tickets</h4>
                        <div className="flex justify-center mb-6">
                            <Image
                                src={`${getBasePath()}/assets/tarjetazoom.gif`}
                                alt="Animated example"
                                width={150}
                                height={150}
                            />
                        </div>
                    </Reveal>
                    <Swiper
                        effect={'cards'} // Aplica el efecto de tarjetas
                        grabCursor={true}
                        modules={[EffectCards]} // Importa el módulo EffectCards
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        loop
                        className="w-full mb-6"
                    >
                        {benefitsTicketData.map((benefit, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative border-transparent shadow-dark rounded-3xl bg-gradient-to-br from-violet-950	 to-violet-500	 backdrop-blur-lg overflow-hidden h-full">
                                    
                                    <div className="p-6 h-full flex flex-col justify-around relative">
                                        <h4 className="text-xl md:text-2xl font-regular font-montserrat text-white">{benefit.title}</h4>
                                        <p className="text-sm md:text-base font-thin text-white">{benefit.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* N-ID */}
                <div className="col-span-1 flex flex-col items-center">
                    <Reveal>
                        <h4 className='text-xl md:text-4xl font-semibold text-center mb-6 font-montserrat'>N-ID</h4>
                        <div className="flex justify-center mb-6">
                            <Image
                                src={`${getBasePath()}/assets/tarjetazoom.gif`}
                                alt="Animated example"
                                width={150}
                                height={150}
                            />
                        </div>
                    </Reveal>
                    <Swiper
                        effect={'cards'} // Aplica el efecto de tarjetas
                        grabCursor={true}
                        modules={[EffectCards]} // Importa el módulo EffectCards
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        loop
                        className="w-full mb-6"
                    >
                        {benefitsIdData.map((benefit, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative border-transparent shadow-dark rounded-3xl bg-gradient-to-br from-violet-950	 to-violet-500	 backdrop-blur-lg overflow-hidden h-full">
                                    
                                    <div className="p-6 h-full flex flex-col justify-around relative">
                                        <h4 className="text-xl md:text-2xl font-regular font-montserrat text-white">{benefit.title}</h4>
                                        <p className="text-sm md:text-base font-thin text-white">{benefit.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
