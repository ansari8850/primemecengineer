"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
    theme: "dark",
    toggleTheme: () => { },
});

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("pme-theme") as Theme | null;
        if (saved === "light" || saved === "dark") {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        } else {
            /* Check system preference */
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initial = prefersDark ? "dark" : "dark"; // default to dark
            setTheme(initial);
            document.documentElement.setAttribute("data-theme", initial);
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";
            localStorage.setItem("pme-theme", next);
            document.documentElement.setAttribute("data-theme", next);
            return next;
        });
    }, []);

    /* Prevent flash of wrong theme */
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
