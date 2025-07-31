'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
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
        <header className="flex justify-between h-14 items-center py-8 right-0 left-0 absolute top-0 z-50">
            <div className="mx-10">
                <Image src="/logo.png" alt="logo" width={180} height={100} />
            </div>
            <nav>
                <ul className="flex gap-6 mx-10 text-lg items-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/service">Service</Link></li>
                    <li><Link href="/contact">Contact</Link></li>

                    {/* Avatar Dropdown */}
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
                            <div className="absolute right-0 left-1 mt-2 w-20 bg-white text-black rounded shadow-md z-50">
                                <a href="/login" className="btn p-5">Login</a>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}