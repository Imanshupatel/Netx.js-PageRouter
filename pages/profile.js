"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";

export default function Profile() {
    const { isLoggedIn, user, logout } = useContext(AuthContext);
    const router = useRouter();

    if (!isLoggedIn || !user) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 flex items-center justify-center px-4 py-12 text-white">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm text-center text-black">
                <div className="flex flex-col items-center">
                    <Image
                        src="/icon.png"
                        alt="User Avatar"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                    <h1 className="text-3xl font-bold mb-7">
                        {user.name || "Unnamed User"}
                    </h1>
                </div>

                <div className="text-left space-y-2">
                    <p>
                        <span className="font-semibold">Email:</span>{" "}
                        {user.email || "Not Provided"}
                    </p>
                    <p>
                        <span className="font-semibold">Password:</span>{" "}
                        {user.password || "Hidden"}
                    </p>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                    <button
                        className="bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 transition"
                        onClick={() => {
                            logout();
                            router.push("/login");
                        }}
                    >
                        Logout
                    </button>
                    <button
                        className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition"
                        onClick={() => router.back()}
                    >
                        Go to Back
                    </button>
                </div>
            </div>
        </div>
    );
}