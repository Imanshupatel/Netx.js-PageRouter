// components/Loading.js
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
            {/* Logo or Icon */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-4"
            >
                <img src="/logo.png" alt="Logo" className="w-20 h-20" />
            </motion.div>

            {/* Loading Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg tracking-wider"
            >
                Loading...
            </motion.p>

            {/* Animated Bar */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="h-1 bg-orange-500 mt-4"
            ></motion.div>
        </div>
    );
}
