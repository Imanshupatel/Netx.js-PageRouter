"use client";
import { useContext, useMemo, useState, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import matchesDataFile from "@/data/matches.json";

export default function MyTournaments() {
    const { user } = useContext(AuthContext);
    const [matchesData, setMatchesData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch matches.json
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
            <h1 className="text-3xl font-bold text-white text-center m-10">
                🎮 My Tournaments
            </h1>

            {myMatches.length === 0 ? (
                <>
                    <p className="text-gray-400">You have not registered for any matches yet.</p>
                    <p className="text-gray-400 mb-5">If you are interested you can Register now.</p>
                    <Link
                        href={"/tournament/register"}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:!text-white hover:bg-blue-700 transition"
                    >
                        Register Now
                    </Link>
                </>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-xl font-semibold text-orange-400 uppercase">
                                        {game}
                                    </h2>
                                    <span className="text-sm text-gray-400">📅 {tournamentDate}</span>
                                </div>
                                <div className="mt-4 border-t border-gray-700 pt-4"></div>
                                {/* Teams side by side with VS */}
                                <div className="flex items-center justify-between">
                                    {/* My Team */}
                                    <div className="flex-1 text-center">
                                        <p className="text-white font-medium">{myTeam.team}</p>
                                        <p className="text-gray-400 text-sm">{myTeam.name}</p>
                                        <p className="text-gray-400 text-sm">📞 {myTeam.phone}</p>
                                        <img
                                            src={myTeam.logo}
                                            alt={myTeam.team}
                                            className="w-14 h-14 mx-auto mt-3 rounded-full border border-gray-600"
                                        />
                                        {/* <span
                                            className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-bold ${myTeam.status === "Approved"
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
                                    <div className="mx-4">
                                        <p className="text-xl font-bold text-gray-300">VS</p>
                                    </div>

                                    {/* Opponent */}
                                    <div className="flex-1 text-center">
                                        <p className="text-gray-200 font-medium">{opponent.team}</p>
                                        <p className="text-gray-400 text-sm">{opponent.name}</p>
                                        <img
                                            src={opponent.logo}
                                            alt={opponent.team}
                                            className="w-14 h-14 mx-auto mt-3 rounded-full border border-gray-600"
                                        />
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
