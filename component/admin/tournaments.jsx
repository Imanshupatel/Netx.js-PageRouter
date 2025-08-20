import { useEffect, useState } from "react";

export default function AdminTournament() {
    const [date, setDate] = useState("");
    const [savedData, setSavedData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        fetch("/api/tournament-date")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setSavedData(data);
                } else {
                    console.error("API returned non-array:", data);
                }
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);

    const saveDate = async () => {
        if (!date) {
            alert("Please select a date first!");
            return;
        }

        try {
            const res = await fetch("/api/tournament-date", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ date }),
            });

            const data = await res.json();

            if (data.success) {
                setSavedData(prev => (Array.isArray(prev) ? [...prev, data.data] : [data.data]));
                alert(`Matches generated for date: ${data.data.tournamentDate}`);
            }
        } catch (err) {
            console.error("Save error:", err);
        }
    };

    const filteredTournament = selectedDate
        ? savedData.filter(t => t.tournamentDate === selectedDate)
        : savedData;

    return (
        <div className="min-h-[70vh] pt-25 bg-[#121212] text-white">
            <div className="bg-[#1e1e1e] shadow-lg rounded-xl p-6 max-w-4xl mx-auto border border-gray-700">
                <h1 className="text-2xl font-bold mb-4">Admin - Tournament</h1>

                {/* Date input */}
                <div className="flex gap-3 items-center mb-6">
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-[#2a2a2a] border border-gray-600 rounded-lg p-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={saveDate}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                        Save & Generate Matches
                    </button>
                </div>

                {/* Dropdown menu */}
                {savedData.length > 0 && (
                    <div className="mb-6">
                        <label className="mr-2 font-semibold">View Tournament by Date:</label>
                        <select
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="bg-[#2a2a2a] border border-gray-600 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">All Dates</option>
                            {savedData.map((t, index) => (
                                <option key={index} value={t.tournamentDate}>
                                    {t.tournamentDate}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Display tournaments */}
                {filteredTournament.length > 0 ? (
                    filteredTournament.map((tournament, index) => (
                        <div
                            key={index}
                            className="mb-8 border border-gray-600 bg-[#181818] p-4 rounded-lg"
                        >
                            <p className="mb-4 font-semibold text-gray-200">
                                Tournament Date: {tournament.tournamentDate}
                            </p>

                            <h2 className="text-lg font-bold mb-2">Matches</h2>
                            <div className="space-y-3">
                                {tournament.matches.map((match, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 border border-gray-600 p-3 rounded-lg bg-[#222222]"
                                    >
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={match.team1.logo}
                                                alt={match.team1.team}
                                                className="w-10 h-10 rounded-full border border-gray-500"
                                            />
                                            <span>{match.team1.team}</span>
                                        </div>
                                        <span className="font-bold">VS</span>
                                        {match.team2 ? (
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={match.team2.logo}
                                                    alt={match.team2.team}
                                                    className="w-10 h-10 rounded-full border border-gray-500"
                                                />
                                                <span>{match.team2.team}</span>
                                            </div>
                                        ) : (
                                            <span className="italic text-gray-400">Bye</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No tournaments found</p>
                )}
            </div>
        </div>
    );
}
