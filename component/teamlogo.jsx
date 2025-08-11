import Image from "next/image";

const teams = [
    { name: "GodLike", src: "/team-logo/GodLike.png" },
    { name: "Team Soul", src: "/team-logo/soul.png" },
    { name: "MADx", src: "/team-logo/MADX.png" },
    { name: "Revenant Esports", src: "/team-logo/revenant.png" },
    { name: "Global Esports", src: "/team-logo/global.png" },
    { name: "Orangutan Gaming", src: "/team-logo/orangutan.png" },
    { name: "Entity Gaming", src: "/team-logo/entity.png" },
    { name: "TSM-Entity", src: "/team-logo/tsm-logo.png" },
    { name: "Orange Rock", src: "/team-logo/Orange_Rock.png" },
    { name: "Team XSpark", src: "/team-logo/XSpark.png" },
    { name: "Gladiator", src: "/team-logo/gladiator.png" },
    { name: "Blind Esports", src: "/team-logo/blind.png" },
    { name: "8Bit", src: "/team-logo/8-bit.png" },
];

export default function TeamLogos() {
    const scrollTeams = [...teams, ...teams]; // duplicate for smooth loop

    return (
        <section className="bg-[#0f0f0f] overflow-hidden py-6">
            <div className="flex whitespace-nowrap animate-marquee">
                {scrollTeams.map((team, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center mx-6"
                    >
                        <Image
                            src={team.src}
                            alt={team.name}
                            width={120}
                            height={120}
                            className="transition-transform min-h-[100px] min-w-[100px] hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
