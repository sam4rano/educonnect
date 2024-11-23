"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center mx-4">
      {theme === "light" ? (
        <Moon
          className="cursor-pointer"
          fill="white" // Modified color to black
          size={25}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <Sun
          size={25}
          fill="white"
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        />
        
      )}
     
    </div>
  );
};
