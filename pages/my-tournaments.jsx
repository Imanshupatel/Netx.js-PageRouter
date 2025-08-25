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

    // Load matches.json
    useEffect(() => {
        setMatchesData(matchesDataFile);
        setLoading(false);
    }, []);

    // Filter matches for logged-in user
    const myMatches = useMemo(() => {
        if (!user) return [];

        let userMatches = [];
        matchesData.forEach((tournament) => {
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
        });

        return userMatches;
    }, [user, matchesData]);

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <p className="text-lg">Please log in to see your tournaments.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <p>Loading tournaments...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <h1
                className={`text-4xl font-bold text-white text-center m-10 ${orbitron.className}`}
            >
                🎮 My Tournaments
            </h1>

            {myMatches.length === 0 ? (
                <>
                    <p className="text-gray-400">
                        You have not registered for any matches yet.
                    </p>
                    <p className="text-gray-400 mb-5">
                        If you are interested you can Register now.
                    </p>
                    <Link
                        href={"/tournament/register"}
                        className="mt-4 inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition shadow-lg"
                    >
                        Register Now
                    </Link>
                </>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 
                  border border-gray-700 ${orbitron.className}`}
                            >
                                {/* Glowing Border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/20 pointer-events-none"></div>

                                {/* Header */}
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-extrabold text-orange-400 tracking-wider uppercase">
                                        {game}
                                    </h2>
                                    <span className="text-sm text-gray-400">
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
                                            className="w-22 h-22 mx-auto mt-4 rounded-full border-2 border-orange-500 shadow-lg"
                                        />
                                        <p className="text-white mt-1 font-bold text-lg drop-shadow">
                                            {myTeam.team}
                                        </p>
                                        <p className="text-gray-400 text-sm">{myTeam.name}</p>
                                        {/* <p className="text-gray-500 text-sm">📞 {myTeam.phone}</p> */}
                                        {/* <span
                                            className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold ${myTeam.status === "Approved"
                                                ? "bg-green-600"
                                                : myTeam.status === "Rejected"
                                                    ? "bg-red-600"
                                                    : "bg-yellow-500 text-black"
                                                }`}
                                        >
                                            {myTeam.status || "Pending"}
                                        </span> */}
                                    </div>

                                    {/* VS */}
                                    <div className="mx-6">
                                        <p className="text-3xl font-extrabold text-orange-500 animate-pulse">
                                            VS
                                        </p>
                                    </div>

                                    {/* Opponent */}
                                    <div className="flex-1 text-center">
                                        <img
                                            src={opponent.logo}
                                            alt={opponent.team}
                                            className="w-22 h-22 mx-auto mt-4 rounded-full border-2 border-purple-500 shadow-lg"
                                        />
                                        <p className="text-gray-200 mt-2 font-bold text-lg drop-shadow">
                                            {opponent.team}
                                        </p>
                                        <p className="text-gray-400 text-sm">{opponent.name}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
