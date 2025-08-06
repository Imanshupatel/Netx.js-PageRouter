import Image from 'next/image';

const EsportsJoinSection = () => {
    return (
        <section className="w-full py-16 bg-[#0f0f0f] flex justify-center">
            <div className="max-w-7xl w-full px-6">
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#0f0f0f] rounded-xl border-[2px] border-transparent p-[2px] bg-gradient-to-br from-green-500 to-yellow-400">
                    {/* Inner card */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full bg-[#0f0f0f] rounded-xl pl-12 pt-5 gap-10">

                        {/* Left content */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-green-400 text-sm font-medium mb-2"># World Best Gaming Site</p>
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                Join Bame Esports To Become <br />
                                Next <span className="text-green-400">PRO Gamer Today !</span>
                            </h2>
                            <p className="text-gray-300 text-sm mb-6 max-w-lg">
                                Esports and gaming facilities requires thoughtful consideration of various elements to create an environment that caters to the needs of gamers and enhances the overall gaming experience.
                            </p>
                            <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-yellow-400 text-black font-semibold rounded-full shadow hover:opacity-90 transition">
                                JOIN COMMUNITY
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="flex-1 relative w-full min-w-[500px]">
                            <Image
                                src="/mita.png" // put your team image here
                                alt="Pro Players"
                                width={400}
                                height={100}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default EsportsJoinSection;
