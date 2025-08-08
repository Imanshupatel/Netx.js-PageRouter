'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const images = [
    {
        id: "3",
        src: "/update/venom.jpg",
        alt: "Character 3",
        link: "https://youtu.be/0VJIR35soVk?si=QqerHu6eL4oKT9Z9",
    },
    {
        id: "6",
        src: "/update/dinosure.jpg",
        alt: "Character 6",
        link: "https://youtu.be/PfitJkrq3Cc?si=Mhy_ih7TBOO8Cdny",
    },
    {
        id: "1",
        src: "/update/dracula.jpg",
        alt: "Character 1",
        link: "https://youtu.be/vgVcUMrKlyw?si=-KCd4f56bwr81zT3",
    },
    {
        id: "2",
        src: "/update/godzilla.jpg",
        alt: "Character 2",
        link: "https://youtu.be/E3pJV16STvo?si=gWeW5rziVfjlQ0M8",
    },
    {
        id: "4",
        src: "/update/dragon.webp",
        alt: "Character 4",
        link: "https://youtu.be/rLdwucendx4?si=6F5QW2rH_CIMtvSk",
    },
    {
        id: "5",
        src: "/update/evagalion.avif",
        alt: "Character 5",
        link: "https://youtu.be/NbcdaCDr0sY?si=Bh5caKiEdZQzIIcs",
    },
    {
        id: "7",
        src: "/update/kong.webp",
        alt: "Character 7",
        link: "https://youtu.be/QsvRms3HJi4?si=AXaM9zhLw2G5us4S",
    },
    {
        id: "8",
        src: "/update/spiderman.jpg",
        alt: "Character 8",
        link: "https://youtu.be/cRZ9sPzPvDo?si=BECBu6Art3wmn7CJ",
    },
];

export default function CharacterCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="mb-20">
            <div className="relative w-full mx-auto my-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    centeredSlides={true} // Make center slide truly centered
                    loop={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {images.map((img, index) => {
                        // Calculate scale: center slide is 1, others smaller
                        const scale = index === activeIndex ? 1 : 0.8;

                        return (
                            <SwiperSlide key={index} className="max-h-[365px]">
                                <Link href={img.link} className="cursor-pointer">
                                    <div
                                        className={`relative transition-transform duration-300 ease-in-out rounded-2xl ${index === activeIndex
                                            ? "border-4 border-green-500"
                                            : "border-0"
                                            }`}
                                        style={{ transform: `scale(${scale})` }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={400}
                                            height={500}
                                            className="w-full h-full object-cover rounded-xl"
                                        />

                                        {index === activeIndex && (
                                            <div className="absolute bottom-[40%] right-[45%] w-15 h-15 bg-green-500 rounded-full flex items-center justify-center shadow-lg rotate-315 text-black">
                                                <FaArrowRight size={25} />
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}

                    {/* Navigation Arrows */}
                    <div className="swiper-button-prev absolute !top-[22px] !left-0 !w-12 !h-[346px] bg-black flex items-center justify-center shadow-md cursor-pointer" />
                    <div className="swiper-button-next absolute !top-[22px] !right-0 !w-12 !h-[346px] bg-black flex items-center justify-center shadow-md cursor-pointer" />
                </Swiper>
            </div>
        </section>
    );
}
