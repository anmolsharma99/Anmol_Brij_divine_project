import { useState, useEffect } from "react";
import { Palette, Check, Sun, Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type ThemeColor = "saffron" | "peacock" | "lotus" | "tulsi" | "maroon";
export type ThemeMode = "light" | "dark";

interface ThemeOption {
  id: ThemeColor;
  name: string;
  nameHi: string;
  preview: string;
  primary: string;
  secondary: string;
}

const themes: ThemeOption[] = [
  { 
    id: "saffron", 
    name: "Divine Saffron", 
    nameHi: "दिव्य केसरिया",
    preview: "bg-gradient-to-r from-orange-500 to-amber-400",
    primary: "32 95% 50%",
    secondary: "195 80% 35%"
  },
  { 
    id: "peacock", 
    name: "Peacock Blue", 
    nameHi: "मोर नीला",
    preview: "bg-gradient-to-r from-cyan-600 to-teal-400",
    primary: "195 80% 40%",
    secondary: "32 95% 50%"
  },
  { 
    id: "lotus", 
    name: "Lotus Pink", 
    nameHi: "कमल गुलाबी",
    preview: "bg-gradient-to-r from-pink-500 to-rose-400",
    primary: "340 75% 55%",
    secondary: "195 80% 35%"
  },
  { 
    id: "tulsi", 
    name: "Tulsi Green", 
    nameHi: "तुलसी हरा",
    preview: "bg-gradient-to-r from-emerald-600 to-green-400",
    primary: "150 50% 40%",
    secondary: "32 95% 50%"
  },
  { 
    id: "maroon", 
    name: "Temple Maroon", 
    nameHi: "मंदिर मरून",
    preview: "bg-gradient-to-r from-rose-800 to-red-600",
    primary: "350 70% 35%",
    secondary: "45 90% 55%"
  },
];

interface ThemeSwitcherProps {
  currentTheme: ThemeColor;
  currentMode: ThemeMode;
  onThemeChange: (theme: ThemeColor) => void;
  onModeChange: (mode: ThemeMode) => void;
}

const ThemeSwitcher = ({ currentTheme, currentMode, onThemeChange, onModeChange }: ThemeSwitcherProps) => {
  const currentThemeOption = themes.find((t) => t.id === currentTheme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-primary/10">
          <div className={`w-4 h-4 rounded-full ${currentThemeOption?.preview}`} />
          <Palette className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Choose Theme
        </div>
        <DropdownMenuSeparator />
        
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full ${theme.preview}`} />
              <div className="flex flex-col">
                <span className="font-medium">{theme.name}</span>
                <span className="text-xs text-muted-foreground">{theme.nameHi}</span>
              </div>
            </div>
            {currentTheme === theme.id && (
              <Check className="w-4 h-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
          Mode
        </div>
        
        <DropdownMenuItem
          onClick={() => onModeChange("light")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4" />
            <span>Light Mode</span>
          </div>
          {currentMode === "light" && <Check className="w-4 h-4 text-primary" />}
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={() => onModeChange("dark")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4" />
            <span>Dark Mode</span>
          </div>
          {currentMode === "dark" && <Check className="w-4 h-4 text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;

// Theme application utility
export const applyTheme = (theme: ThemeColor, mode: ThemeMode) => {
  const root = document.documentElement;
  const themeOption = themes.find((t) => t.id === theme);
  
  if (themeOption) {
    root.style.setProperty("--primary", themeOption.primary);
    root.style.setProperty("--secondary", themeOption.secondary);
  }
  
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};
