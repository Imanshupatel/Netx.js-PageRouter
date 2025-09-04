"use client";

import { useContext, useRef, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navigation() {
    const { isLoggedIn, user, logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false); // profile dropdown
    const [mobileMenu, setMobileMenu] = useState(false); // mobile nav
    const dropdownRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        setOpen(false);
        setMobileMenu(false);
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
        <header className="flex justify-between h-16 items-center px-6 fixed top-0 z-50 w-full backdrop-blur-lg bg-black/70 text-white">
            {/* Logo */}
            <div className="flex items-center">
                <Image src="/logo.png" alt="logo" width={150} height={80} />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex">
                <ul className="flex gap-6 text-lg items-center">
                    <li><Link href="/Home">Home</Link></li>

                    {isLoggedIn ? (
                        <>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/service">Service</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/my-tournaments">Tournaments</Link></li>

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
                                    <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-md z-50">
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 hover:bg-gray-200"
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

            {/* Mobile Hamburger Button */}
            <button
                className="md:hidden p-2 rounded hover:bg-gray-700 transition"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="absolute top-16 left-0 w-full bg-black/90 text-white md:hidden z-40 shadow-lg">
                    <ul className="flex flex-col items-center gap-6 py-6 text-lg">
                        <li><Link href="/Home" onClick={() => setMobileMenu(false)}>Home</Link></li>

                        {isLoggedIn ? (
                            <>
                                <li><Link href="/about" onClick={() => setMobileMenu(false)}>About</Link></li>
                                <li><Link href="/service" onClick={() => setMobileMenu(false)}>Service</Link></li>
                                <li><Link href="/contact" onClick={() => setMobileMenu(false)}>Contact</Link></li>
                                <li><Link href="/my-tournaments" onClick={() => setMobileMenu(false)}>Tournaments</Link></li>
                                <li><Link href="/profile" onClick={() => setMobileMenu(false)}>Profile</Link></li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><Link href="/about" onClick={() => setMobileMenu(false)}>About</Link></li>
                                <li><Link href="/service" onClick={() => setMobileMenu(false)}>Service</Link></li>
                                <li><Link href="/contact" onClick={() => setMobileMenu(false)}>Contact</Link></li>
                                <li>
                                    <Link
                                        href="/login"
                                        onClick={() => setMobileMenu(false)}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
}
