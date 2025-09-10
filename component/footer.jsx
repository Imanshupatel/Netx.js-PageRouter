import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] text-white py-12 px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-12">

                {/* Column 1: Brand */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="mb-4 flex justify-center lg:justify-start">
                        <Image src="/logo.png" alt="logo" width={140} height={80} />
                    </div>
                    <p className="text-gray-400 text-sm mb-4 max-w-sm mx-auto lg:mx-0">
                        Beyond esports tournaments, include a broader calendar of gaming
                        events, conferences, and conventions.
                    </p>
                    <p className="text-sm mb-2">
                        Follow <span className="text-green-400">With Us:</span>
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4 mt-2 text-lg">
                        <FaFacebookF className="hover:text-green-400 cursor-pointer" />
                        <FaTwitter className="hover:text-green-400 cursor-pointer" />
                        <FaInstagram className="hover:text-green-400 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-green-400 cursor-pointer" />
                    </div>
                </div>

                {/* ✅ Column 2 + Column 3: Centered on tablets, side-by-side */}
                <div className="flex-[1.5] flex flex-row justify-center gap-12 text-center lg:text-left">
                    {/* Column 2: Useful Links */}
                    <div className="flex-1 max-w-[150px]">
                        <h4 className="text-lg font-semibold mb-2 relative">
                            Useful Links
                            <span className="block mx-auto lg:mx-0 w-10 h-[2px] bg-gradient-to-r from-green-500 to-yellow-400 mt-1"></span>
                        </h4>
                        <ul className="text-gray-300 text-sm space-y-1 mt-2">
                            <li className="text-green-400">› Gaming</li>
                            <li>› Products</li>
                            <li>› All NFTs</li>
                            <li>› Domain Name</li>
                            <li>› Social Network</li>
                            <li>› Collectibles</li>
                        </ul>
                    </div>

                    {/* Column 3: Supports */}
                    <div className="flex-1 max-w-[150px]">
                        <h4 className="text-lg font-semibold mb-2 relative">
                            Supports
                            <span className="block mx-auto lg:mx-0 w-10 h-[2px] bg-gradient-to-r from-green-500 to-yellow-400 mt-1"></span>
                        </h4>
                        <ul className="text-gray-300 text-sm space-y-1 mt-2">
                            <li>› Help & Support</li>
                            <li>› Live Auctions</li>
                            <li>› 24/7 Supports</li>
                            <li>› Item Details</li>
                            <li>› Setting & Privacy</li>
                            <li>› Our News</li>
                        </ul>
                    </div>
                </div>

                {/* Column 4: Newsletter */}
                <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-lg font-semibold mb-2 relative">
                        Newsletter
                        <span className="block mx-auto lg:mx-0 w-10 h-[2px] bg-gradient-to-r from-green-500 to-yellow-400 mt-1"></span>
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                        Subscribe to our newsletter to get our latest update & news consenter
                    </p>
                    <div className="flex items-center bg-[#1a1a1a] rounded-full px-3 py-2 w-full max-w-xs mx-auto lg:mx-0 mb-4">
                        <input
                            type="email"
                            placeholder="Enter your mail"
                            className="bg-transparent text-sm text-white outline-none flex-grow"
                        />
                        <PiPaperPlaneRightFill className="text-green-400 text-xl cursor-pointer" />
                    </div>
                    <div className="flex justify-center lg:justify-start flex-wrap gap-3">
                        <Image
                            src="/appstore.png"
                            alt="App Store"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                        <Image
                            src="/playstore.png"
                            alt="Google Play"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom text */}
            <div className="mt-12 text-center text-gray-500 text-xs">
                © {new Date().getFullYear()} Your Company. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
