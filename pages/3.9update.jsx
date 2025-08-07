import Image from "next/image";
import { useRouter } from "next/router";

export default function PatchNotes() {
    const router = useRouter();
    return (
        <div className="bg-[#f3f3f3] text-[#1f1f1f] font-teko">
            {/* Banner Section */}
            <div className="relative w-full h-[300px]">
                <Image
                    src="/news.jpeg"
                    alt="BGMI Banner"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <h1 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-5xl font-extrabold text-black drop-shadow-lg">
                    NEWS
                </h1>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 py-10">
                {/* Header */}
                <div className="flex justify-between border-b-1 border-b-[#ccc] border-t-2 py-2 my-6">
                    <div>
                        <p className="text-yellow-600 font-bold">Patch Notes</p>
                        <h2 className="text-xl font-semibold">3.9 Update Patch notes</h2>
                    </div>
                    <p className="text-sm font-semibold">2025-07-16</p>
                </div>

                {/* Body */}
                <div className="space-y-6 text-[15px] leading-relaxed">
                    <p className="font-bold text-md">Roll Out for the Ultimate Showdown! 🤖</p>
                    <p>
                        <span className="text-[#000] font-bold">
                            The Transformers have invaded BGMI
                        </span>{" "}
                        in the epic <strong>v3.9 Update</strong>, and it’s pure{" "}
                        <em>robotic mayhem</em> out there! 🤯
                    </p>
                    <p>
                        Whether you're jetting around on a <strong>Cosmic Hoverboard</strong>, brawling
                        with <strong>Thermal Axes</strong>, or chilling in the new{" "}
                        <strong>3D Social Hub</strong>, this update is PACKED with next-level action.
                    </p>
                    <p>
                        Autobots, Decepticons… or just chaos-loving survivors —
                        <em> choose your side</em> and dive into the madness!
                    </p>

                    <hr className="border-[#939393]" />

                    {/* Details */}
                    <div>
                        <h3 className="font-bold text-lg">Transformers Update – Patch Notes (v3.9)</h3>
                        <p>
                            <strong>Live From:</strong> July 16, 2025
                            <br />
                            <strong>Theme Mode Maps:</strong> Erangel, Livik, Sanhok (Ranked & Unranked)
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto space-y-10">
                        {/* Transformers Take Over Section */}
                        <div>
                            <h2 className="text-xl font-extrabold border-t border-gray-500 pb-1">
                                Transformers Take Over!
                            </h2>
                            <p className="mt-2">
                                <span className="font-bold">Neon Outpost</span> is here – a cyberpunk-themed battleground featuring:
                            </p>
                            <ul className="mt-2 space-y-1 list-none">
                                <li><span className="font-bold text-black-900">Arena</span></li>
                                <li><span className="font-bold text-black-900">Black Market</span></li>
                                <li><span className="font-bold text-black-900">Energy Plant</span></li>
                                <li><span className="font-bold text-black-900">Astro Den</span> <em className="text-sm">(melee-only zone)</em></li>
                                <li><span className="font-bold text-black-900">Featured Vehicles & Skins</span> <em className="text-sm">(Theme Mode only)</em>:</li>
                                <li>Cosmic Hoverboard</li>
                                <li>Starry Exhaust</li>
                                <li>Pirate Simitar</li>
                                <li>Bonk Bonk Hammer</li>
                                <li>Just A Fish</li>
                            </ul>
                        </div >

                        {/* Gameplay Section */}
                        <div div >
                            <h2 className="text-xl font-extrabold border-t border-gray-500 pb-1">
                                Transformers Gameplay
                            </h2>
                            {/* Optimus Prime */}
                            <div className="mt-4">
                                <h3 className="font-bold">Optimus Prime</h3>
                                <p>Truck ? Robot w/ <span className="font-bold text-black-900">Thermal Axe</span></p>
                                <p><span className="font-bold">Skill:</span> Thermal Axe Attack</p>
                                <p><span className="font-bold">Ultimate:</span> Charge Slam</p>
                                <p><span className="font-bold">Unlock:</span> Collect Energon</p>
                            </div>

                            {/* Megatron */}
                            <div className="mt-4">
                                <h3 className="font-bold">Megatron</h3>
                                <p>Tank Robot w/ <span className="font-bold text-black-900">Cannon</span></p>
                                <p><span className="font-bold">Skill:</span> Cannon Attack</p>
                                <p><span className="font-bold">Ultimate:</span> Fusion Blast</p>
                                <p><span className="font-bold">Unlock:</span> Collect Energon</p>
                            </div>

                            <ul className="mt-4 space-y-1">
                                <li>
                                    <span className="font-bold text-black-900">Duel Zone:</span> When both titans meet in Erangel, a <span className="font-bold">battle zone</span> appears. Only one escapes.
                                </li>
                                <li>
                                    <span className="font-bold">Special Victory Animation:</span> 1 squadmate holding a Transformer Token triggers it!
                                </li>
                                <li>
                                    <span className="font-bold">Spacebridge Checkpoint:</span> Teleport to the <span className="font-bold text-black-900">Cosmic Summit</span> to watch Earth alongside your bot of choice.
                                </li>
                            </ul>
                        </div >

                        <div className="max-w-6xl mx-auto space-y-10">
                            {/* Classic Mode Updates */}
                            <div>
                                <h2 className="text-xl font-bold">Classic Mode Updates</h2>
                                <p><strong>Weapon:</strong> ASM Abakan (AR)</p>
                                <ul className="pl-4 list-disc">
                                    <li>→ 5.56mm | Full-auto | 2-round burst | Single shot</li>
                                    <li>→ First 2 shots = faster & more accurate</li>
                                    <li>Plane Cabin Interactions pre-match</li>
                                    <li>Sprinting is faster after using med kits</li>
                                    <li>Drifting added for bikes/motorcycles</li>
                                    <li>Skid marks during drifts</li>
                                </ul>
                                <p className="pt-2"><strong>Weapon & Attachment Tweaks:</strong></p>
                                <p>DSR price dropped (40 → 35) + now in airdrops</p>
                                <p>Inventory now shows <strong>attachment stat previews</strong></p>
                                <p>Updates: Compensator, Suppressor, Extended Barrel, Muzzle Brake, Quickdraw, Barrel Extender</p>
                            </div>

                            <hr className="border-gray-300 border" />

                            {/* Social Hub */}
                            <div>
                                <h2 className="text-xl font-bold">New 3D Social Hub <span className="italic text-sm font-normal">(Level 9+)</span></h2>
                                <p>Access from the 2D lobby or top button</p>
                                <p>Explore:</p>
                                <ul className="pl-4 list-disc">
                                    <li>Central Plaza (Magic Wand)</li>
                                    <li>Dance Stage (Lead or Group)</li>
                                    <li>Beach Fun: Seesaw, Football, Fireworks</li>
                                    <li>Merry-Go-Round & Chill Spots</li>
                                </ul>
                                <p>Exclusive Emotes:</p>
                                <ul className="pl-4 list-disc">
                                    <li>Hold Hands</li>
                                    <li>Princess Carry</li>
                                    <li>Piggyback</li>
                                </ul>
                            </div>

                            <hr className="border-[#e9e9e9] border" />

                            <div className="max-w-6xl mx-auto px-4 py-8 text-[#333] font-sans">
                                <div>
                                    <h2 className="font-bold text-lg text-[#333]">Ranked Arena Mode</h2>
                                    <p className="font-semibold text-sm text-[#333] mb-2">July 24 – Sept 2</p>
                                    <ul className="list-disc ml-6 text-sm space-y-1">
                                        <li>Maps: Warehouse, Hangar, Ruins, Town</li>
                                        <li>Ranks: Bronze → Ace</li>
                                        <li>Rewards: Tier Prizes + Top 1,000 Title</li>
                                    </ul>
                                    <p className="mt-3 font-semibold text-sm">Improvements:</p>
                                    <ul className="list-disc ml-6 text-sm space-y-1">
                                        <li>Faster team assembly</li>
                                        <li>10s 1v1 invite cooldown</li>
                                        <li>Pre-match countdown added</li>
                                    </ul>
                                </div>

                                <div className="border-t border-gray-300 pt-6 mt-6">
                                    <h2 className="font-bold text-lg text-[#333]">Home System Updates</h2>
                                    <p className="text-sm mt-2">
                                        <span className="font-bold">New Style:</span> Arcadia Haven (from July 16)
                                    </p>
                                    <p className="text-sm mt-1">
                                        <span className="font-bold">Parking Lot (S1):</span> Park 8 vehicles → earn Parking Tokens
                                    </p>
                                    <p className="text-sm mt-1">Surprise & Luxury gifts for guests</p>
                                    <p className="text-sm mt-1">Tokens convert to Home Coins after season ends</p>
                                    <p className="text-sm mt-1">
                                        <span className="font-bold">Blueprint Installments:</span> Flexible plans for up to 30 item types
                                    </p>
                                </div>

                                <div className="border-t border-gray-300 pt-6 mt-6 text-sm space-y-2">
                                    <p>
                                        <span className="font-bold">New Lobby BGM:</span> <em>Rondo</em> (from July 16)
                                    </p>
                                    <p>
                                        <span className="font-bold">Path to Glory:</span> New-user tutorial journey – 10 easy tasks
                                    </p>
                                    <p className="font-bold">
                                        Heroes ka Mahayuddh – Season 3: July 22 – Aug 18
                                    </p>
                                </div>

                                <div className="border-t border-gray-300 mt-10 pt-6 flex justify-center">
                                    <button className="px-6 py-2 bg-gray-300 hover:bg-gray-200 text-xs font-bold text-gray-800 " onClick={() => router.back()}>
                                        BACK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
}
