import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  activeSection: string;
  name: string;
}

const Header = ({ activeSection, name }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b-4 border-black p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#home" className="inline-block">
          <span className="text-2xl font-bold">{name}</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {[
            { id: "home", label: "Inicio" },
            { id: "about", label: "Sobre Mí" },
            { id: "portfolio", label: "Proyectos" },
            { id: "contact", label: "Contacto" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover:underline transition-colors duration-300 ${
                activeSection === item.id ? "font-bold text-blue-500" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-t-2 border-black">
          <nav id="mobile-menu" className="flex flex-col space-y-2 p-4">
            {[
              { id: "home", label: "Inicio" },
              { id: "about", label: "Sobre Mí" },
              { id: "portfolio", label: "Proyectos" },
              { id: "contact", label: "Contacto" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`hover:underline ${
                  activeSection === item.id ? "font-bold text-blue-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
