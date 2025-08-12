import { useMemo } from "react";
import { ChartBar, Users, Gamepad2, Trophy, Star } from "lucide-react";
import teamPlayers from "../../data/tournaments.json";

export default function AdminDashBoard() {
    // Calculate unique player count by email
    const uniquePlayerCount = useMemo(() => {
        const emails = new Set(teamPlayers.map((p) => p.email.toLowerCase()));
        return emails.size;
    }, []);

    // Define stats using current uniquePlayerCount
    const stats = [
        {
            label: "Total Players",
            value: uniquePlayerCount.toLocaleString(),
            icon: Users,
            color: "bg-purple-500",
        },
        {
            label: "Active Games",
            value: "342",
            icon: Gamepad2,
            color: "bg-green-500",
        },
        {
            label: "Revenue",
            value: "$12,980",
            icon: ChartBar,
            color: "bg-yellow-500",
        },
        {
            label: "Ongoing Tournaments",
            value: "8",
            icon: Trophy,
            color: "bg-red-500",
        },
    ];

    // rest remains the same
    const recentActivity = [
        {
            id: 1,
            user: "Player123",
            action: "joined a tournament",
            time: "2 mins ago",
        },
        // ...
    ];

    const trendingGames = [
        { id: 1, name: "BattleZone", rating: 4.8, image: "/images/battlezone.jpg" },
        // ...
    ];

    return (
        <>
            {/* Stats */}
            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex items-center p-5 bg-[#1c1c1f] rounded-2xl shadow-lg border border-gray-800 hover:border-purple-500 transition"
                    >
                        <div className={`p-3 rounded-xl ${stat.color} bg-opacity-20`}>
                            <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-gray-400">{stat.label}</p>
                            <p className="text-xl font-bold">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Recent Activity */}
            <section className="bg-[#1c1c1f] rounded-2xl shadow-lg border border-gray-800 p-6 mb-8">
                <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                <ul className="space-y-4">
                    {recentActivity.map((activity) => (
                        <li
                            key={activity.id}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={`https://i.pravatar.cc/40?u=${activity.user}`}
                                    alt={activity.user}
                                    className="w-8 h-8 rounded-full"
                                />
                                <span>
                                    <span className="font-semibold">{activity.user}</span>{" "}
                                    {activity.action}
                                </span>
                            </div>
                            <span className="text-gray-500 text-sm">{activity.time}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Trending Games */}
            <section className="bg-[#1c1c1f] rounded-2xl shadow-lg border border-gray-800 p-6">
                <h2 className="text-lg font-semibold mb-4">Trending Games</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingGames.map((game) => (
                        <div
                            key={game.id}
                            className="bg-[#1c1c1f] rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500 transition"
                        >
                            <img
                                src={game.image}
                                alt={game.name}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-4 flex justify-between items-center">
                                <span className="font-semibold">{game.name}</span>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    <span>{game.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

