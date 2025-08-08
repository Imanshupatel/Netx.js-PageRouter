import Footer from "@/component/footer";

const About = () => {
    return (
        <>
            <div className="min-h-[93vh] bg-gradient-to-br from-black via-gray-900 to-blue-900 flex flex-col items-center justify-center p-0">
                {/* Hero Section */}
                <section className="w-full flex flex-col items-center justify-center py-16 px-4 shadow-lg">
                    <img src="/download.jpeg" alt="BGMI Logo" className="w-24 h-24 rounded-full shadow-lg mb-4 border-4 border-white" />
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2 text-center">BattleGround Mobile</h1>
                    <p className="text-xl text-white/90 mb-4 text-center max-w-2xl">
                        Your one-stop destination for BGMI APK downloads, player stats, and a stunning gaming experience.
                    </p>
                    <div className="w-full justify-center mx-auto mt-10 mb-10 px-4 flex flex-col md:flex-row gap-5"  >

                        <a
                            href="https://apkdownload.battlegroundsmobileindia.com/bgmi_3.9.0_homepage_DwqLVenf.apk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-full shadow transition-all duration-200"
                        >
                            Download Latest APK
                        </a>
                        <a href="/album"
                            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-full shadow transition-all duration-200"
                        >
                            Album
                        </a>
                    </div>
                </section>

                {/* Side by Side Section */}
                <section className="w-full max-w-[80vw] mx-auto mt-10 mb-10 px-4 flex flex-col md:flex-row gap-10">
                    {/* About Our Platform */}
                    <div className="flex-1 bg-white/10 rounded-2xl shadow-lg backdrop-blur px-6 py-8 mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold text-amber-400 mb-4 text-center md:text-left">About Our Platform</h2>
                        <ul className="list-disc list-inside text-white/90 text-lg space-y-2">
                            <li>
                                <span className="font-semibold text-amber-300">Fast & Secure Downloads:</span> Always get the latest BGMI APK directly from our trusted servers.
                            </li>
                            <li>
                                <span className="font-semibold text-amber-300">Player Stats & Analytics:</span> Track your progress, view leaderboards, and analyze your gameplay with beautiful data visualizations.
                            </li>
                            <li>
                                <span className="font-semibold text-amber-300">Modern UI/UX:</span> Enjoy a sleek, responsive design built with React & Next.js, featuring a dynamic video background.
                            </li>
                            <li>
                                <span className="font-semibold text-amber-300">Community Driven:</span> Join a vibrant community of gamers, share tips, and stay updated with the latest news.
                            </li>
                            <li>
                                <span className="font-semibold text-amber-300">24/7 Support:</span> Our team is always ready to help you with any queries or issues.
                            </li>
                        </ul>
                    </div>

                    {/* Meet the Creator */}
                    <div className="flex-1 bg-white/10 rounded-2xl shadow-lg backdrop-blur px-6 py-8 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-amber-400 mb-4 text-center">Meet the Creator</h2>
                        <img src="/imanshu.jpg" alt="Imanshu Patel" className="w-20 h-20 rounded-full border-4 border-amber-400 shadow mb-2" />
                        <p className="text-white font-semibold text-lg">Imanshu Patel</p>
                        <p className="text-amber-200 text-sm mb-2">Frontend Developer & BGMI Enthusiast</p>
                        <p className="text-white/80 text-center max-w-md">
                            Hi! I’m Imanshu, passionate about gaming and web development. I built this platform to bring the BGMI community together and provide the best tools for every player. Connect with me on <a href="#" className="text-amber-300 underline hover:text-amber-500">Twitter</a> or <a href="#" className="text-amber-300 underline hover:text-amber-500">LinkedIn</a>.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;