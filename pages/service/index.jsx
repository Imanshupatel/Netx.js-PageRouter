'use client';
import Footer from "@/component/footer";
import Image from "next/image";

// Remove export const metadata (not supported in client components)

const team = [
  {
    name: "Imanshu Patel",
    role: "Frontend Developer",
    skills: "React & Node.js",
    img: "/imanshu.jpg",
    initials: "IP",
    color: "bg-blue-200",
    text: "text-blue-600",
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    skills: "Node.js & Python",
    initials: "MJ",
    color: "bg-purple-200",
    text: "text-purple-600",
  },
  {
    name: "Emily Wilson",
    role: "Product Manager",
    skills: "Strategy & Analytics",
    initials: "EW",
    color: "bg-pink-200",
    text: "text-pink-600",
  },
  {
    name: "David Lee",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    initials: "DL",
    color: "bg-orange-200",
    text: "text-orange-600",
  },
  {
    name: "Anna Brown",
    role: "QA Engineer",
    skills: "Testing & Automation",
    initials: "AB",
    color: "bg-teal-200",
    text: "text-teal-600",
  },
  {
    name: "Robin williams",
    role: "UI/UX Designer",
    skills: "Figma & Adobe XD",
    initials: "RS",
    color: "bg-green-200",
    text: "text-green-600",
  },
];

const Service = () => {
  return (
    <>
      <section className="font-roboto min-h-screen bg-black py-16 px-4">

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <div className="absolute inset-0 rounded-3xl blur-2xl opacity-40 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 animate-pulse z-0"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 drop-shadow-lg mb-4">
              Our Services & Team
            </h1>
            <p className="text-lg text-gray-50 mb-2">
              Meet the passionate team behind BattleGround Mobile and discover the services that power your gaming experience.
            </p>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 rounded-full my-4 animate-pulse"></div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="group bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-blue-400 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600">
            <span className="text-5xl mb-4 animate-bounce">⚡</span>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Fast APK Downloads</h2>
            <p className="text-gray-600 text-center mb-2">Get the latest BGMI APK instantly and securely, always up-to-date for your device.</p>
            <span className="text-xs text-blue-400 group-hover:text-blue-600 transition">Lightning Fast Delivery</span>
          </div>
          <div className="group bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-pink-400 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-pink-600">
            <span className="text-5xl mb-4 animate-bounce">📊</span>
            <h2 className="text-2xl font-bold mb-2 text-pink-700">Player Stats & Data</h2>
            <p className="text-gray-600 text-center mb-2">Track your progress, view leaderboards, and analyze your gameplay with beautiful data visualizations.</p>
            <span className="text-xs text-pink-400 group-hover:text-pink-600 transition">Insightful Analytics</span>
          </div>
          <div className="group bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-yellow-400 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-600">
            <span className="text-5xl mb-4 animate-bounce">🎮</span>
            <h2 className="text-2xl font-bold mb-2 text-yellow-600">Modern UI/UX</h2>
            <p className="text-gray-600 text-center mb-2">Enjoy a sleek, responsive design built with React & Next.js, featuring a dynamic video background.</p>
            <span className="text-xs text-yellow-400 group-hover:text-yellow-600 transition">Cutting-edge Experience</span>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 drop-shadow-lg mb-4 text-center mb-12 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Other Team Members */}
            {team.map((member) => (
              <div
                key={member.name}
                className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-b-4 ${member.color}`}
              >
                <div className={`w-28 h-28 ${member.color} rounded-full mb-4 flex items-center justify-center border-4 border-white shadow`}>
                  <span className={`text-3xl font-bold ${member.text}`}>{member.initials}</span>
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 text-center mt-1">
                  {member.skills}
                </p>
                {/* <div className="flex gap-3 mt-3">
                {member.socials.map((social, idx) => (
                  <a key={idx} href={social.url} className="text-gray-400 hover:text-gray-700 text-xl">{social.icon}</a>
                ))}
              </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-2xl mx-auto mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-2xl py-8 px-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Ready to level up your gaming experience?</h3>
              <p className="text-gray-600 mb-4">Join BattleGround Mobile today and be part of our growing community!</p>
              <a href="/register" className="inline-block bg-blue-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-full shadow transition-all duration-200">Get Started</a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Service;