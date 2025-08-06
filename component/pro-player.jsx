// components/ProPlayersSection.jsx

import Image from "next/image";

const players = [
    { name: "Sarangajyoti Deka", image: "/pro-player/Sarang-1.webp" },
    { name: "Harsh Malik", image: "/pro-player/spraygod.webp" },
    { name: "Nakul sharma", image: "/pro-player/nakul.webp" },
    { name: "Jonathan Jude Amaral", image: "/pro-player/jonathan.webp" },
    { name: " Harsh Rao", image: "/pro-player/harsh-1.webp" },
];

export default function ProPlayersSection() {
    return (
        <section className="bg-[#0f0f0f] py-20 text-white text-center">
            <p className="text-sm text-green-400 font-medium uppercase tracking-wide mb-2">
                # Top World Class Gamer
            </p>
            <h2 className="text-3xl font-bold mb-12">Let’s See Our Pro Players</h2>

            <div className="flex flex-wrap justify-center gap-8 px-4">
                {players.map((player, idx) => (
                    <div
                        key={idx}
                        className="relative w-[180px] md:w-[200px] border-4 border-gradient rounded-xl p-1 bg-gradient-to-br from-green-500 via-black to-yellow-400"
                    >
                        <div className="bg-[#0f0f0f] rounded-xl overflow-hidden">
                            <Image
                                src={player.image}
                                alt={player.name}
                                width={200}
                                height={250}
                                className="object-cover w-full h-64"
                            />
                            <div className="text-center py-2 bg-[#0f0f0f] rounded-b-xl">
                                <p className="text-sm font-semibold">{player.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
