"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent | MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // On mount: read localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("karyasistem-theme") as Theme | null;
    let initial: Theme = "light";
    if (stored === "light" || stored === "dark") {
      initial = stored;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      initial = prefersDark ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", initial);
    requestAnimationFrame(() => {
      setTheme(initial);
    });
  }, []);

  const toggleTheme = useCallback((e?: React.MouseEvent | MouseEvent) => {
    setTheme((prevTheme) => {
      const nextTheme: Theme = prevTheme === "dark" ? "light" : "dark";

      // Circular Radial Ripple View Transition originating from click point
      if (
        typeof document !== "undefined" &&
        "startViewTransition" in document &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        const x = e?.clientX ?? window.innerWidth / 2;
        const y = e?.clientY ?? 40;
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        const transition = (document as any).startViewTransition(() => {
          document.documentElement.setAttribute("data-theme", nextTheme);
          localStorage.setItem("karyasistem-theme", nextTheme);
        });

        transition.ready.then(() => {
          const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ];
          document.documentElement.animate(
            {
              clipPath: clipPath,
            },
            {
              duration: 520,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        });
      } else {
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("karyasistem-theme", nextTheme);
      }

      return nextTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
