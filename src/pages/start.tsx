import { useRouter } from "next/router";

export default function StartPage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <button
        onClick={handleStart}
        className="text-4xl md:text-6xl font-extrabold px-16 py-8 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-white border-8 border-white rounded-lg shadow-lg tracking-widest hover:scale-105 transition-transform duration-200 font-mono"
        style={{ boxShadow: "0 0 20px #fff, 0 0 40px #00f, 0 0 60px #f0f" }}
      >
        START
      </button>
      <p className="mt-8 text-lg text-white font-mono opacity-70">Presiona START para entrar al portfolio</p>
    </div>
  );
}
