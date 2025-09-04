import Image from "next/image";

const facilities = [
    {
        title: "Esports Lounge",
        description:
            "Lounge areas with comfortable seating for relaxation between gaming sessions.",
        icon: "/esports.png",
        position: "absolute top-0 right-0 rounded-bl-[50px] pb-7 pl-7 w-72 hidden md:block",
    },
    {
        title: "Broadcasting Studio",
        description:
            "Professional studio setups for live streaming and broadcasting tournaments.",
        icon: "/broadcast.png",
        position:
            "absolute bottom-[33%] left-0 rounded-r-[50px] pt-7 pr-7 pb-7 w-72 hidden lg:block",
    },
    {
        title: "Training Facilities",
        description:
            "Dedicated training rooms to improve gaming skills and strategies.",
        icon: "/training.png",
        position: "absolute bottom-0 right-0 rounded-tl-[50px] pl-7 pt-7 w-72 hidden md:block",
    },
];

export default function Facilities() {
    return (
        <section className="relative w-full min-h-screen bg-[#0d0d0d] py-16 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <p className="text-green-500 text-xs sm:text-sm font-semibold mb-2">
                    # World Best Facilities Game
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 sm:mb-20">
                    Game Comes With Many Facilities Included <br /> In Planet
                    <span className="text-green-500">!</span>
                </h2>
            </div>

            {/* Main background with floating cards (desktop only) */}
            <div className="relative max-w-3xl mx-auto h-[500px] sm:h-[600px] md:h-[700px] hidden sm:block">
                <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                    <Image
                        src="/background_pubg.jpg"
                        alt="Facilities Background"
                        fill
                        className="object-cover rounded-[30px] z-0 object-[25%_0%]"
                        style={{
                            transform: "scale(1.10)",
                            transformOrigin: "0% 0%",
                        }}
                    />
                </div>

                {/* Facility Cards (desktop floating) */}
                {facilities.map((facility, index) => (
                    <div
                        key={index}
                        className={`${facility.position} bg-[#0d0d0d] text-white shadow-lg`}
                    >
                        <div className="rounded-[30px] bg-gray-900 flex flex-col items-center justify-center p-5">
                            <div className="mb-3">
                                <Image
                                    src={facility.icon}
                                    alt={facility.title}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <h3 className="text-base sm:text-lg font-bold">{facility.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-400 mt-2 text-center">
                                {facility.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Facility cards stacked (mobile/tablet) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10 sm:hidden">
                {facilities.map((facility, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
                    >
                        <Image
                            src={facility.icon}
                            alt={facility.title}
                            width={40}
                            height={40}
                            className="mb-3"
                        />
                        <h3 className="text-lg font-bold">{facility.title}</h3>
                        <p className="text-sm text-gray-400 mt-2">{facility.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
