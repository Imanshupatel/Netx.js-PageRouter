// components/ProPlayersSection.jsx
import Image from "next/image";

const players = [
    { name: "Sarangajyoti", image: "/pro-player/Sarang-1.webp", id: "1" },
    { name: "Harsh", image: "/pro-player/spraygod.webp", id: "2" },
    { name: "Nakul", image: "/pro-player/nakul.webp", id: "3" },
    { name: "Jonathan", image: "/pro-player/jonathan.webp", id: "4" },
    { name: "Harsh", image: "/pro-player/harsh-1.webp", id: "5" },
];

export default function ProPlayersSection() {
    return (
        <section className="bg-[#0f0f0f] py-20 text-white text-center">
            <p className="text-sm text-green-400 font-medium uppercase tracking-wide mb-2">
                # Top World Class Gamer
            </p>
            <h2 className="text-3xl font-bold mb-12">Let’s See Our Pro Players</h2>

            <div className="flex flex-wrap justify-center gap-4 px-4 mb-10">
                {players.map((player) => (
                    <div
                        key={player.id}
                        className="relative w-[180px] sm:w-[220px] md:w-[260px] rounded-xl p-1"
                    >
                        <div className="relative w-full h-[300px] sm:h-[330px] md:h-[360px] rounded-xl overflow-hidden">
                            <Image
                                src={player.image}
                                alt={player.name}
                                fill
                                className="object-cover"
                            />
                            <Image
                                src="/image.png"
                                alt="Gradient Overlay"
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-3 left-0 w-full flex justify-center">
                                <p className="text-sm font-semibold">{player.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
