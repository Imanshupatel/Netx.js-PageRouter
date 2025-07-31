"use client";

import { useContext, useRef, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="flex justify-between h-14 items-center py-8 absolute top-0 z-50 w-full">
            <div className="mx-10">
                <Image src="/logo.png" alt="logo" width={180} height={100} />
            </div>
            <nav>
                <ul className="flex gap-6 mx-10 text-lg items-center">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>

                    {isLoggedIn ? (
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
                                <div>
                                    <Link href={"/"}>
                                        <div className="absolute right-0 mt-2 w-24 bg-white text-black rounded shadow-md z-50">
                                            <button
                                                onClick={logout}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </Link>
                                    <Link href={"/"}>
                                        <div className="absolute right-0 mt-2 w-24 bg-white text-black rounded shadow-md z-50">
                                            <button
                                                onClick={logout}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                            >
                                                Profile
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </li>
                    ) : (
                        // Show Login button if not logged in
                        <li>
                            <Link
                                href="/login"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}