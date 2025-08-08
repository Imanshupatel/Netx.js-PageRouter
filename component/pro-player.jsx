// components/ProPlayersSection.jsx

import Image from "next/image";

const players = [
    { name: "Sarangajyoti", image: "/pro-player/Sarang-1.webp", id: "1" },
    { name: "Harsh", image: "/pro-player/spraygod.webp", id: "2" },
    { name: "Nakul", image: "/pro-player/nakul.webp", id: "3" },
    { name: "Jonathan", image: "/pro-player/jonathan.webp", id: "4" },
    { name: " Harsh", image: "/pro-player/harsh-1.webp", id: "5" },
];

export default function ProPlayersSection() {
    return (
        <section className="bg-[#0f0f0f] py-20 text-white text-center">
            <p className="text-sm text-green-400 font-medium uppercase tracking-wide mb-2">
                # Top World Class Gamer
            </p>
            <h2 className="text-3xl font-bold mb-12">Let’s See Our Pro Players</h2>

            <div className="flex flex-wrap justify-center gap-2 px-4 mb-10 relative">
                {players.map((player, idx) => (
                    <div
                        key={idx}
                        className={`relative w-[180px] md:w-[260px] rounded-xl p-1 ${(player.id % 2 === 0) ? "pt-20" : ""}`}
                    >
                        <div className="bg-[#0f0f0f] rounded-xl  relative flex flex-row item-center justify-center gap-0">
                            <Image
                                src={player.image}
                                alt={player.name}
                                width={250}
                                height={300}
                                className="object-cover absolute top-[32px] right-[23px] w-[205px] h-[320px] rounded-xl"
                            />
                            <Image
                                src="/image.png"
                                alt="Gradient Overlay"
                                width={220}
                                height={270}
                                className="object-contain left-0 w-full h-100"
                            />
                            <div className="flex w-full item-center justify-center absolute bottom-[23px] left-0">
                                <p className="text-sm font-semibold">{player.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
