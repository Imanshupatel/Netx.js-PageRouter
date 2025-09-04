"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react"; // 👁️ icons

export default function Profile() {
    const { isLoggedIn, user, logout } = useContext(AuthContext);
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    if (!isLoggedIn || !user) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-white">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl p-6 sm:p-8 text-center overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                {/* Soft glow background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.15),transparent_70%)]"></div>

                {/* Avatar */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/icon.png"
                        alt="User Avatar"
                        width={100}
                        height={100}
                        className="rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.5)] sm:w-[120px] sm:h-[120px]"
                    />
                    <h1 className="text-xl sm:text-2xl font-bold mt-4 mb-6 tracking-wide text-gray-100">
                        {user.name || "Unnamed User"}
                    </h1>
                </div>

                {/* Info Section */}
                <div className="text-left space-y-3 bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/10">
                    <p className="text-gray-300 text-sm sm:text-base">
                        <span className="font-semibold text-cyan-400">Email:</span>{" "}
                        {user.email || "Not Provided"}
                    </p>

                    {/* Password with toggle */}
                    <div className="flex items-center justify-between text-gray-300 text-sm sm:text-base">
                        <span>
                            <span className="font-semibold text-cyan-400">Password:</span>{" "}
                            {showPassword
                                ? user.password || "Hidden"
                                : "•".repeat((user.password || "Hidden").length)}
                        </span>
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="ml-2 p-1 rounded-md hover:bg-white/10 transition"
                        >
                            {showPassword ? (
                                <Eye className="w-5 h-5 text-cyan-400" />
                            ) : (
                                <EyeOff className="w-5 h-5 text-cyan-400" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                        className="flex-1 bg-cyan-600 text-white rounded-lg py-2 px-4 font-semibold shadow-lg hover:bg-cyan-500 transition"
                        onClick={() => {
                            logout();
                            router.push("/login");
                        }}
                    >
                        Logout
                    </button>
                    <button
                        className="flex-1 bg-gray-800 text-white rounded-lg py-2 px-4 font-semibold shadow-lg hover:bg-gray-700 transition"
                        onClick={() => router.back()}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
