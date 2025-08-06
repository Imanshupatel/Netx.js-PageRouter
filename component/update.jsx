// components/CharacterCarousel.jsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaArrowRight, FaArrowLeft, FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';

const images = [
    { src: '/dracula.jpg', alt: 'Character 1' },
    { src: '/godzilla.jpg', alt: 'Character 2' },
    { src: '/venom.jpg', alt: 'Character 3' },
    { src: '/dragon.webp', alt: 'Character 4' },
];

export default function CharacterCarousel() {
    return (
        <div className="relative w-full max-w-5xl mx-auto my-10">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                className="rounded-xl"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`relative transition-all duration-300 ease-in-out ${index === 1
                                ? 'border-2 border-green-500 rounded-xl p-1'
                                : ''
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={400}
                                height={500}
                                className="w-full h-full object-cover rounded-xl"
                            />
                            {index === 1 && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-green-500 rounded-full p-3">
                                        <FaArrowUp className="text-white text-xl" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Arrows */}
                <div className="swiper-button-prev !text-green-500 !left-0 bg-[#0f0f0f] rounded-full p-2">
                    <FaArrowLeft size={20} />
                </div>
                <div className="swiper-button-next !text-green-500 !right-0 bg-[#0f0f0f] rounded-full p-2">
                    <FaArrowRight size={20} />
                </div>
            </Swiper>
        </div>
    );
}
