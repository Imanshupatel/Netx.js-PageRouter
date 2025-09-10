import Image from "next/image";

const EsportsJoinSection = () => {
    return (
        <section className="w-full sm:py-10 py-3 bg-[#0f0f0f] flex justify-center relative overflow-hidden">
            <div className="max-w-7xl w-full px-4 md:px-6 relative">
                {/* ✅ Background Shape */}
                <div className="absolute inset-0 -top-32 md:-top-40 flex justify-center z-0">
                    <svg
                        viewBox="0 0 1200 430"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-[350px] md:h-[600px] max-w-[1400px] md:ml-[28px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <pattern
                                id="imgPattern"
                                patternUnits="userSpaceOnUse"
                                width="1200"
                                height="500"
                            >
                                <image
                                    href="/cta1-1.png"
                                    x="600"
                                    y="0"
                                    width="550"
                                    height="500"
                                    preserveAspectRatio="xMidYMid meet"
                                />
                            </pattern>
                            <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#111" />
                                <stop offset="100%" stopColor="#222" />
                            </linearGradient>
                        </defs>

                        {/* Gradient background path */}
                        <path
                            d="M 0 80
                            Q 0 50 30 50
                            H 380
                            Q 395 50 405 60
                            Q 420 80 440 80
                            H 720
                            Q 730 80 740 65
                            Q 750 50 760 50
                            H 1120
                            Q 1150 50 1150 80
                            V 400
                            Q 1150 430 1120 430
                            H 780
                            Q 760 430 740 410
                            Q 730 400 710 400
                            H 440
                            Q 420 400 405 420
                            Q 395 430 370 430
                            H 30
                            Q 0 430 0 400
                            Z"
                            fill="url(#bgGradient)"
                        />

                        {/* Image pattern path */}
                        <path
                            d="M 0 80
                            Q 0 50 30 50
                            H 380
                            Q 395 50 405 60
                            Q 420 80 440 80
                            H 720
                            Q 730 80 740 65
                            Q 750 50 760 50
                            H 1120
                            Q 1150 50 1150 80
                            V 400
                            Q 1150 430 1120 430
                            H 780
                            Q 760 430 740 410
                            Q 730 400 710 400
                            H 440
                            Q 420 400 405 420
                            Q 395 430 370 430
                            H 30
                            Q 0 430 0 400
                            Z"
                            fill="url(#imgPattern)"
                        />

                        {/* Stroke outline */}
                        <path
                            d="M 0 80
                            Q 0 50 30 50
                            H 380
                            Q 395 50 405 60
                            Q 420 80 440 80
                            H 720
                            Q 730 80 740 65
                            Q 750 50 760 50
                            H 1120
                            Q 1150 50 1150 80
                            V 400
                            Q 1150 430 1120 430
                            H 780
                            Q 760 430 740 410
                            Q 730 400 710 400
                            H 440
                            Q 420 400 405 420
                            Q 395 430 370 430
                            H 30
                            Q 0 430 0 400
                            Z"
                            fill="none"
                            stroke="#00FF80"
                            strokeWidth="2"
                        />
                    </svg>
                </div>

                {/* ✅ Inner Card */}
                <div className="relative z-10 flex flex-col md:flex-row items-left sm:pb-25 pb-5 justify-between w-full gap-10 pt-1 md:pt-17 md:ml-5">
                    {/* Left Content */}
                    <div className="flex-1 text-left md:text-left ">
                        <p className="text-green-400 text-sm md:text-base font-medium sm:mb-2 mb-1 text-left">
                            # World Best Gaming Site
                        </p>
                        <h2 className="text-white text-sm sm:text-3xl md:text-3xl font-bold sm:mb-4 mb-2 leading-tight text-left">
                            Join Bame Esports To Become <br />
                            Next <span className="text-green-400">PRO Gamer Today!</span>
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base sm:mb-6 mb-0 max-w-lg mx-auto md:mx-0 hidden lg:block">
                            Esports and gaming facilities require thoughtful consideration of
                            various elements to create an environment that caters to the needs
                            of gamers and enhances the overall gaming experience.
                        </p>
                        <button className="sm:px-6 text-xs sm:text-base px-4 py-1 sm:py-2 bg-gradient-to-r from-green-500 to-yellow-400 text-black font-semibold rounded-full shadow hover:opacity-90 transition">
                            JOIN COMMUNITY
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EsportsJoinSection;
