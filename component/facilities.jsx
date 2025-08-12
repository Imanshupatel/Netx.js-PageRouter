import Image from "next/image";

export default function Facilities() {
    return (
        <section className="relative w-full min-h-screen bg-[#0d0d0d] py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <p className="text-green-500 text-sm font-semibold mb-2">
                    # World Best Facilities Game
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-20">
                    Game Comes With Many Facilities Included <br /> In Planet
                    <span className="text-green-500">!</span>
                </h2>
            </div>

            {/* Main background image */}
            <div className="relative max-w-3xl mx-auto h-[700px]">
                <div className="relative w-full h-full rounded-[50px] overflow-hidden">
                    <Image
                        src="/background_pubg.jpg" // Replace with your background image path
                        alt="Facilities Background"
                        fill
                        className="object-cover rounded-[30px] z-0 object-[25%_0%]"
                        style={{
                            transform: "scale(1.10)", // adjust zoom
                            transformOrigin: "0% 0%"  // match your desired crop area
                        }}
                    />
                </div>
                {/* Top middle edge */}
                <div className="corner-part top-0 left-[19px]"></div>
                <div className="corner-part top-45.5 left-[419px]"></div>
                <div className="corner-part top-51 left-[34px] rotate-90"></div>
                <div className="corner-part top-96 left-[-364px] rotate-90"></div>
                <div className="corner-part top-21 left-[-35px] rotate-270"></div>
                <div className="corner-part bottom-109 left-[-419px] rotate-180"></div>

                {/* Top Right Card */}
                <div className="absolute top-0 right-0 bg-[#0d0d0d] pb-7 pl-7 text-white w-100 rounded-bl-[50px] shadow-lg ">
                    <div className="rounded-[30px] bg-gray-900 flex flex-col items-center p-5 justify-center">
                        <div className="mb-3">
                            <Image
                                src="/esports.png"
                                alt="icon"
                                width={30}
                                height={30}
                            />
                        </div>
                        <h3 className="text-lg font-bold">Esports Lounge</h3>
                        <p className="text-sm text-gray-400 mt-2 text-center">
                            Lounge areas with comfortable seating for relaxation between
                            gaming sessions.
                        </p>
                    </div>
                </div>

                {/* Bottom Center Card */}
                <div className="absolute bottom-[33%] left-0 bg-[#0d0d0d] pt-7 pr-7 pb-7 text-white w-90 rounded-r-[50px] shadow-lg hidden sm:block">
                    <div className="rounded-[30px] bg-gray-900 flex flex-col items-center p-5 justify-center">
                        <div className="mb-3">
                            <Image
                                src="/broadcast.png"
                                alt="icon"
                                width={30}
                                height={30}
                            />
                        </div>
                        <h3 className="text-lg font-bold">Broadcasting Studio</h3>
                        <p className="text-sm text-gray-400 mt-2 text-center">
                            Lounge areas with comfortable seating for relaxation between
                            gaming sessions.
                        </p>
                    </div>
                </div>

                {/* Bottom Right Card */}
                <div className="absolute bottom-0 right-0 bg-[#0d0d0d] pl-7 pt-7 text-white w-100 rounded-tl-[50px] shadow-lg">
                    <div className="rounded-[30px] bg-gray-900 flex flex-col items-center justify-center p-5">
                        <div className="mb-3">
                            <Image
                                src="/training.png"
                                alt="icon"
                                width={30}
                                height={30}
                            />
                        </div>
                        <h3 className="text-lg font-bold">Training Facilities</h3>
                        <p className="text-sm text-gray-400 mt-2 text-center">
                            Lounge areas with comfortable seating for relaxation between
                            gaming sessions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}