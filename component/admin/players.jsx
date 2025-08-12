import { useContext, useState, useMemo } from "react";
import Head from "next/head";
import players from "../../data/tournaments.json";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { FaGamepad, FaEnvelope, FaPhone } from "react-icons/fa";

export default function AdminPlayers() {
    const { user } = useContext(AuthContext);
    const router = useRouter();
    const [selectedGame, setSelectedGame] = useState("All");

    // Group players by email (more reliable than name)
    const groupedPlayers = useMemo(() => {
        const map = new Map();

        players.forEach((p) => {
            const key = p.email.toLowerCase();
            if (!map.has(key)) {
                map.set(key, { ...p, games: [p.game] });
            } else {
                const existing = map.get(key);
                if (!existing.games.includes(p.game)) {
                    existing.games.push(p.game);
                }
                map.set(key, existing);
            }
        });

        return Array.from(map.values());
    }, []);

    // Filter after grouping
    const filteredPlayers =
        selectedGame === "All"
            ? groupedPlayers
            : groupedPlayers.filter((p) =>
                p.games.some(
                    (g) => g.toLowerCase() === selectedGame.toLowerCase()
                )
            );

    if (!user || user.role !== "admin") {
        return (
            <p className="p-10 min-w-[93vw] text-center pt-40 text-3xl text-red-500">
                Access Denied. Admins only.
            </p>
        );
    }

    return (
        <>
            <Head>
                <title>Players Dashboard</title>
            </Head>

            <div className="min-h-screen bg-[#0e0e0e] text-white p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 border-b border-gray-800 pb-4 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-indigo-400">🎮 Players Dashboard</h1>
                        <span className="text-sm text-gray-400">
                            Total Players: {filteredPlayers.length}
                        </span>
                    </div>

                    {/* Dropdown */}
                    <select
                        value={selectedGame}
                        onChange={(e) => setSelectedGame(e.target.value)}
                        className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500 transition-all"
                    >
                        <option value="All">All Games</option>
                        <option value="BGMI">BGMI</option>
                        <option value="PUBG Mobile">PUBG Mobile</option>
                        <option value="PUBG PC">PUBG PC</option>
                    </select>
                </div>

                {/* Players Grid */}
                {filteredPlayers.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPlayers.map((p) => (
                            <div
                                key={p.email}
                                className="bg-[#1a1a1a] rounded-xl shadow-lg p-5 hover:scale-[1.02] transition-all border border-gray-800 hover:border-indigo-500"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold">{p.name}</h2>
                                    <span className="text-xs text-gray-500">{p.registeredAt}</span>
                                </div>

                                <div className="space-y-2 text-sm text-gray-300">
                                    <p className="flex items-center gap-2">
                                        <FaEnvelope className="text-indigo-400" /> {p.email}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaPhone className="text-green-400" /> {p.phone}
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <FaGamepad className="text-yellow-400 mt-1" />
                                        <span>
                                            Games:{" "}
                                            {p.games.map((g, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-block bg-gray-800 px-2 py-1 rounded-md text-xs ml-1"
                                                >
                                                    {g}
                                                </span>
                                            ))}
                                        </span>
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                        View Stats
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center mt-20 text-lg">
                        No players found for this game.
                    </p>
                )}
            </div>
        </>
    );
}

