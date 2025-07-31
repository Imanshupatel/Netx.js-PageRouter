import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        // You can add more validation here (e.g., email format)
        setError("");
        // Submit logic here
        alert("Form Submitted!");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <>
            <div className="min-h-[92vh] flex flex-col items-center justify-center bg-gradient-to-black via-pink-100 to-yellow-100 p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full mt-8">
                    <h1 className="text-4xl font-bold mb-2 text-center text-blue-700">Contact Us</h1>
                    <p className="text-gray-600 mb-6 text-center">Have questions, feedback, or want to connect? Fill out the form below or reach us directly!</p>
                    <form className="grid grid-cols-1 text-black gap-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@email.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Type your message..."
                                rows={4}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            ></textarea>
                        </div>
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                        <button type="submit" className="mt-2 bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
                            Send Message
                        </button>
                    </form>
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center gap-2 text-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25M2.25 6.75l9.72 7.29c.45.34 1.11.34 1.56 0l9.72-7.29" />
                            </svg>
                            <span>contact@bgmi.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-pink-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25M2.25 6.75l9.72 7.29c.45.34 1.11.34 1.56 0l9.72-7.29" />
                            </svg>
                            <span>support@bgmi.com</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="w-full text-center py-6 mt-0 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} BattleGround Mobile. All rights reserved.
            </footer>
        </>
    );
};

export default Contact;