import Image from 'next/image';

const EsportsJoinSection = () => {
    return (
        <section className="w-full py-45 bg-[#0f0f0f] flex justify-center">
            <div className="max-w-7xl w-full px-6 relative">
                {/* Background shape */}
                <div className="w-full h-full absolute z-0 top-[-180px] left-[-100px]">
                    <div className="relative w-full h-[550px] max-w-6xl mx-auto">
                        <svg
                            viewBox="0 0 1200 400"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 w-[1347px] h-full pl-10"
                        >
                            <defs>
                                <pattern
                                    id="imgPattern"
                                    patternUnits="userSpaceOnUse"
                                    width="1200" // Full SVG width
                                    height="500" // Full SVG height
                                >
                                    <image
                                        href="/cta1-1.png"
                                        x={600} // Position image 500px from right edge (if image width is 500)
                                        y={0} // Position image at bottom (image height 400)
                                        width="550"
                                        height="500"
                                        preserveAspectRatio="xMidYMid meet"
                                    />
                                </pattern>
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

                            {/* Image pattern path on top */}
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

                            {/* Stroke on top */}
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
                </div>

                {/* Inner card */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full rounded-xl pl-12 pt-5 gap-10 z-10 relative">
                    {/* Left content */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-green-400 text-sm font-medium mb-2">
                            # World Best Gaming Site
                        </p>
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Join Bame Esports To Become <br />
                            Next <span className="text-green-400">PRO Gamer Today !</span>
                        </h2>
                        <p className="text-gray-300 text-sm mb-6 max-w-lg">
                            Esports and gaming facilities requires thoughtful consideration of
                            various elements to create an environment that caters to the needs
                            of gamers and enhances the overall gaming experience.
                        </p>
                        <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-yellow-400 text-black font-semibold rounded-full shadow hover:opacity-90 transition">
                            JOIN COMMUNITY
                        </button>
                    </div>

                    {/* Right Image */}
                    {/* <div className="flex-1 relative w-full min-w-[500px] pt-5">
            <Image
              src="/cta1-1.png" // put your team image here
              alt="Pro Players"
              width={500}
              height={400}
              className="w-full h-auto object-contain rounded-r-[30px]"
            />
          </div> */}
                </div>
            </div>
        </section>
    );
};

export default EsportsJoinSection;
