import { motion } from "framer-motion";

export default function SplashScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col items-center">
        <motion.button
          onClick={onStart}
          className="
            px-8 py-4
            font-mono text-2xl font-bold
            text-white
            bg-[#0ff]
            border-4 border-[#fff]
            rounded-lg
            shadow-[0_0_20px_#0ff,0_0_40px_#fff]
            transition-all duration-200
            hover:bg-[#fff] hover:text-[#0ff]
            hover:shadow-[0_0_40px_#0ff,0_0_80px_#fff]
            active:scale-95 active:bg-[#0ff] active:text-white
            outline-none
            focus:ring-2 focus:ring-[#0ff]
            tracking-widest
            select-none
            relative
            after:content-[''] after:absolute after:inset-0 after:border-2 after:border-[#0ff] after:rounded-lg after:pointer-events-none
            animate-pulse-glow
          "
          whileTap={{ scale: 0.95 }}
        >
          START
        </motion.button>
        <p className="mt-4 text-sm font-mono text-gray-400 animate-blink text-center">
          PRESS START TO CONTINUE
        </p>
      </div>
    </motion.div>
  );
}
