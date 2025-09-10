"use client";

import Head from "next/head";
import Image from "next/image";
import { FaGamepad, FaTrophy, FaHeadset } from "react-icons/fa";
import Character from "@/component/character";
import TournamentSection from "@/component/tournament";
import CharacterCarousel from "@/component/update"; // ✅ has md:border fix
import ProPlayersSection from "@/component/pro-player";
import EsportsJoinSection from "@/component/Esports";
import Footer from "@/component/footer";
import BlogSection from "@/component/blog";
import Link from "next/link";
import TeamLogos from "@/component/teamlogo";
import Facilities from "@/component/facilities";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[#0A0A0A] text-white relative overflow-hidden">
                <section className="w-full flex flex-col items-center justify-center pt-16 px-4 shadow-lg">
                    <img
                        src="/download.jpeg"
                        alt="BGMI Logo"
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg mb-4 border-4 border-white"
                    />
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 text-center">
                        BattleGround Mobile
                    </h1>
                    <p className="text-base md:text-xl text-white/90 mb-4 text-center max-w-2xl">
                        Your one-stop destination for BGMI APK downloads, player stats, and a
                        stunning gaming experience.
                    </p>
                    <div className="w-full justify-center mx-auto mt-6 mb-10 px-4 flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://apkdownload.battlegroundsmobileindia.com/bgmi_3.9.0_homepage_DwqLVenf.apk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-full shadow transition-all duration-200 text-center"
                        >
                            Download Latest APK
                        </a>
                        <a
                            href="/album"
                            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-full shadow transition-all duration-200 text-center"
                        >
                            Album
                        </a>
                    </div>
                </section>

                {/* ✅ SVG Wave Border + Tournament Section */}
                <section className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
                    {/* ✅ SVG Frame */}
                    <div className="relative w-full max-w-6xl mx-auto">
                        {/* ✅ Desktop / Tablet Frame */}
                        <svg
                            viewBox="0 0 1200 460"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden md:block absolute inset-0 w-full top-[60px] h-[410px] md:h-[410px] md:w-[710px] md:left-[23px] lg:w-[1140px] lg:h-[500px] lg:top-[80px]"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="
                                    M 0 80
                                    Q 0 50 30 50
                                    H 380
                                    Q 395 50 405 60
                                    Q 420 80 440 80
                                    H 720
                                    Q 730 80 740 65
                                    Q 750 50 760 50
                                    H 1120
                                    Q 1150 50 1150 80
                                    V 370
                                    Q 1150 400 1120 400
                                    H 780
                                    Q 760 400 740 380
                                    Q 730 370 710 370
                                    H 440
                                    Q 420 370 405 390
                                    Q 395 400 370 400
                                    H 30
                                    Q 0 400 0 370
                                    Z
                                "
                                className="fill-transparent stroke-[#00FF80] stroke-[2]"
                            />
                        </svg>

                        {/* ✅ Mobile Frame */}
                        <svg
                            viewBox="0 0 400 500"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block md:hidden absolute inset-0 w-[330px] h-full left-[25px] top-[12px]"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="
                                    M 0 80
                                    Q 0 50 30 50
                                    H 370
                                    Q 400 50 400 80
                                    V 420
                                    Q 400 450 370 450
                                    H 30
                                    Q 0 450 0 420
                                    Z
                                "
                                className="fill-transparent stroke-[#00FF80] stroke-[2]"
                            />
                        </svg>

                        {/* ✅ Inside Frame Content */}
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 px-6 py-12 md:py-20">
                            {/* ✅ Mobile Characters (stack at top) */}
                            <div className="flex md:hidden justify-between w-full px-4">
                                <Image
                                    src="/x-suit/left.png"
                                    alt="Left Character"
                                    width={120}
                                    height={200}
                                    className="w-[100px] sm:w-[120px]"
                                />
                                <Image
                                    src="/x-suit/right.png"
                                    alt="Right Character"
                                    width={120}
                                    height={200}
                                    className="w-[100px] sm:w-[120px]"
                                />
                            </div>

                            {/* ✅ Desktop Left Character */}
                            <Image
                                src="/x-suit/left.png"
                                alt="Left Character"
                                width={220}
                                height={400}
                                className="hidden md:block w-[160px] lg:w-[240px]"
                            />

                            {/* ✅ Text Content */}
                            <div className="max-w-sm sm:max-w-md md:max-w-lg text-center md:mt-[20px] mt-6 md:mt-0 md:ml-[20px] lg:ml-0 lg:mt-[50px]">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                                    Join The Big Tournaments
                                </h2>
                                <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
                                    Beyond esports tournaments, include a broader calendar of gaming
                                    events, conferences, and conventions.
                                </p>

                                {/* ✅ Button fixed for mobile */}
                                <div className="flex justify-center md:mt-[15px]">
                                    <Link
                                        href={"/tournament/register"}
                                        className="inline-block border border-white hover:border-green-500 hover:bg-green-50 hover:text-green-500 text-white py-2 px-6 rounded-full text-sm sm:text-base transition-all"
                                    >
                                        JOIN NOW ➜
                                    </Link>
                                </div>
                            </div>

                            {/* ✅ Desktop Right Character */}
                            <Image
                                src="/x-suit/right.png"
                                alt="Right Character"
                                width={220}
                                height={400}
                                className="hidden md:block w-[260px] lg:w-[240px]"
                            />
                        </div>
                    </div>

                    {/* ✅ Bottom Tags */}
                    <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-lg text-[#7FFFDE]">
                        <span className="text-purple-400">★</span>
                        <span>GAMING SPANNING</span>
                        <span className="text-purple-400">★</span>
                        <span>ACTION - PACKED</span>
                        <span className="text-purple-400">★</span>
                        <span>MIND - BENDING</span>
                        <span className="text-purple-400">★</span>
                        <span>COLLECTION OF GAMES</span>
                        <span className="text-purple-400">★</span>
                    </div>
                </section>
            </section>

            {/* About Section */}
            <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
                    {/* Video */}
                    <div className="relative w-full md:w-[400px] rounded-[20px] overflow-hidden">
                        <video
                            src="/video/girl-X-suit.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-[550px]">
                        <p className="text-green-400 text-sm font-semibold mb-2">
                            # About Our Gaming Site
                        </p>
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Forging Legends In The <br /> Gaming Universe
                        </h2>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <FaGamepad className="text-green-400 text-xl mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg">
                                        Over 1k+ Affiliate Game Programs
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Keep users informed about the gaming industry with news
                                        articles on releases, updates, and events.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <FaTrophy className="text-yellow-400 text-xl mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg">Great Tournaments</h4>
                                    <p className="text-gray-400 text-sm">
                                        Display a calendar of upcoming tournaments with dates, times,
                                        and game titles and provide live updates.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <FaHeadset className="text-blue-400 text-xl mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg">Get Online Supports</h4>
                                    <p className="text-gray-400 text-sm">
                                        Create profiles for professional esports players, including
                                        their bios, achievements, and current teams.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Other Sections */}
            <Character />
            <Facilities />
            <TournamentSection />
            <CharacterCarousel />
            <ProPlayersSection />
            <EsportsJoinSection />
            <BlogSection />
            <TeamLogos />
            <Footer />
        </>
    );
}