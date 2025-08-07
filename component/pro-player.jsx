// components/ProPlayersSection.jsx

import Image from "next/image";

const players = [
    { name: "Sarangajyoti", image: "/pro-player/Sarang-1.webp" },
    { name: "Harsh", image: "/pro-player/spraygod.webp" },
    { name: "Nakul", image: "/pro-player/nakul.webp" },
    { name: "Jonathan", image: "/pro-player/jonathan.webp" },
    { name: " Harsh", image: "/pro-player/harsh-1.webp" },
];

export default function ProPlayersSection() {
    return (
        <section className="bg-[#0f0f0f] py-20 text-white text-center">
            <p className="text-sm text-green-400 font-medium uppercase tracking-wide mb-2">
                # Top World Class Gamer
            </p>
            <h2 className="text-3xl font-bold mb-12">Let’s See Our Pro Players</h2>

            <div className="flex flex-wrap justify-center gap-8 px-4 mb-100">
                {players.map((player, idx) => (
                    <div
                        key={idx}
                        className="relative w-[180px] md:w-[260px] rounded-xl p-1 "
                    >
                        <div className="bg-[#0f0f0f] rounded-xl  relative">
                            <Image
                                src={player.image}
                                alt={player.name}
                                width={250}
                                height={300}
                                className="object-cover absolute top-[-12px] right-7 w-[200px] h-86 padding-5 rounded-xl"
                            />
                            <Image
                                src="/image.png"
                                alt="Gradient Overlay"
                                width={220}
                                height={270}
                                className="object-contain absolute top-[-30px] left-0 w-full h-100"
                            />
                            <div className="text-center py-2 rounded-b-xl absolute top-83 left-25">
                                <p className="text-sm font-semibold">{player.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
