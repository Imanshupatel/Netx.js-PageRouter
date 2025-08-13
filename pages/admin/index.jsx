"use client";

import { useContext, useState } from "react";
import {
    ChartBar,
    Users,
    Gamepad2,
    Settings,
    Trophy,
    Search,
    Bell,
} from "lucide-react";
import AdminDashBoard from "@/component/admin/dashBoard";
import AdminPlayers from "@/component/admin/players";
import { AuthContext } from "@/context/AuthContext";
import AdminTeams from "@/component/admin/team";

const tabComponents = {
    Dashboard: <AdminDashBoard />,
    Players: <AdminPlayers />,
    Team: <AdminTeams />,
};

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("Dashboard");

    const { user } = useContext(AuthContext);

    const menuItems = [
        { name: "Dashboard", icon: ChartBar },
        { name: "Games", icon: Gamepad2 },
        { name: "Players", icon: Users },
        { name: "Tournaments", icon: Trophy },
        { name: "Team", icon: Users },
        { name: "Settings", icon: Settings },
    ];

    if (!user || user.role !== "admin") {
        return <p className="p-10 min-w-[93vw] text-center pt-100 text-3xl text-red-500">Access Denied. Admins only.</p>;
    }

    return (
        <div className="flex min-h-screen bg-[#0e0e10] text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-[#161618] border-r border-gray-800 p-6 space-y-6">
                <h1 className="text-2xl font-bold">GameAdmin</h1>
                <nav className="space-y-3">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`flex items-center w-full px-3 py-2 rounded-lg transition ${activeTab === item.name
                                ? "bg-purple-600 text-white"
                                : "hover:bg-purple-600 hover:text-white"
                                }`}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </button>
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
                <main className="p-6 space-y-8">{tabComponents[activeTab]}</main>
            </div>
        </div>
    );
}