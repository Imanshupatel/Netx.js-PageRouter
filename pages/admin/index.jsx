import Head from "next/head";
import Image from "next/image";
import { FaGamepad, FaTrophy, FaHeadset, FaYoutube, FaTwitch } from "react-icons/fa";
import Character from "@/component/character";
import TournamentSection from "@/component/tournament";
import CharacterCarousel from "@/component/update";
import ProPlayersSection from "@/component/pro-player";

export default function Home() {

    return (
        <>
            <Head>
                <title>Esports Gaming Site</title>
                <meta name="description" content="Shaping the Future of Esports" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="bg-[#0A0A0A] text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/background.jpg')" }}></div>

                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
                    <p className="text-green-400 text-sm mb-2"># World Class eSports & Gaming Site</p>
                    <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6">
                        SHAPING THE FUTURE OF <br /> <span className="text-green-500">ESPORTS</span>
                    </h1>

                    <div className="flex gap-4 justify-center mb-12">
                        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-full">
                            EXPLORE MORE ➜
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full">
                            BROWSE GAMES ➜
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <Image src="/left.png" alt="Left Character" width={230} height={500} />

                        <div className="max-w-md text-center">
                            <h2 className="text-2xl font-bold mb-4">Join The Big Tournaments</h2>
                            <p className="text-gray-400 mb-6">
                                Beyond esports tournaments, include a broader calendar of gaming events,
                                conferences, and conventions.
                            </p>
                            <button className="border border-green-500 hover:bg-green-500 hover:text-black text-green-500 py-2 px-6 rounded-full">
                                JOIN NOW ➜
                            </button>
                        </div>

                        <Image src="/right.png" alt="Right Character" width={230} height={500} />
                    </div>

                    <div className="mt-12 flex gap-8 text-l text-[#7FFFDE]">
                        <span className="text-purple-400">★</span>
                        <span>GAMING SPANING</span>
                        <span className="text-purple-400">★</span>
                        <span>ACTION - PACKED</span>
                        <span className="text-purple-400">★</span>
                        <span>MIND - BENDING</span>
                        <span className="text-purple-400">★</span>
                        <span>COLLECTION OG GAMES</span>
                        <span className="text-purple-400">★</span>
                    </div>
                </div>
            </section>
            <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
                <div className="min-w-[93vh] mx-auto flex flex-row justify-center items-center gap-10">

                    {/* Image with rounded corners */}
                    <div className="relative w-[400px] flex item-right rounded-[35px] overflow-hidden">
                        <video
                            src="/video/girl-X-suit.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-[400px] h-[400px] object-cover object-center"
                        />
                    </div>


                    {/* Text content */}
                    <div>
                        <p className="text-green-400 text-sm font-semibold mb-2">
                            # About Our Gaming Site
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Forging Legends In The <br /> Gaming Universe
                        </h2>

                        <ul className="space-y-6 w-[550px]">
                            <li className="flex items-start gap-4">
                                <FaGamepad className="text-green-400 text-xl mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg">Over 1k+ Affiliate Game Programs</h4>
                                    <p className="text-gray-400 text-sm">
                                        Keep users informed about the gaming industry with news articles on releases, updates, and events.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <FaTrophy className="text-yellow-400 text-xl mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg">Great Tournaments</h4>
                                    <p className="text-gray-400 text-sm">
                                        Display a calendar of upcoming tournaments with dates, times, and game titles and provide live updates.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <FaHeadset className="text-blue-400 text-xl mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg">Get Online Supports</h4>
                                    <p className="text-gray-400 text-sm">
                                        Create profiles for professional esports players, including their bios, achievements, and current teams.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Character />
            <TournamentSection />
            <CharacterCarousel />
            <ProPlayersSection />
        </>
    );
}
