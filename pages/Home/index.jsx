import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/component/navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <div
                className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
            >
                {/* <Navigation /> */}
                <div className="relative min-h-[93vh] overflow-hidden">
                    {/* Background Video */}
                    <video
                        className="fixed top-0 left-0 w-full h-full object-cover z-0"
                        autoPlay
                        loop
                        muted
                        playsInline
                        src="/video/videoplayback.webm"
                    />
                </div>
            </div>
        </>
    );
}
