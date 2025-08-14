import { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Layout() {
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { name: "HOME", to: "#home" },
    { name: "ABOUT", to: "#about" },
    { name: "PROJECTS", to: "#projects" },
    { name: "SKILLS", to: "#skills" },
    { name: "EDUCATION", to: "#education" },
    { name: "CONTACT", to: "#contact" },
  ];

  // Detect scroll position
  useEffect(() => {
    const sections = menuItems.map((item) =>
      document.querySelector(item.to)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-[50px] flex justify-center text-center">
      <SidebarProvider>
        <Sidebar className="w-[300px] flex flex-col justify-between min-h-screen">
          <SidebarContent>
            <SidebarGroup className="items-center text-center">
              <img
                src="/images/myimage.jpg"
                alt="Pheobe Nyawanda"
                className="w-24 h-24 rounded-full mx-auto mt-20 mb-4 object-cover"
              />
              <SidebarGroupLabel className="text-3xl font-bold">
                Pheobe Nyawanda
              </SidebarGroupLabel>
              <br />
              <SidebarGroupLabel className="text-xl text-blue-500 text-center">
                Fullstack Developer
              </SidebarGroupLabel>
              <br />
              <SidebarMenu className="flex justify-center text-center">
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      className={
                        activeSection.toLowerCase() === item.name.toLowerCase()
                          ? "bg-blue-500 text-white"
                          : ""
                      }
                    >
                      <a href={item.to}>{item.name}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          {/* Footer */}
          <div className="p-4 flex justify-center gap-6 border-t">
            <a
              href="https://github.com/Neriah333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pheobenyawanda59263630a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/254794040980" // Replace with your phone
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}
