import { useState } from "react";

export default function TournamentRegister() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        game: "",
        team: "",
    });
    const [teamPhoto, setTeamPhoto] = useState(null);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setTeamPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.game || !formData.team || !teamPhoto) {
            setMessage("Please fill in all required fields and upload a team Logo.");
            return;
        }

        try {
            // Use FormData for file upload
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("game", formData.game);
            data.append("team", formData.team);
            data.append("teamPhoto", teamPhoto);

            const res = await fetch("/api/tournaments", {
                method: "POST",
                body: data, // FormData handles file + text
            });

            const result = await res.json();
            if (res.ok) {
                setMessage("Registration successful!");
                setFormData({ name: "", email: "", phone: "", game: "", team: "" });
                setTeamPhoto(null);
            } else {
                setMessage(result.error || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            setMessage("Server error. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Tournament Registration</h1>

                {message && <p className="mb-4 text-center text-yellow-400">{message}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                        required
                    />
                    <select
                        name="game"
                        value={formData.game}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                        required
                    >
                        <option value="">Select Game</option>
                        <option value="pubg pc">PUBG PC</option>
                        <option value="bgmi">BGMI</option>
                        <option value="pubg mobile">PUBG Mobile</option>
                    </select>
                    <input
                        type="text"
                        name="team"
                        placeholder="Team Name"
                        value={formData.team}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                        required
                    />

                    <input
                        type="file"
                        name="teamPhoto"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-3 rounded bg-gray-700 focus:outline-none"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded font-bold"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
