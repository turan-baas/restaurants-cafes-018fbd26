"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
