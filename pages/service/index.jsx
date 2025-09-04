'use client';
import Footer from "@/component/footer";

const team = [
  {
    name: "Imanshu Patel",
    role: "Frontend Developer",
    skills: "React & Node.js",
    initials: "IP",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Janish Patel",
    role: "Backend Developer",
    skills: "Node.js & Python",
    initials: "JP",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Emily Wilson",
    role: "Product Manager",
    skills: "Strategy & Analytics",
    initials: "EW",
    color: "from-pink-400 to-red-500",
  },
  {
    name: "David Lee",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    initials: "DL",
    color: "from-orange-400 to-yellow-500",
  },
  {
    name: "Anna Brown",
    role: "QA Engineer",
    skills: "Testing & Automation",
    initials: "AB",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "Robin Williams",
    role: "UI/UX Designer",
    skills: "Figma & Adobe XD",
    initials: "RW",
    color: "from-green-400 to-emerald-500",
  },
];

const Service = () => {
  return (
    <>
      <section className="font-roboto min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-12">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 animate-text leading-tight">
            Our Services & Team
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mt-4 sm:mt-6">
            Meet the innovators behind BattleGround Mobile and the services that fuel your gameplay.
          </p>
        </div>

        {/* Services */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20 sm:mb-28">
          {[
            {
              icon: "⚡",
              title: "Fast APK Downloads",
              desc: "Get the latest BGMI APK instantly and securely, optimized for your device.",
              color: "from-blue-500 to-indigo-500",
            },
            {
              icon: "📊",
              title: "Player Stats & Data",
              desc: "Track progress, view leaderboards, and analyze gameplay with insights.",
              color: "from-pink-500 to-red-500",
            },
            {
              icon: "🎮",
              title: "Modern UI/UX",
              desc: "Enjoy sleek, responsive design built with React & Next.js for the best experience.",
              color: "from-yellow-400 to-orange-500",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="relative group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 sm:p-8 shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${service.color} text-white text-2xl sm:text-3xl mb-6 shadow-md`}
              >
                {service.icon}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{service.title}</h2>
              <p className="text-gray-400 text-sm sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 mb-10 sm:mb-14">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-10">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r ${member.color} mb-5 sm:mb-6 shadow-md`}
                >
                  {member.initials}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white text-center">{member.name}</h3>
                <p className="text-gray-300 text-center text-sm mt-2">{member.role}</p>
                <p className="text-gray-400 text-xs sm:text-sm text-center mt-1">{member.skills}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-20 sm:mt-28 text-center">
          <div className="bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 p-[2px] rounded-2xl shadow-lg">
            <div className="bg-black rounded-2xl py-8 sm:py-10 px-4 sm:px-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                Ready to level up your gaming experience?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Join BattleGround Mobile today and be part of the future.
              </p>
              <a
                href="https://apkdownload.battlegroundsmobileindia.com/bgmi_3.9.0_homepage_DwqLVenf.apk"
                className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 hover:from-green-500 hover:to-yellow-500 text-white font-semibold text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service;
