import Image from "next/image";
import Link from "next/link";

const games = [
    {
        id: 1,
        title: "BGMI",
        date: "16 July, 2025",
        image: "/bgmi-game.jpg",
        link: "/news/3-9-update",
    },
    {
        id: 2,
        title: "PUBG Mobile",
        date: "16 May, 2025",
        image: "/pubg-game.jpg",
        link: "/news/3-8-update",
    },
    {
        id: 3,
        title: "PUBG PC",
        date: "12 March, 2025",
        image: "/pubg-pc-game.png",
        link: "/news/3-7-update",
    },
];

export default function GameSection() {
    return (
        <section className="bg-[#0e0e10] py-10 px-4 sm:px-6 lg:px-12">
            {/* Section Title */}
            <div className="mb-10 text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400">
                    🎮 Games
                </h1>
            </div>

            {/* Game Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {games.map((game) => (
                    <Link key={game.id} href={game.link}>
                        <div className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer">
                            {/* Image */}
                            <div className="relative w-full h-48 sm:h-56 lg:h-64">
                                <Image
                                    src={game.image}
                                    alt={game.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5 text-white">
                                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                                    {game.title}
                                </h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
