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
    // 1. Extract EXACT center pixel coordinates of the theme toggle button
    let x = window.innerWidth / 2;
    let y = 40;

    // Check if event target has bounding rect
    if (e && e.currentTarget && (e.currentTarget as HTMLElement).getBoundingClientRect) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else if (e && e.clientX && e.clientX !== 0) {
      x = e.clientX;
      y = e.clientY;
    } else if (typeof document !== "undefined") {
      // Fallback to DOM button element position
      const btn =
        document.getElementById("theme-toggle") ||
        document.getElementById("mobile-theme-toggle");
      if (btn) {
        const rect = btn.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }
    }

    setTheme((prevTheme) => {
      const nextTheme: Theme = prevTheme === "dark" ? "light" : "dark";

      // 2. Circular Radial Ripple View Transition originating from exact button center (x, y)
      if (
        typeof document !== "undefined" &&
        "startViewTransition" in document &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
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
