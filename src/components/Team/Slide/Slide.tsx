import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataTeam } from '../Team.data';
import { Reveal } from '@/components/Reveal';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { getBasePath } from '@/utils/utils';

export function Slide() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                678: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            mousewheel={{
                forceToAxis: true,
                sensitivity: 1
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="h-[250px] w-full md:max-w-7xl"
        >
            {dataTeam.map(({ id, name, work, image }) => (
                <SwiperSlide key={id} className="my-5 cursor-pointer md:px-10">
                    <Reveal>
                        <div className="flex items-center justify-center text-white rounded-lg p-4 mx-auto">
                            <Image
                                src={image}
                                alt={name}
                                width={100}
                                height={100}
                                className="mr-5 rounded-full"
                            />
                            <div className="flex flex-col justify-center">
                                <h4 className="text-center">{name}</h4>
                                <p className="text-primaryDark">{work}</p>
                            </div>
                        </div>
                    </Reveal>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
