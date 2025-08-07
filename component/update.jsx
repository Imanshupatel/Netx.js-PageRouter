'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

const images = [
    { src: '/update/dracula.jpg', alt: 'Character 1' },
    { src: '/update/godzilla.jpg', alt: 'Character 2' },
    { src: '/update/venom.jpg', alt: 'Character 3' },
    { src: '/update/dragon.webp', alt: 'Character 4' },
];

export default function CharacterCarousel() {
    return (
        <div className="relative w-full max-w-5xl mx-auto my-10">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={false}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                className="rounded-xl"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative transition-all duration-300 ease-in-out">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={400}
                                height={500}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Arrows */}
                <div className="swiper-button-prev !text-green-100 !left-0 bg-[#0f0f0f] rounded-full p-2">
                    <FaArrowLeft size={10} />
                </div>
                <div className="swiper-button-next !text-green-100 !right-0 bg-[#0f0f0f] rounded-full p-2">
                    <FaArrowRight size={10} />
                </div>
            </Swiper>
        </div>
    );
}
