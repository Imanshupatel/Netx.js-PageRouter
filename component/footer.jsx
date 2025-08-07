import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Column 1: Brand */}
                <div>
                    <div className="text-3xl font-bold text-green-500 mb-2">
                        <Image src="/logo.png" alt="logo" width={180} height={100} />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                        Beyond esports tournaments, include a broader calendar of gaming events, conferences, and conventions.
                    </p>
                    <p className="text-sm mb-2 text-white">Follow <span className="text-green-400">With Us:</span></p>
                    <div className="flex items-center space-x-3 mt-2">
                        <FaFacebookF className="text-white hover:text-green-400 cursor-pointer" />
                        <FaTwitter className="text-white hover:text-green-400 cursor-pointer" />
                        <FaInstagram className="text-white hover:text-green-400 cursor-pointer" />
                        <FaLinkedinIn className="text-white hover:text-green-400 cursor-pointer" />
                    </div>
                </div>

                {/* Column 2: Useful Link */}
                <div>
                    <h4 className="text-lg font-semibold mb-2 relative">
                        Useful Link
                        <span className="block w-10 h-[2px] bg-gradient-to-r from-green-500 to-yellow-400 mt-1"></span>
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
                <div>
                    <h4 className="text-lg font-semibold mb-2 relative">
                        Supports
                        <span className="block w-10 h-[2px] bg-gradient-to-r from-green-500 to-yellow-400 mt-1"></span>
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

                {/* Column 4: Newsletter */}
                <div>
                    <h4 className="text-lg font-semibold mb-2 relative">
                        Newsletter
                        <span className="block w-10 h-[2px] bg-gradient-to-r from-green-500 to-yellow-400 mt-1"></span>
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                        Subscribe to our newsletter to get our latest update & news consenter
                    </p>
                    <div className="flex items-center bg-[#1a1a1a] rounded-full px-4 py-2 w-full max-w-xs mb-4">
                        <input
                            type="email"
                            placeholder="Enter your mail"
                            className="bg-transparent text-sm text-white outline-none flex-grow"
                        />
                        <PiPaperPlaneRightFill className="text-green-400 text-xl cursor-pointer" />
                    </div>
                    <div className="flex space-x-3">
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
        </footer>
    );
};

export default Footer;
