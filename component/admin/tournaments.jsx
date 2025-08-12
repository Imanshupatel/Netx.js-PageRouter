"use client";
import { useContext, useState } from "react";
import registrationsData from "../../data/tournaments.json";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";

export default function AdminTeams() {
    const { user } = useContext(AuthContext);
    const [gameType, setGameType] = useState("bgmi");
    const [registrations, setRegistrations] = useState(
        registrationsData.map((item) => ({
            ...item,
            status: item.status || "Pending",
        }))
    );

    const handleEdit = (reg) => {
        const updatedStatus = prompt("Enter new status (Pending, Approved, Rejected):", reg.status);
        if (updatedStatus) {
            setRegistrations((prev) =>
                prev.map((r) => (r.id === reg.id ? { ...r, status: updatedStatus } : r))
            );
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this tournament?")) return;
        try {
            const res = await fetch(`/api/tournaments?id=${id}`, { method: "DELETE" });
            const result = await res.json();
            if (res.ok) {
                setRegistrations(prev => prev.filter(r => r.id !== id));
                alert(result.message);
            } else {
                alert(result.error || "Failed to delete tournament.");
            }
        } catch {
            alert("Server error.");
        }
    };

    const filteredRegistrations = registrations.filter(
        (reg) => reg.game?.toLowerCase() === gameType.toLowerCase()
    );

    const router = useRouter();

    if (!user || user.role !== "admin") {
        return (
            <p className="p-10 min-w-[93vw] text-center pt-40 text-3xl text-red-500">
                Access Denied. Admins only.
            </p>
        );
    }

    return (
        <div className=" bg-[#0f0f0f] text-white p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-green-400">Admin - Tournament Registrations</h1>
                <select
                    value={gameType}
                    onChange={(e) => setGameType(e.target.value)}
                    className="bg-[#1a1a1a] text-white border border-gray-600 rounded px-3 py-2"
                >
                    <option value="bgmi">BGMI</option>
                    <option value="pubg pc">PUBG PC</option>
                    <option value="pubg mobile">PUBG Mobile</option>
                </select>
            </div>

            {/* Card layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRegistrations.length > 0 ? (
                    filteredRegistrations.map((reg, index) => (
                        <div
                            key={reg.id}
                            className="bg-[#1a1a1a] rounded-xl shadow-lg p-5 border border-gray-700 hover:shadow-green-500/30 hover:scale-[1.02] transition-transform"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold">{reg.team}</h2>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-bold ${reg.status === "Approved"
                                        ? "bg-green-600"
                                        : reg.status === "Rejected"
                                            ? "bg-red-600"
                                            : "bg-yellow-500 text-black"
                                        }`}
                                >
                                    {reg.status}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm">📅 {reg.registeredAt}</p>
                            <p className="text-gray-400 text-sm">✉️ {reg.email}</p>
                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={() => handleEdit(reg)}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(reg.id)}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-400">
                        No tournaments found for {gameType}.
                    </p>
                )}
            </div>

            {/* Back button */}
            <button
                onClick={() => router.back()}
                className="mt-8 bg-green-500 px-5 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
                ⬅ Back to Home
            </button>
        </div>
    );
}

