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
    { id: "3", src: "/update/venom.jpg", alt: "Venom", link: "https://youtu.be/0VJIR35soVk?si=QqerHu6eL4oKT9Z9" },
    { id: "6", src: "/update/dinosure.jpg", alt: "Dinosaur", link: "https://youtu.be/PfitJkrq3Cc?si=Mhy_ih7TBOO8Cdny" },
    { id: "1", src: "/update/dracula.jpg", alt: "Dracula", link: "https://youtu.be/vgVcUMrKlyw?si=-KCd4f56bwr81zT3" },
    { id: "2", src: "/update/godzilla.jpg", alt: "Godzilla", link: "https://youtu.be/E3pJV16STvo?si=gWeW5rziVfjlQ0M8" },
    { id: "4", src: "/update/dragon.webp", alt: "Dragon", link: "https://youtu.be/rLdwucendx4?si=6F5QW2rH_CIMtvSk" },
    { id: "5", src: "/update/evagalion.avif", alt: "Evangelion", link: "https://youtu.be/NbcdaCDr0sY?si=Bh5caKiEdZQzIIcs" },
    { id: "7", src: "/update/kong.webp", alt: "Kong", link: "https://youtu.be/QsvRms3HJi4?si=AXaM9zhLw2G5us4S" },
    { id: "8", src: "/update/spiderman.jpg", alt: "Spiderman", link: "https://youtu.be/cRZ9sPzPvDo?si=BECBu6Art3wmn7CJ" },
];

export default function CharacterCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="sm:mb-20 mb-10">
            <div className="relative w-full mx-auto my-10">
                <Swiper
                    centeredSlides
                    loop
                    spaceBetween={16}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },     // mobile
                        640: { slidesPerView: 2 },     // small tablets
                        1024: { slidesPerView: 3 },    // desktops
                    }}
                    modules={[Navigation]}
                    className="mySwiper !h-auto"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {images.map((img, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <SwiperSlide key={img.id} className="max-h-[365px] flex justify-center">
                                <Link href={img.link} target="_blank" rel="noopener noreferrer">
                                    <div
                                        className={`relative rounded-2xl transition-transform duration-300 ease-in-out ${isActive ? "border-4 border-green-500" : "border-0"}`}
                                        style={{ transform: `scale(${isActive ? 1 : 0.9})` }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={400}
                                            height={500}
                                            priority={isActive}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                        {isActive && (
                                            <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg text-black">
                                                <FaArrowRight size={22} />
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}

                    {/* Navigation Arrows */}
                    {/* Navigation Arrows */}
                    <div className="swiper-button-prev absolute inset-y-0 !left-[-25px] w-12 bg-black/80 flex items-center justify-center shadow-md cursor-pointer z-10" />
                    <div className="swiper-button-next absolute inset-y-0 !right-[-25px] w-12 bg-black/80 flex items-center justify-center shadow-md cursor-pointer z-10" />

                </Swiper>
            </div>
        </section>
    );
}