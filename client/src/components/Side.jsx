import { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export default function Sidemenu() {
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { name: "Home", to: "#home" },
    { name: "Projects", to: "#projects" },
    { name: "Skills", to: "#skills" },
    { name: "Education", to: "#education" },
    { name: "Contact", to: "#contact" },
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
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pheobe Nyawanda</SidebarGroupLabel>
          <SidebarGroupLabel>Fullstack Developer</SidebarGroupLabel>
          <SidebarMenu>
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
    </Sidebar>
  );
}
