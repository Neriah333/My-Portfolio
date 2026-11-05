import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Neriah333",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "YOUR_LINKEDIN_URL",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:pheobenyawanda@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-600 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Pheobe Nerea Nyawanda
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 max-w-sm">
              Software developer passionate about building practical,
              reliable and user-focused technology solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Let's Connect
            </h3>

            <p className="text-sm text-gray-400 mb-5">
              Interested in working together or discussing an opportunity?
              Feel free to reach out.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="p-3 rounded-full bg-gray-800 hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>

            <a
              href="mailto:pheobenyawanda@gmail.com"
              className="inline-block mt-5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              pheobenyawanda@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {currentYear} Pheobe Nerea Nyawanda. All rights reserved.
          </p>

          <a
            href="#about"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;