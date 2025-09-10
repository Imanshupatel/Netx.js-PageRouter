// components/ProPlayersSection.jsx
import Image from "next/image";

const players = [
    { name: "Saranga", image: "/pro-player/Sarang-1.webp", id: "1" },
    { name: "Harsh", image: "/pro-player/spraygod.webp", id: "2" },
    { name: "Nakul", image: "/pro-player/nakul.webp", id: "3" },
    { name: "Jonathan", image: "/pro-player/jonathan.webp", id: "4" },
    { name: "Harsh", image: "/pro-player/harsh-1.webp", id: "5" },
];

export default function ProPlayersSection() {
    return (
        <section className="bg-[#0f0f0f] pb-16 pt-0 md:py-20 text-white text-center">
            {/* ✅ Section Heading */}
            <p className="text-xs sm:text-sm text-green-400 font-medium uppercase tracking-wide mb-2">
                # Top World Class Gamer
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12">
                Let’s See Our Pro Players
            </h2>

            {/* ✅ Player Grid */}
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {players.map((player, idx) => (
                    <div
                        key={idx}
                        className={`relative w-[140px] rounded-xl ${(player.id % 2 === 0) ? "sm:pt-20 pt-0" : ""} sm:w-[180px] md:w-[220px] lg:w-[260px] flex flex-col items-center`}
                    >
                        {/* Gradient Frame */}
                        <div className="relative w-full">
                            <Image
                                src="/image.png"
                                alt="Gradient Frame"
                                width={300}
                                height={380}
                                className="w-full md:h-100 object-contain mt-3 sm:m-[0]"
                            />

                            {/* Player Image */}
                            <Image
                                src={player.image}
                                alt={player.name}
                                width={260}
                                height={340}
                                className="absolute inset-0 mx-auto top-[20px] sm:top-[28px] md:top-[49px] xl:top-[32px] top-[0px] w-[118px] h-[180px] sm:w-[205px] sm:h-[320px] md:w-[180px] md:h-[280px] xl:w-[205px] xl:h-[320px] rounded-lg object-cover"
                            />

                            {/* Player Name */}
                            <div className="absolute bottom-[0px] sm:bottom-[10px] xl:bottom-[10px] md:bottom-[38px] w-full flex justify-center">
                                <p className="px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-semibold">
                                    {player.name}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
