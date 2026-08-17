"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all sections and .reveal-on-scroll
 * elements, adding .is-visible when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll, section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("reveal-on-scroll")) {
        el.classList.add("reveal-on-scroll");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
