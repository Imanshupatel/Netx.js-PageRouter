import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const blogPosts = [
    {
        title: "3.9 Update patch notes",
        date: "16 July, 2025",
        image: "/blog/3.9update.jpg",
        link: "/3.9update",
    },
    {
        title: "3.8 Update",
        date: "16 May, 2025",
        image: "/blog/3.8update.jpg",
        link: "/3.8update",
    },
    {
        title: "3.7 Update",
        date: "12 March, 2025",
        image: "/blog/3.7update.png",
        link: "/3.7update",
    },
];

export default function BlogSection() {
    return (
        <section className="bg-[#0f0f0f] py-10 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <p className="text-green-500 font-semibold text-xs sm:text-sm mb-2">
                    # Latest News
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 leading-snug">
                    Stay Updated With Our News{" "}
                    <span className="text-green-500">!</span>
                </h2>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-[#121212] rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-lg transition duration-300"
                        >
                            {/* Blog Image */}
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={500}
                                height={300}
                                className="w-full h-48 sm:h-56 md:h-64 object-cover"
                            />

                            {/* Blog Content */}
                            <div className="p-4 sm:p-6 text-left">
                                <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-2 gap-2">
                                    <FaCalendarAlt className="text-green-500 shrink-0" />
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-snug mb-3 line-clamp-2">
                                    {post.title}
                                </h3>
                                <a
                                    href={post.link}
                                    className="text-green-400 text-xs sm:text-sm font-semibold flex items-center gap-1 hover:underline"
                                >
                                    READ MORE <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
