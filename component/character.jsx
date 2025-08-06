import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const games = [
    {
        title: "Andy",
        image: "/character/andy.jpeg",
        fee: "$10.00",
    },
    {
        title: "Sophia",
        image: "/character/sophia.jpeg",
        fee: "Free",
    },
    {
        title: "Victor",
        image: "/character/victor.jpg",
        fee: "$10.00",
    },
    {
        title: "Emilia",
        image: "/character/emilia.jpg",
        fee: "$10.00",
    },
    {
        title: "Sara",
        image: "/character/sara.jpeg",
        fee: "$10.00",
    },
    {
        title: "Carlo",
        image: "/character/carlo.jpeg",
        fee: "Free",
    },
    {
        title: "Anna",
        image: "/character/anna.jpeg",
        fee: "$10.00",
    },
    {
        title: "Laith",
        image: "/character/laith.jpeg",
        fee: "$10.00",
    },
    {
        title: "Lorenzo",
        image: "/character/lorenzo.jpeg",
        fee: "$10.00",
    },
    {
        title: "Raily",
        image: "/character/raily.jpeg",
        fee: "$10.00",
    },
];

export default function Character() {
    return (
        <section className="bg-[#0d0d0d] py-16 px-4 text-white text-center">
            <p className="text-green-500 text-sm font-medium mb-2">
                # Pubg Game Character
            </p>
            <h2 className="text-3xl font-bold mb-10">
                Game On, Power Up, Win Big!
            </h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000, // 5 seconds
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]} // 👈 Add Autoplay here
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="w-full max-w-6xl mx-auto custom-swiper-pagination" // 👈 Add custom class
            >

                {games.map((game, index) => (
                    <SwiperSlide className="min-h-[350px]" key={index}>
                        <div className="bg-[#151515] rounded-xl p-3 border border-[#333] hover:shadow-lg transition-all duration-300 w-full max-w-[240px] mx-auto">
                            <div className="relative w-full h-50 mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={game.image}
                                    alt={game.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-1">{game.title}</h3>
                            <p className="text-sm text-gray-400">
                                Entry Fee:{" "}
                                <span className="text-green-500">{game.fee}</span>
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
