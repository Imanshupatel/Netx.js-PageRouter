import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

const blogPosts = [
    {
        title: '3.9 Update patch notes',
        date: '16 July, 2025',
        image: '/blog/3.9update.jpg',
    },
    {
        title: '3.8 Update',
        date: '16 May, 2025',
        image: '/blog/3.8update.jpg',
    },
    {
        title: '3.7 Update',
        date: '12 March, 2025',
        image: '/blog/3.7update.png',
    },
];

export default function BlogSection() {
    return (
        <section className="bg-[#0f0f0f] py-16 px-6 text-white">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-green-500 font-semibold text-sm mb-2"># Latest News</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Stay Updated With Our News <span className="text-green-500">!</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="bg-[#121212] rounded-2xl overflow-hidden shadow-md transition hover:-translate-y-1 hover:shadow-lg duration-300">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={500}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-left">
                                <div className="flex items-center text-xs text-gray-400 mb-2 space-x-4">
                                    <span className="flex items-center gap-1">
                                        <FaCalendarAlt className="text-green-500" />
                                        {post.date}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold leading-snug mb-4">
                                    {post.title}
                                </h3>
                                <a href="/3.9update" className="text-green-400 text-sm font-semibold flex items-center gap-1 hover:underline">
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
