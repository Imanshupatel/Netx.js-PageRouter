"use client";

import { useContext, useRef, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
    const { isLoggedIn, user, logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        setOpen(false);
    }, [isLoggedIn]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <header className="flex justify-between h-14 items-center py-8 fixed top-0 z-50 w-full backdrop-blur-lg">
            <div className="mx-10">
                <Image src="/logo.png" alt="logo" width={180} height={100} />
            </div>

            <nav>
                <ul className="flex gap-6 mx-10 text-lg items-center">
                    {/* Common links for everyone */}
                    <li><Link href="/">Home</Link></li>

                    {isLoggedIn ? (
                        <>
                            {/* Extra links only for admin */}
                            {user?.role === "admin" && (
                                <>
                                    <li><Link href="/admin/dashboard">Dashboard</Link></li>
                                    <li><Link href="/admin/tournaments">Tournaments</Link></li>
                                    <li><Link href="/admin/contactdata">Contact Data</Link></li>
                                </>
                            )}

                            {user?.role !== "admin" && (
                                <>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/service">Service</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </>
                            )}

                            {/* Extra links only for normal users */}
                            {user?.role === "user" && (
                                <>
                                    <li><Link href="/my-tournaments">My Tournaments</Link></li>
                                </>
                            )}

                            {/* Profile dropdown */}
                            <li className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setOpen((prev) => !prev)}
                                    className="ml-4 p-1 rounded-full hover:ring-2 ring-blue-500 transition"
                                    aria-label="Profile"
                                >
                                    <Image
                                        src="/icon.png"
                                        alt="User Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                </button>

                                {open && (
                                    <div className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-md z-50">
                                        <Link
                                            href="/profile"
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                            onClick={() => setOpen(false)}
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </li>
                        </>
                    ) : (
                        <>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/service">Service</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li>

                                <Link
                                    href="/login"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                >
                                    Login
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}
