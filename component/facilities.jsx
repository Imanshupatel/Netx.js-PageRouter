import Image from "next/image";

const facilities = [
    {
        title: "Esports Lounge",
        description:
            "Lounge areas with comfortable seating for relaxation between gaming sessions.",
        icon: "/esports.png",
        position: "absolute top-0 right-0 rounded-bl-[50px] pb-7 pl-7 w-100",
    },
    {
        title: "Broadcasting Studio",
        description:
            "Lounge areas with comfortable seating for relaxation between gaming sessions.",
        icon: "/broadcast.png",
        position:
            "absolute bottom-[33%] left-0 rounded-r-[50px] pt-7 pr-7 pb-7 w-90 hidden sm:block",
    },
    {
        title: "Training Facilities",
        description:
            "Lounge areas with comfortable seating for relaxation between gaming sessions.",
        icon: "/training.png",
        position:
            "absolute bottom-0 right-0 rounded-tl-[50px] pl-7 pt-7 w-100",
    },
];

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

            {/* Main background */}
            <div className="relative max-w-3xl mx-auto h-[700px]">
                <div className="relative w-full h-full rounded-[50px] overflow-hidden">
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

                {/* Facility Cards */}
                {facilities.map((facility, index) => (
                    <div
                        key={index}
                        className={`${facility.position} bg-[#0d0d0d] text-white shadow-lg`}
                    >
                        <div className="rounded-[30px] bg-gray-900 flex flex-col items-center justify-center p-5">
                            <div className="mb-3">
                                <Image src={facility.icon} alt={facility.title} width={30} height={30} />
                            </div>
                            <h3 className="text-lg font-bold">{facility.title}</h3>
                            <p className="text-sm text-gray-400 mt-2 text-center">
                                {facility.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
