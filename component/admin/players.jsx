import { useContext, useState } from "react";
import Head from "next/head";
import players from "../../data/tournaments.json";
import { AuthContext } from "../../context/AuthContext";
import { FaGamepad, FaUsers, FaEnvelope, FaPhone, FaTimes } from "react-icons/fa";

export default function Players() {
    const { user } = useContext(AuthContext);

    // Filters & UI state
    const [selectedGame, setSelectedGame] = useState("All");
    const [selectedPlayer, setSelectedPlayer] = useState(null); // the player whose personal view is open

    const normalize = (s = "") => s.trim().toLowerCase();

    // Filter players based on selected game
    const filteredPlayers =
        selectedGame === "All"
            ? players
            : players.filter((p) => normalize(p.game) === normalize(selectedGame));

    if (!user || user.role !== "admin") {
        return (
            <p className="p-10 min-w-[93vw] text-center pt-40 text-3xl text-red-500">
                Access Denied. Admins only.
            </p>
        );
    }

    const winRate = (p) => {
        const m = p?.stats?.matches ?? 0;
        const w = p?.stats?.wins ?? 0;
        if (!m) return 0;
        return ((w / m) * 100).toFixed(1);
    };

    return (
        <>
            <Head>
                <title>Players</title>
            </Head>

            <div className="min-h-screen bg-[#0e0e0e] text-white p-6">
                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 border-b border-gray-800 pb-4 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-indigo-400">🎮 Teams Players</h1>
                        <span className="text-sm text-gray-400">Total Players: {filteredPlayers.length}</span>
                    </div>

                    {/* Game Filter Dropdown */}
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

                {/* Player Cards Grid */}
                {filteredPlayers.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPlayers.map((p) => (
                            <div
                                key={p.id ?? p.email}
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
                                    <p className="flex items-center gap-2">
                                        <FaGamepad className="text-yellow-400" /> Game:{" "}
                                        <span className="capitalize">{p.game}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaUsers className="text-pink-400" /> Team: {p.team}
                                    </p>
                                </div>

                                {/* View personal stats (opens modal) */}
                                <button
                                    onClick={() => setSelectedPlayer(p)}
                                    className="mt-5 w-full px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
                                >
                                    View Stats
                                </button>

                                {/* Quick glance (optional tiny footer row) */}
                                {p?.stats && (
                                    <div className="mt-3 text-xs text-gray-400 flex justify-between">
                                        <span>Matches: {p.stats.matches}</span>
                                        <span>WR: {winRate(p)}%</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center mt-20 text-lg">No teams found for this game.</p>
                )}
            </div>

            {/* Personal View Stats Modal */}
            {selectedPlayer && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70"
                        onClick={() => setSelectedPlayer(null)}
                    />

                    {/* Modal Card */}
                    <div className="relative z-10 w-[92vw] max-w-md sm:max-w-lg bg-[#121212] border border-gray-800 rounded-2xl shadow-2xl p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white">{selectedPlayer.name}</h3>
                                <p className="text-xs text-gray-400 mt-1">Registered: {selectedPlayer.registeredAt}</p>
                            </div>
                            <button
                                aria-label="Close"
                                onClick={() => setSelectedPlayer(null)}
                                className="p-2 rounded-lg hover:bg-white/10 text-gray-300"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Body: Basic Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                            <p className="flex items-center gap-2"><FaEnvelope className="text-indigo-400" />{selectedPlayer.email}</p>
                            <p className="flex items-center gap-2"><FaPhone className="text-green-400" />{selectedPlayer.phone}</p>
                            <p className="flex items-center gap-2"><FaGamepad className="text-yellow-400" />Game: <span className="capitalize">{selectedPlayer.game}</span></p>
                            <p className="flex items-center gap-2"><FaUsers className="text-pink-400" />Team: {selectedPlayer.team}</p>
                        </div>

                        {/* Divider */}
                        <div className="my-4 h-px bg-gray-800" />

                        {/* Stats */}
                        {selectedPlayer?.stats ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                                <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3">
                                    <p className="text-xs text-gray-400">Matches</p>
                                    <p className="text-xl font-semibold">{selectedPlayer.stats.matches}</p>
                                </div>
                                <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3">
                                    <p className="text-xs text-gray-400">Wins</p>
                                    <p className="text-xl font-semibold">{selectedPlayer.stats.wins}</p>
                                </div>
                                <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3">
                                    <p className="text-xs text-gray-400">Kills</p>
                                    <p className="text-xl font-semibold">{selectedPlayer.stats.kills}</p>
                                </div>
                                <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3">
                                    <p className="text-xs text-gray-400">K/D</p>
                                    <p className="text-xl font-semibold">{selectedPlayer.stats.kd}</p>
                                </div>
                                <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3">
                                    <p className="text-xs text-gray-400">Win Rate</p>
                                    <p className="text-xl font-semibold">{winRate(selectedPlayer)}%</p>
                                </div>
                                <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3">
                                    <p className="text-xs text-gray-400">Rank</p>
                                    <p className="text-xl font-semibold">{selectedPlayer.stats.rank}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-400 text-sm">No stats available for this player.</p>
                        )}

                        {/* Footer */}
                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={() => setSelectedPlayer(null)}
                                className="w-full px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
