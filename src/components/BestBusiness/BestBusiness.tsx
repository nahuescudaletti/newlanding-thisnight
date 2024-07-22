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
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { MotionTransition } from '../MotionTransition';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { benefitsVerifyData } from './benefitsVerifyData.data';

export function BestBusiness() {
    const pagination = {
        clickable: true,
        renderBullet: (index: number, className: string) => {
            return `<span class="${className}">${index + 1}</span>`;
        },
    };

    return (
        <div className="relative px-6 py-20 md:py-40" id="benefits">
            <BackgroundRadialLeft />
            <MotionTransition>
                <div className="flex flex-col justify-center items-center text-center h-full text-white mb-10">
                    <Reveal>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat">
                            <span className="block degradedBlue bg-Orange">
                                Beneficios
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="w-full mx-auto mt-5 text-base md:text-xl font-light font-montserrat tracking-wide text-center mb-10">
                            Estos son los beneficios que ofrecen nuestros módulos
                        </p>
                    </Reveal>
                </div>
                <div className="grid max-w-xs md:max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 justify-between">
                    {/* N-Cards */}
                    <div className="col-span-1 flex flex-col items-center mx-4">
                        <Reveal>
                            <h4 className='text-xl md:text-4xl font-semibold text-center mb-6 font-montserrat'>N-Cards</h4>
                            <div className="flex justify-center mb-6">
                                <Image
                                    src={`${getBasePath()}/assets/tarjetazoom.gif`}
                                    alt="Animated example"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </Reveal>
                        <Swiper
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            effect={'cards'} // Aplica el efecto de tarjetas
                            grabCursor={true}
                            modules={[EffectCards, Pagination, Autoplay]} // Importa el módulo EffectCards y la paginación
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            loop
                            className="w-full mb-6 relative"
                            autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            }}
                        >
                            {benefitsCardData.map((benefit, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative border-transparent shadow-dark rounded-3xl bg-gradient-to-br from-violet-950 to-violet-500 backdrop-blur-lg overflow-hidden h-full">
                                        <div className="p-6 h-full flex flex-col justify-around relative">
                                            <h4 className="text-xl md:text-2xl font-regular font-montserrat text-white">{benefit.title}</h4>
                                            <p className="text-sm md:text-base font-thin text-white">{benefit.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination absolute bottom-4 left-0 w-full text-center z-10"></div>
                        </Swiper>
                    </div>

                    {/* N-Tickets */}
                    <div className="col-span-1 flex flex-col items-center mx-4">
                        <Reveal>
                            <h4 className='text-xl md:text-4xl font-semibold text-center mb-4 font-montserrat'>N-Tickets</h4>
                            <div className="flex justify-center mb-5">
                                <Image
                                    src={`${getBasePath()}/assets/ticket.png`}
                                    alt="Animated example"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </Reveal>
                        <Swiper
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            effect={'cards'} // Aplica el efecto de tarjetas
                            grabCursor={true}
                            modules={[EffectCards, Pagination, Autoplay]} // Importa el módulo EffectCards y la paginación
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            loop
                            className="w-full mb-6 relative"
                            autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            }}
                        >
                            {benefitsTicketData.map((benefit, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative border-transparent shadow-dark rounded-3xl bg-gradient-to-br from-violet-950 to-violet-500 backdrop-blur-lg overflow-hidden h-full">
                                        <div className="p-6 h-full flex flex-col justify-around relative">
                                            <h4 className="text-xl md:text-2xl font-regular font-montserrat text-white">{benefit.title}</h4>
                                            <p className="text-sm md:text-base font-thin text-white">{benefit.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination absolute bottom-4 left-0 w-full text-center z-10"></div>
                        </Swiper>
                    </div>

                    {/* N-ID */}
                    <div className="col-span-1 flex flex-col items-center mx-4">
                        <Reveal>
                            <h4 className='text-xl md:text-4xl font-semibold text-center mb-4 font-montserrat'>N-ID</h4>
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={`${getBasePath()}/assets/id.png`}
                                    alt="Animated example"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </Reveal>
                        <Swiper
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            effect={'cards'} // Aplica el efecto de tarjetas
                            grabCursor={true}
                            modules={[EffectCards, Pagination, Autoplay]} // Importa el módulo EffectCards y la paginación
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            loop
                            className="w-full mb-6 relative"
                            autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            }}
                        >
                            {benefitsIdData.map((benefit, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative border-transparent shadow-dark rounded-3xl bg-gradient-to-br from-violet-950 to-violet-500 backdrop-blur-lg overflow-hidden h-full">
                                        <div className="p-6 h-full flex flex-col justify-around relative">
                                            <h4 className="text-xl md:text-2xl font-regular font-montserrat text-white">{benefit.title}</h4>
                                            <p className="text-sm md:text-base font-thin text-white">{benefit.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination absolute bottom-4 left-0 w-full text-center z-10"></div>
                        </Swiper>
                    </div>
                    <div className="col-span-1 flex flex-col items-center mx-4">
                        <Reveal>
                            <h4 className='text-xl md:text-4xl font-semibold text-center mb-4 font-montserrat'>Verifica tu tarjeta</h4>
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={`${getBasePath()}/assets/verify.png`}
                                    alt="Animated example"
                                    width={70}
                                    height={100}
                                />
                            </div>
                        </Reveal>
                        <Swiper
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            effect={'cards'} // Aplica el efecto de tarjetas
                            grabCursor={true}
                            modules={[EffectCards, Pagination, Autoplay]} // Importa el módulo EffectCards y la paginación
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            loop
                            className="w-full mb-6 relative"
                            autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            }}
                        >
                            {benefitsVerifyData.map((benefit, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative border-transparent shadow-dark rounded-3xl bg-gradient-to-br from-violet-950 to-violet-500 backdrop-blur-lg overflow-hidden h-full">
                                        <div className="p-6 h-full flex flex-col justify-around relative">
                                            <h4 className="text-xl md:text-2xl font-regular font-montserrat text-white">{benefit.title}</h4>
                                            <p className="text-sm md:text-base font-thin text-white">{benefit.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination absolute bottom-4 left-0 w-full text-center z-10"></div>
                        </Swiper>
                    </div>
                </div>
            </MotionTransition>
        </div>
    );
}
