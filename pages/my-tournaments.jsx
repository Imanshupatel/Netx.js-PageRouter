"use client";
import { useContext, useMemo, useState, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import matchesDataFile from "@/data/matches.json";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function MyTournaments() {
    const { user } = useContext(AuthContext);
    const [matchesData, setMatchesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMatchesData(matchesDataFile);
        setLoading(false);
    }, []);

    const myMatches = useMemo(() => {
        if (!user) return [];
        let userMatches = [];
        const today = new Date();

        matchesData.forEach((tournament) => {
            const tournamentDate = new Date(tournament.tournamentDate);
            if (tournamentDate >= today) {
                tournament.matches.forEach((match) => {
                    if (
                        match.team1.email.toLowerCase() === user.email.toLowerCase() ||
                        match.team2.email.toLowerCase() === user.email.toLowerCase()
                    ) {
                        userMatches.push({
                            ...tournament,
                            match,
                        });
                    }
                });
            }
        });

        return userMatches;
    }, [user, matchesData]);

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-center p-4">
                <p className="text-base sm:text-lg">
                    Please log in to see your tournaments.
                </p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-center p-4">
                <p className="text-base sm:text-lg">Loading tournaments...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 px-4 sm:px-6 md:px-8 py-10">
            <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mt-13 mb-10 ${orbitron.className}`}
            >
                🎮 My Tournaments
            </h1>

            {myMatches.length === 0 ? (
                <div className="text-center">
                    <p className="text-gray-400 text-sm sm:text-base">
                        You have not registered for any upcoming matches yet.
                    </p>
                    <p className="text-gray-400 mb-5 text-sm sm:text-base">
                        If you are interested you can Register now.
                    </p>
                    <Link
                        href={"/tournament/register"}
                        className="mt-4 inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white px-5 py-3 rounded-xl text-sm sm:text-base hover:opacity-90 transition shadow-lg"
                    >
                        Register Now
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myMatches.map((item, index) => {
                        const { tournamentDate, game, match } = item;
                        const myTeam =
                            match.team1.email.toLowerCase() === user.email.toLowerCase()
                                ? match.team1
                                : match.team2;
                        const opponent =
                            match.team1.email.toLowerCase() === user.email.toLowerCase()
                                ? match.team2
                                : match.team1;

                        return (
                            <div
                                key={index}
                                className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-black 
                                rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 
                                border border-gray-700 ${orbitron.className}`}
                            >
                                {/* Glow Border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/20 pointer-events-none"></div>

                                {/* Header */}
                                <div className="flex justify-between items-center mb-4 sm:mb-6">
                                    <h2 className="text-lg sm:text-xl font-extrabold text-orange-400 tracking-wider uppercase">
                                        {game}
                                    </h2>
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        📅 {tournamentDate}
                                    </span>
                                </div>

                                {/* Teams */}
                                <div className="flex items-center justify-between">
                                    {/* My Team */}
                                    <div className="flex-1 text-center">
                                        <img
                                            src={myTeam.logo}
                                            alt={myTeam.team}
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mt-2 sm:mt-4 rounded-full border-2 border-orange-500 shadow-lg object-cover"
                                        />
                                        <p className="text-white mt-2 font-bold text-sm sm:text-base md:text-lg drop-shadow">
                                            {myTeam.team}
                                        </p>
                                        <p className="text-gray-400 text-xs sm:text-sm">{myTeam.name}</p>
                                    </div>

                                    {/* VS */}
                                    <div className="mx-4 sm:mx-6">
                                        <p className="text-2xl sm:text-3xl font-extrabold text-orange-500 animate-pulse">
                                            VS
                                        </p>
                                    </div>

                                    {/* Opponent */}
                                    <div className="flex-1 text-center">
                                        <img
                                            src={opponent.logo}
                                            alt={opponent.team}
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mt-2 sm:mt-4 rounded-full border-2 border-purple-500 shadow-lg object-cover"
                                        />
                                        <p className="text-gray-200 mt-2 font-bold text-sm sm:text-base md:text-lg drop-shadow">
                                            {opponent.team}
                                        </p>
                                        <p className="text-gray-400 text-xs sm:text-sm">{opponent.name}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Register Button */}
            <div className="text-center mt-10">
                <Link
                    href={"/tournament/register"}
                    className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white px-5 py-3 rounded-xl text-sm sm:text-base hover:opacity-90 transition shadow-lg"
                >
                    Register Now
                </Link>
            </div>
        </div>
    );
}
