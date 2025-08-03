import { useState } from "react";
import { User, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import pirateLogoImage from "@/assets/pirate-logo.jpg";
import playerAvatarImage from "@/assets/player-avatar.jpg";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-16 bg-wood border-b-4 border-wood-dark shadow-deep relative overflow-hidden">
      {/* Wood texture overlay */}
      <div className="absolute inset-0 wood-texture opacity-60"></div>
      
      {/* Rope border effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wood-light via-gold to-wood-light opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-wood-light via-gold to-wood-light opacity-80"></div>
      
      <div className="relative z-10 flex items-center justify-between px-4 h-full">
        {/* Left side - Menu button and logo */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-gold hover:bg-wood-dark/50 hover:text-treasure transition-smooth"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <img 
              src={pirateLogoImage} 
              alt="Pirate Logo" 
              className="h-10 w-10 rounded-full border-2 border-gold shadow-treasure"
            />
            <div className="hidden sm:block">
              <h1 className="font-pirata text-xl text-treasure drop-shadow-lg">
                Grand Strategy
              </h1>
              <p className="text-xs text-gold-dark font-cinzel">
                King of the Pirates
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Player info */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-treasure font-cinzel font-semibold">
              Captain Monkey
            </span>
            <span className="text-xs text-gold-dark">
              Bounty: ฿1,500,000,000
            </span>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 hover:bg-wood-dark/50 transition-smooth rope-border p-2"
              >
                <Avatar className="h-8 w-8 border-2 border-gold">
                  <AvatarImage src={playerAvatarImage} alt="Player Avatar" />
                  <AvatarFallback className="bg-treasure text-wood-dark">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4 text-gold" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-48 bg-card border-wood-medium shadow-deep"
            >
              <DropdownMenuItem className="font-cinzel">
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="font-cinzel">
                Crew Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="font-cinzel">
                Ship Status
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-wood-light" />
              <DropdownMenuItem className="font-cinzel text-accent">
                Set Sail (Logout)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;