import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, GithubIcon, HomeIcon, InstagramIcon, Linkedin, LinkIcon, Menu, TwitterIcon, X } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./ui/mode-toggle";

const links = [
  { name: "About me", href: "#About-me" },
  { name: "Playground", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 bg-background m-0 w-full">
      <div className="px-20 py-3 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-between space-x-10">
            <a href="#" className="text-xl font-semibold">Rydhlnst.</a>
            
            <div className="p-2.5 rounded-xl border flex flex-row space-x-4 items-center">
              <HomeIcon className="w-6 h-6"/>
              <Separator orientation="vertical"/>
              <div className="flex flex-row space-x-4">
                <InstagramIcon/>
                <Linkedin/>
              </div>
            </div>
            {/* Desktop Links */}
            {/* <div className="hidden md:flex space-x-6">
            {links.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-normal hover:underline">
                {link.name}
                </a>
            ))}
            </div> */}

        </div>
        
        <div className="flex items-center justify-center">
            <div className="hidden md:flex md:flex-row gap-10 items-center justify-center">
                <ModeToggle/>
                <HoverCard>
                    <HoverCardTrigger className="relative inline-flex items-center">
                        <LinkIcon />
                    </HoverCardTrigger>
                    <HoverCardContent 
                        className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg z-50"
                        side="bottom"
                        align="end"
                        avoidCollisions={false}
                    >
                        <Button className="w-full flex flex-row justify-start space-x-3" variant={"ghost"}>
                        <InstagramIcon />
                        <p>@rydhlnst</p>
                        </Button>
                        <Button className="w-full flex flex-row justify-start space-x-3" variant={"ghost"}>
                        <TwitterIcon />
                        <p>@rydhlnst</p>
                        </Button>
                        <Button className="w-full flex flex-row justify-start space-x-3" variant={"ghost"}>
                        <GithubIcon />
                        <p>@rydhlnst</p>
                        </Button>
                    </HoverCardContent>
                    </HoverCard>

            </div>
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-17 pb-3 space-y-2 bg-background">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="block text-sm font-medium">
                <div className="w-full px-3 py-1 rounded-full hover:bg-gray-50">
                    {link.name}
                </div>
            </a>
          ))}
          <div className="w-full flex-row py-5 flex px-3 justify-start gap-3">
            <InstagramIcon/>
            <TwitterIcon/>
            <Github/>
          </div>
        </div>
      )}
    </nav>
  );
}
