import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full shadow-lg shadow-blue-500/30"
        />

        <motion.h2
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-2xl font-bold tracking-widest text-gray-800"
        >
          tren<span className="text-blue-600">d</span>ify
        </motion.h2>

      </div>
    </div>
  );
}