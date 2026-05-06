import Link from "next/link";

import { portfolioData } from "@/data/portfolioData";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">{portfolioData.notFound.title}</h1>
        <p className="text-gray-600 mb-8">{portfolioData.notFound.description}</p>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white font-bold px-8 py-4 rounded-full border-4 border-black shadow hover:bg-blue-600 transition-colors duration-300"
        >
          {portfolioData.notFound.backHome}
        </Link>
      </div>
    </main>
  );
}
