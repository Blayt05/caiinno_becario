"use client";

import { useEffect } from "react";

// Publishes the navbar and footer heights as CSS variables so the first and
// last full-screen sections can share the viewport with them (see globals.css).
export default function LayoutMetrics() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".snap-nav");
    const footer = document.querySelector<HTMLElement>("footer");

    const update = () => {
      const style = document.documentElement.style;
      if (nav) style.setProperty("--nav-h", `${nav.offsetHeight}px`);
      if (footer) style.setProperty("--footer-h", `${footer.offsetHeight}px`);
    };

    update();
    const observer = new ResizeObserver(update);
    if (nav) observer.observe(nav);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return null;
}
