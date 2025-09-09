"use client";

import { useContext, useEffect, useState } from "react";
import {
    ChartBar,
    Users,
    Gamepad2,
    Trophy,
    Search,
    Bell,
    Contact,
    LogOut,
    Menu,
    X,
} from "lucide-react";
import AdminDashBoard from "@/component/admin/dashBoard";
import AdminPlayers from "@/component/admin/players";
import { AuthContext } from "@/context/AuthContext";
import AdminTeams from "@/component/admin/team";
import AdminContacts from "@/component/admin/contactdata";
import AdminTournament from "@/component/admin/tournaments";
import GameSection from "@/component/admin/game";
import { useRouter } from "next/navigation";

const tabComponents = {
    Dashboard: <AdminDashBoard />,
    Games: <GameSection />,
    Players: <AdminPlayers />,
    Team: <AdminTeams />,
    Tournaments: <AdminTournament />,
    Contact: <AdminContacts />,
};


export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const [contactCount, setContactCount] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { user, logout } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        async function fetchContactCount() {
            try {
                const res = await fetch("/api/contact-count");
                const data = await res.json();
                if (data.newCount !== undefined) {
                    setContactCount(data.newCount);
                }
            } catch (err) {
                console.error("Error fetching contact count:", err);
            }
        }

        fetchContactCount();
        const interval = setInterval(fetchContactCount, 30000);
        return () => clearInterval(interval);
    }, []);

    const menuItems = [
        { name: "Dashboard", icon: ChartBar },
        { name: "Games", icon: Gamepad2 },
        { name: "Players", icon: Users },
        { name: "Tournaments", icon: Trophy },
        { name: "Team", icon: Users },
        { name: "Contact", icon: Contact },
    ];

    if (!user || user.role !== "admin") {
        return (
            <p className="p-10 min-w-[93vw] text-center pt-100 text-3xl text-red-500">
                Access Denied. Admins only.
            </p>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#0e0e10] text-white">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:flex w-64 bg-[#161618] border-r border-gray-800 p-6 pt-20 flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold mb-6">GameAdmin</h1>
                    <nav className="space-y-3">
                        {menuItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => setActiveTab(item.name)}
                                className={`flex items-center w-full px-3 py-2 rounded-lg transition 
                                    ${activeTab === item.name
                                        ? "bg-purple-600 text-white"
                                        : "hover:bg-purple-600 hover:text-white"
                                    }`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                {item.name}
                            </button>
                        ))}
                    </nav>
                </div>

                <button
                    onClick={() => {
                        logout();
                        router.push("/Home");
                    }}
                    className="flex items-center w-full px-3 py-2 mb-100 rounded-lg transition text-red-400 hover:bg-red-600 hover:text-white"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                </button>
            </aside>

            {/* Sidebar - Mobile (Slide-in) */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={() => setSidebarOpen(false)}
                    ></div>

                    {/* Sidebar */}
                    <div className="relative w-64 bg-[#161618] border-r border-gray-800 p-6 flex flex-col justify-between z-50">
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold">GameAdmin</h1>
                                <button onClick={() => setSidebarOpen(false)}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <nav className="space-y-3">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => {
                                            setActiveTab(item.name);
                                            setSidebarOpen(false);
                                        }}
                                        className={`flex items-center w-full px-3 py-2 rounded-lg transition 
                                            ${activeTab === item.name
                                                ? "bg-purple-600 text-white"
                                                : "hover:bg-purple-600 hover:text-white"
                                            }`}
                                    >
                                        <item.icon className="w-5 h-5 mr-3" />
                                        {item.name}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <button
                            onClick={() => {
                                logout();
                                router.push("/Home");
                            }}
                            className="flex items-center w-full px-3 py-2 rounded-lg transition text-red-400 hover:bg-red-600 hover:text-white"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </button>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative">
                {/* Header */}
                <header className="fixed top-0 left-0 md:left-64 right-0 z-50 bg-[#161618] border-b border-t border-gray-800">
                    <div className="flex items-center justify-between px-6 py-4">
                        {/* Mobile menu button */}
                        <button
                            className="md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu className="w-6 h-6 text-white" />
                        </button>

                        {/* Search */}
                        <div className="flex items-center gap-4 flex-1 md:flex-none md:ml-4">
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-[#1c1c1f] px-4 py-2 rounded-lg text-sm outline-none w-full"
                                />
                                <Search className="w-4 h-4 absolute right-3 top-2.5 text-gray-500" />
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="flex items-center gap-6 relative ml-4">
                            <div className="relative">
                                <Bell
                                    className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer"
                                    onClick={async () => {
                                        setActiveTab("Contact");
                                        try {
                                            await fetch("/api/mark-contacts-read", { method: "POST" });
                                        } catch (err) {
                                            console.error("Error marking contacts as read:", err);
                                        }
                                        setContactCount(0);
                                    }}
                                />
                                {contactCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 py-0 rounded-full">
                                        {contactCount}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Body */}
                <main className="p-4 md:p-6 space-y-8 mt-[72px] overflow-y-auto h-[calc(100vh-72px)]">
                    {tabComponents[activeTab]}
                </main>
            </div>
        </div>
    );
}
