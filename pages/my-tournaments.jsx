import { useContext, useMemo, useState, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";

export default function MyTournaments() {
    const { user } = useContext(AuthContext);
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch tournaments from API or JSON file
    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const res = await fetch("/api/tournamentUser"); // Backend route
                const data = await res.json();
                setTournaments(data);
            } catch (error) {
                console.error("Error fetching tournaments:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTournaments();
    }, []);

    // Filter tournaments for logged-in user
    const myTournaments = useMemo(() => {
        if (!user) return [];
        return tournaments.filter(
            (t) => t.email.toLowerCase() === user.email.toLowerCase()
        );
    }, [user, tournaments]);

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
            <h1 className="text-3xl font-bold text-white mt-15 text-center mb-6">
                🎮 My Tournaments
            </h1>

            {myTournaments.length === 0 ? (
                <>
                    <p className="text-gray-400">You have not registered for any tournaments yet.</p>
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
                    {myTournaments.map((tournament) => (
                        <div
                            key={tournament.id}
                            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-xl font-semibold text-orange-400">
                                    {tournament.game.toUpperCase()}
                                </h2>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-bold ${tournament.status === "Approved"
                                        ? "bg-green-600"
                                        : tournament.status === "Rejected"
                                            ? "bg-red-600"
                                            : "bg-yellow-500 text-black"
                                        }`}
                                >
                                    {tournament.status || "Pending"}
                                </span>
                            </div>
                            <p className="text-gray-300 mt-1">
                                Team: <span className="font-medium">{tournament.team}</span>
                            </p>
                            <p className="text-gray-400 text-sm mt-2">📅 {tournament.registeredAt}</p>
                            <div className="mt-4 border-t border-gray-700 pt-4">
                                <p className="text-gray-200 font-medium">{tournament.name}</p>
                                <p className="text-gray-400 text-sm">{tournament.email}</p>
                                <p className="text-gray-400 text-sm">📞 {tournament.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
