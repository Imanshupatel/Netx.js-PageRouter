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
        <section className="bg-[#0e0e10] py-10 px-6 ">
            <div >
                <h1 className="text-3xl font-bold text-center text-indigo-400">🎮 Games</h1>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-15">
                {games.map((game) => (
                    <div
                        key={game.id}
                        className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
                    >
                        <Image
                            src={game.image}
                            alt={game.title}
                            width={500}
                            height={300}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-5 text-white">
                            <h3 className="text-lg font-semibold mb-3">{game.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
