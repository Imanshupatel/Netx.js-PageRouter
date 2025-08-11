"use client";
import { useContext, useState } from "react";
import registrationsData from "../../data/tournaments.json";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";

export default function AdminTournamentsPage() {
    const { user } = useContext(AuthContext);
    const [gameType, setGameType] = useState("bgmi"); // default game type
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
            const res = await fetch(`/api/tournaments?id=${id}`, {
                method: "DELETE",
            });

            const result = await res.json();
            if (res.ok) {
                setRegistrations(prev => prev.filter(r => r.id !== id));
                alert(result.message);
            } else {
                alert(result.error || "Failed to delete tournament.");
            }
        } catch (err) {
            alert("Server error.");
        }
    };

    // Filtered list by selected game type
    const filteredRegistrations = registrations.filter(
        (reg) => reg.game?.toLowerCase() === gameType.toLowerCase()
    );

    const router = useRouter();

    if (!user || user.role !== "admin") {
        return <p className="p-10 min-w-[93vw] text-center pt-100 text-3xl text-red-500">Access Denied. Admins only.</p>;
    }

    return (
        <>
            <div className="min-h-screen bg-[#0f0f0f] text-white p-8">
                <div className="flex justify-between items-center mt-15 ">
                    <h1 className="text-3xl font-bold text-center w-screen">Admin - Tournament Registrations</h1>
                </div>

                <div className="overflow-x-auto bg-[#1a1a1a] rounded-lg shadow-lg mt-8">
                    <table className="min-w-full text-left">
                        <thead>
                            <tr className="bg-[#222] text-green-400 relative">
                                <th className="p-3">ID</th>
                                <th className="p-3">Team Name</th>
                                <th className="p-3">Date & Time</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Actions</th>
                                <th>

                                    {/* Game type dropdown */}
                                    <select
                                        value={gameType}
                                        onChange={(e) => setGameType(e.target.value)}
                                        className="bg-[#1a1a1a] text-white border border-gray-600 rounded px-3 py-2 absolute right-3 top-1"
                                    >
                                        <option value="bgmi">BGMI</option>
                                        <option value="pubg pc">PUBG PC</option>
                                        <option value="pubg mobile">PUBG Mobile</option>
                                    </select>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRegistrations.length > 0 ? (
                                filteredRegistrations.map((reg, index) => (
                                    <tr key={reg.id} className="border-b border-gray-700 hover:bg-[#2a2a2a]">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3 font-semibold">{reg.team}</td>
                                        <td className="p-3">{reg.registeredAt}</td>
                                        <td className="p-3">{reg.email}</td>
                                        <td
                                            className={`p-3 font-medium ${reg.status === "Approved"
                                                ? "text-green-400"
                                                : reg.status === "Rejected"
                                                    ? "text-red-400"
                                                    : "text-yellow-400"
                                                }`}
                                        >
                                            {reg.status}
                                        </td>
                                        <td className="p-3 flex gap-2">
                                            <button
                                                className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
                                                onClick={() => handleEdit(reg)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
                                                onClick={() => handleDelete(reg.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center p-4 text-gray-400">
                                        No tournaments found for {gameType}.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <button
                    onClick={() => router.back()}
                    className="mt-6 bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    Back to Home
                </button>
            </div>
        </>
    );
}
