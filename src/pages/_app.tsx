import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          --font-inter: ${inter.style.fontFamily};
          --font-heading: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <div className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
