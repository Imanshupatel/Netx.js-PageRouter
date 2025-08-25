"use client";

const images = [
    { src: "/images/victory.jpg", alt: "Squad Victory", caption: "Squad Victory - Season 24" },
    { src: "/images/chicken-dinner.jpg", alt: "Epic Chicken Dinner", caption: "Epic Chicken Dinner" },
    { src: "/images/tournament.jpg", alt: "BGMI Tournament", caption: "BGMI Tournament Moments" },
    { src: "/images/sniper-short.jpg", alt: "Sniper Shot", caption: "Sniper Shot - Winner Winner!" },
    { src: "/images/team-work.jpg", alt: "Teamwork", caption: "Teamwork Makes the Dream Work" },
    { src: "/images/final-circle.avif", alt: "Final Circle", caption: "Final Circle Intensity" },
    { src: "/images/squad-celebration.jpeg", alt: "Squad Celebration", caption: "Squad Celebration After Win" },
    { src: "/images/mvp-moment.jpeg", alt: "MVP Moment", caption: "MVP Moment - Top Fragger" },
    { src: "/images/classic-map.jpg", alt: "Classic Map", caption: "Classic Map Adventure" },
    { src: "/images/vehicle-madness.jpeg", alt: "Vehicle Madness", caption: "Vehicle Madness - Fast & Furious" },
    { src: "/images/1v4-clutch.png", alt: "Clutch Play", caption: "Clutch Play - 1v4 Victory" },
    { src: "/images/trophy-room.png", alt: "Trophy Room", caption: "Trophy Room - Season Rewards" },
];

const Album = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-12 pt-35 px-4">
            <div className="max-w-[1600px] mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
                    BGMI Album
                </h1>
                <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
                    Explore our best BattleGround Mobile moments, squad victories, and tournament highlights. Share your own memories with the BGMI community!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="bg-white/10 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-white text-center font-semibold">{img.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded-full shadow transition-all duration-200"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Album;