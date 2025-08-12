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

    const [editingReg, setEditingReg] = useState(null); // registration being edited

    const handleEditClick = (reg) => {
        setEditingReg(reg); // open form with this data
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingReg((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        if (!editingReg) return;

        try {
            const res = await fetch("/api/tournaments", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editingReg),
            });
            const data = await res.json();

            if (res.ok) {
                setRegistrations((prev) =>
                    prev.map((reg) => (reg.id === editingReg.id ? editingReg : reg))
                );
                setEditingReg(null); // close the modal
                alert("Registration updated successfully!");
            } else {
                alert(data.error || "Failed to update registration.");
            }
        } catch (error) {
            alert("Server error. Could not update registration.");
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this team?")) return;
        try {
            const res = await fetch(`/api/tournaments?id=${id}`, {
                method: "DELETE",
            });
            const result = await res.json();
            if (res.ok) {
                setRegistrations((prev) => prev.filter((r) => r.id !== id));
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
        <div className="bg-[#0f0f0f] text-white p-6 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-green-400">
                    Admin - Tournament Registrations
                </h1>
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

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRegistrations.length > 0 ? (
                    filteredRegistrations.map((reg) => (
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
                                    onClick={() => handleEditClick(reg)}
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

            {/* Edit Modal */}
            {editingReg && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-[#1a1a1a] rounded-xl p-6 w-full max-w-lg relative">
                        <h2 className="text-2xl font-bold mb-4 text-green-400">
                            Edit Registration
                        </h2>

                        <label className="block mb-2 text-sm font-semibold">
                            Team Name
                            <input
                                type="text"
                                name="team"
                                value={editingReg.team}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 rounded bg-[#222] border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </label>

                        <label className="block mb-2 text-sm font-semibold">
                            Email
                            <input
                                type="email"
                                name="email"
                                value={editingReg.email}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 rounded bg-[#222] border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </label>

                        <label className="block mb-2 text-sm font-semibold">
                            Registered At
                            <input
                                type="text"
                                name="registeredAt"
                                value={editingReg.registeredAt}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 rounded bg-[#222] border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </label>

                        <label className="block mb-2 text-sm font-semibold">
                            Status
                            <select
                                name="status"
                                value={editingReg.status}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 rounded bg-[#222] border border-gray-700 focus:outline-none focus:border-green-400"
                            >
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </label>

                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={() => setEditingReg(null)}
                                className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 text-white"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
