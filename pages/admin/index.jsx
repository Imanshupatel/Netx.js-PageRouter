"use client";

import { useState } from "react";
import {
    ChartBar,
    Users,
    Gamepad2,
    Settings,
    Trophy,
    Search,
    Bell,
    Star,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    const [stats] = useState([
        {
            label: "Total Players",
            value: "1,248",
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
    ]);

    const recentActivity = [
        {
            id: 1,
            user: "Player123",
            action: "joined a tournament",
            time: "2 mins ago",
        },
        {
            id: 2,
            user: "GamerPro",
            action: "started a new match",
            time: "15 mins ago",
        },
        {
            id: 3,
            user: "NoobMaster",
            action: "won 1st place in BattleZone",
            time: "1 hr ago",
        },
    ];

    const trendingGames = [
        { id: 1, name: "BattleZone", rating: 4.8, image: "/images/battlezone.jpg" },
        { id: 2, name: "Racing Legends", rating: 4.6, image: "/images/racing.jpg" },
        { id: 3, name: "Fantasy Wars", rating: 4.7, image: "/images/fantasy.jpg" },
    ];

    return (
        <div className="flex min-h-screen bg-[#0e0e10] text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-[#161618] border-r border-gray-800 p-6 space-y-6 pt-25">
                <h1 className="text-2xl font-bold">GameAdmin</h1>
                <nav className="space-y-3">
                    {[
                        { name: "Dashboard", icon: ChartBar, link: "/admin/dashboard" },
                        { name: "Games", icon: Gamepad2, link: "/admin/games" },
                        { name: "Players", icon: Users, link: "/admin/players" },
                        { name: "Tournaments", icon: Trophy, link: "/admin/tournaments" },
                        { name: "Settings", icon: Settings, link: "/admin/settings" },
                    ].map((item) => (
                        <Link
                            href={item.link}
                            className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-purple-600 transition hover:!text-white "
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="pt-18 bg-[#161618]">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-t border-gray-800 bg-[#161618]">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-[#1c1c1f] px-4 py-2 rounded-lg text-sm outline-none"
                                />
                                <Search className="w-4 h-4 absolute right-3 top-2.5 text-gray-500" />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        </div>
                    </div>
                </header>

                {/* Dashboard Body */}
                <main className="p-6 space-y-8">
                    {/* Stats */}
                    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex items-center p-5 bg-[#1c1c1f] rounded-2xl shadow-lg border border-gray-800 hover:border-white transition"
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
                    <section className="bg-[#1c1c1f] rounded-2xl shadow-lg border border-gray-800 p-6">
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
                                    className="bg-[#1c1c1f] rounded-xl border border-gray-700 overflow-hidden hover:border-white transition"
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
                </main>
            </div>
        </div>
    );
}
