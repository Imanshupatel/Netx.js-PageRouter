'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProfilePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loginStatus = sessionStorage.getItem('loggedIn');
        if (loginStatus === 'true') {
            setIsLoggedIn(true);
        } else {
            router.push('/login');
        }
        setLoading(false);
    }, [router]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-lg">Loading...</div>;
    }

    if (!isLoggedIn) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-black p-10">
            <h1 className="text-3xl text-white font-bold mb-6">Your Profile</h1>

            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-center">
                <Image
                    src="/icon.png"
                    alt="User Avatar"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                />
                <h2 className="mt-2 text-xl font-semibold">Imanshu Lakhankiya</h2>

                <div className="mt-8 text-left">
                    <p><strong>Email:</strong> </p>
                    <p><strong>Password:</strong> </p>
                </div>
            </div>
        </div>
    );
}
