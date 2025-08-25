"use client";
import { useState } from "react";
import Image from "next/image";
import { FaYoutube, FaTwitch } from "react-icons/fa";
import Link from "next/link";

const matches = [
    {
        id: 1,
        status: "Finished",
        score: "20 / 5",
        winner: "team1",
        title: "GodLike Esports VS Team Soul",
        date: "18 December, 2025 6:00 PM",
        youtube: "https://youtu.be/rOGZLPAYOlM?si=7s3GdNwHgJCWHR5x",
        twitch: true,
        team1Logo: "/team-logo/GodLike.png",
        team2Logo: "/team-logo/soul.png",
    },
    {
        id: 8,
        status: "Upcoming",
        score: "0 / 0",
        winner: null,
        title: "TSM-Entity VS Orange Rock",
        date: "5 January, 2026 3:00 PM",
        youtube: "true",
        twitch: true,
        team1Logo: "/team-logo/tsm-logo.png",
        team2Logo: "/team-logo/Orange_Rock.png",
    },
    {
        id: 2,
        status: "Finished",
        score: "20 / 22",
        winner: "team2",
        title: "Revenant Esports VS Global Esports",
        date: "20 December, 2024 6:00 PM",
        youtube: "https://youtu.be/zldsV3sSVns?si=GzN_wKkMmMa_CdTr",
        twitch: true,
        team1Logo: "/team-logo/revenant.png",
        team2Logo: "/team-logo/global.png",
    },
    {
        id: 3,
        status: "Finished",
        score: "20 / 50",
        winner: "team2",
        title: "Team XSpark VS Orange Rock",
        date: "25 August, 2025 9:00 PM",
        youtube: "https://youtu.be/3b_wmvEuu2A?si=0CU8nuxi7EnIrBvB",
        twitch: true,
        team1Logo: "/team-logo/Xspark.png",
        team2Logo: "/team-logo/Orange_Rock.png",
    },
    {
        id: 4,
        status: "Finished",
        score: "17 / 16",
        winner: "team1",
        title: "Orangutan Gaming VS Entity Gaming",
        date: "18 December, 2025 7:30 PM",
        youtube: "https://youtu.be/0STPPpiveFU?si=w5xq5VZQqEM2xPmy",
        twitch: true,
        team1Logo: "/team-logo/Orangutan.png",
        team2Logo: "/team-logo/entity.png",
    },
    {
        id: 5,
        status: "Finished",
        score: "22 / 20",
        winner: "team1",
        title: "TSM-Entity VS Gladiator",
        date: "20 December, 2024 6:00 PM",
        youtube: "https://youtu.be/ehJZx7nZbUI?si=1_1Hbp2xZGlTmgfW",
        twitch: true,
        team1Logo: "/team-logo/tsm-logo.png",
        team2Logo: "/team-logo/gladiator.png",
    },
    {
        id: 7,
        status: "Upcoming",
        score: "0 / 0",
        winner: null,
        title: "GodLike Esports VS  Global Esports",
        date: "30 December, 2025 5:00 PM",
        youtube: "true",
        twitch: true,
        team1Logo: "/team-logo/GodLike.png",
        team2Logo: "/team-logo/global.png",
    },
    {
        id: 6,
        status: "Finished",
        score: "24 / 23",
        winner: "team1",
        title: "Blind Esports VS 8Bit",
        date: "25 August, 2025 10:30 PM",
        youtube: "https://youtu.be/P_tcVoOg3n4?si=ndio4qbQvQFRhG2M",
        twitch: true,
        team1Logo: "/team-logo/blind.png",
        team2Logo: "/team-logo/8-bit.png",
    },
    {
        id: 10,
        status: "Upcoming",
        score: "0 / 0",
        winner: null,
        title: "MADX VS Empire",
        date: "31 December, 2025 5:00 PM",
        youtube: "true",
        twitch: true,
        team1Logo: "/team-logo/MADX.png",
        team2Logo: "/team-logo/empire.png",
    },
    {
        id: 9,
        status: "Upcoming",
        score: "0 / 0",
        winner: null,
        title: "Kong VS  Anime",
        date: "22 August, 2025 5:00 PM",
        youtube: "true",
        twitch: true,
        team1Logo: "/team-logo/kong.png",
        team2Logo: "/team-logo/anime.png",
    }
];


const filters = ["All Match", "Upcoming Match", "Finished Match"];

export default function TournamentSection() {
    const [selectedFilter, setSelectedFilter] = useState("All Match");

    const filteredMatches = matches.filter((match) => {
        if (selectedFilter === "All Match") return true;
        return match.status.toLowerCase() === selectedFilter.toLowerCase().replace(" match", "");
    });

    return (
        <section className="bg-[#0f0f0f] text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-green-500 text-sm font-semibold"># Game Streaming Battle</p>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                        Our Gaming Tournaments <span className="text-green-500">!</span>
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-10 gap-4">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-6 py-2 rounded-t-lg text-sm font-medium border-b-4 ${selectedFilter === filter
                                ? "bg-violet-600 text-white border-violet-600"
                                : "bg-transparent text-gray-400 border-transparent"
                                } transition-all duration-200`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Match Cards */}
                <div className="space-y-6 max-w-screen grid-cols-2 grid gap-x-20">
                    {filteredMatches.map((match) => (
                        <div
                            key={match.id}
                            className=" w-[650px] h-[170px] flex mr-5 flex-shrink-0  items-center justify-between border border-green-500/20 rounded-[20px] p-6 bg-[#121212] flex-wrap gap-4"
                        >
                            {/* Left team logo */}
                            <div className="flex flex-col items-center">
                                <Image
                                    src={match.team1Logo}
                                    alt="Team 1 Logo"
                                    width={80}
                                    height={80}
                                    className={`object-contain ${match.status === "Finished" && match.winner === "team1" ? "ring-4 ring-green-500 rounded-full" : ""}`}
                                />
                                {match.status === "Finished" && match.winner === "team1" && (
                                    <span className="text-green-500 text-xs font-semibold mt-1">Winner</span>
                                )}
                            </div>

                            {/* VS */}
                            <span className="text-3xl font-bold text-white mx-4">VS</span>

                            {/* Right team logo */}
                            <div className="flex flex-col items-center">
                                <Image
                                    src={match.team2Logo}
                                    alt="Team 2 Logo"
                                    width={80}
                                    height={80}
                                    className={`object-contain ${match.status === "Finished" && match.winner === "team2" ? "ring-4 ring-green-500 rounded-full" : ""}`}
                                />
                                {match.status === "Finished" && match.winner === "team2" && (
                                    <span className="text-green-500 text-xs font-semibold mt-1">Winner</span>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="w-[2px] bg-green-400 h-full ml-[10px]"></div>

                            {/* Match Info */}
                            <div className="flex-1 min-w-[250px] sm:ml-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full font-medium ${match.status === "Upcoming"
                                            ? "bg-green-700 text-white"
                                            : "bg-purple-700 text-white"
                                            }`}
                                    >
                                        {match.status}
                                    </span>
                                    <span className="text-xs text-gray-400">{match.score}</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">{match.title}</h3>
                                <p className="text-sm text-green-400">{match.date}</p>
                                <div className="flex gap-3 mt-2 text-red-500 text-lg">
                                    <Link href={match.youtube}>
                                        {match.youtube && <FaYoutube />}
                                    </Link>
                                    {match.twitch && <FaTwitch className="text-purple-500" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}