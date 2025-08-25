"use client";

import { useState } from "react";
import Footer from "@/component/footer";
import { Mail, MessageSquare, User } from "lucide-react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError("⚠️ Please fill in all fields.");
            return;
        }
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                setForm({ name: "", email: "", message: "" });
            } else {
                alert("Error: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="min-h-[92vh] mt-20 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-blue-950 px-6 py-12">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-3xl w-full border border-white/20">
                    {/* Title */}
                    <h1 className="text-5xl font-extrabold text-center text-amber-400 drop-shadow mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-300 text-center mb-8 max-w-xl mx-auto">
                        Have questions, feedback, or just want to connect? Drop us a message and we’ll get back to you as soon as possible.
                    </p>

                    {/* Form */}
                    <form className="grid grid-cols-1 gap-6 text-black" onSubmit={handleSubmit}>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow"
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@email.com"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
                            />
                        </div>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Type your message..."
                                rows={5}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow resize-none"
                            ></textarea>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            className="mt-2 w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-xl shadow-lg transition-all duration-200"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2 bg-white/10 p-4 rounded-xl border border-white/20">
                            <Mail className="w-6 h-6 text-blue-400" />
                            <span className="text-gray-200">contact@bgmi.com</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-white/10 p-4 rounded-xl border border-white/20">
                            <Mail className="w-6 h-6 text-pink-400" />
                            <span className="text-gray-200">support@bgmi.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
