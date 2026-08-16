"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // Select all sections and elements with reveal-on-scroll class
    const elements = document.querySelectorAll(".reveal-on-scroll, section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("reveal-on-scroll")) {
        el.classList.add("reveal-on-scroll");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
