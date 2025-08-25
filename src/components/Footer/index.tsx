import { Github, Linkedin } from "lucide-react";

interface FooterProps {
  name: string;
  socialLinks: { name: string; url: string }[];
}

const Footer = ({ name, socialLinks }: FooterProps) => {
  const IconFor = (n: string) => {
    const key = n.toLowerCase();
    if (key.includes("git")) return <Github className="w-6 h-6" aria-hidden="true" />;
    if (key.includes("link")) return <Linkedin className="w-6 h-6" aria-hidden="true" />;
    return null;
  };

  return (
    <footer className="py-10 border-t-4 border-black bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-sm md:text-base text-gray-700">
            Diseñado y construido por <span className="font-semibold">{name ?? "Marcos Giannini"}</span>
          </p>
          <div className="flex items-center gap-4">
            {socialLinks?.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                {IconFor(link.name) ?? <span className="text-sm font-semibold">{link.name}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
