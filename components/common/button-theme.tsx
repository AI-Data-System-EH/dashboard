"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkModeButton() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <button
            className="
                    z-auto rounded-full p-1.5
                    text-matte-black dark:text-off-white
                    text-opacity-50 dark:text-opacity-50
                    hover:text-opacity-100
                    hover:text-indigo-500 dark:hover:text-yellow-500
                    "
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        >
            {currentTheme === "dark" ? <Sun /> : <Moon />}
        </button>
    );
}
