interface FooterProps {
  contactInfo: {
  phone?: string;
    email: string;
  };
  name: string;
}

const Footer = ({ contactInfo, name }: FooterProps) => {
  return (
    <footer className="py-8 border-t-4 border-black bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4 md:mb-2">
          {name ?? "John Doe"}
        </h1>
        <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:justify-between md:items-center md:space-y-0 md:space-x-6">
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center">
            {contactInfo?.phone && (
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300 md:mr-6"
              >
                {contactInfo.phone}
              </a>
            )}
            <a
              href={`mailto:${contactInfo?.email}`}
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              {contactInfo?.email}
            </a>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center text-middle md:text-left">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300 md:mr-6"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
