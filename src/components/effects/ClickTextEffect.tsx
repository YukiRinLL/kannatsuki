import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { getClickWords } from "@/data/socialLinks";

/**
 * クリックで出現する文字 — CSS 変数 --click-colors から配色を取得
 * 紅主題: 朱/金系 (硬核)  /  蒼主題: 青/白系 (普通)
 */
export default function ClickTextEffect() {
  const theme = useTheme((s) => s.theme);
  const wordIndexRef = useRef(0);

  useEffect(() => {
    const words = getClickWords(theme);

    const handleClick = (e: MouseEvent) => {
      const word = words[wordIndexRef.current % words.length];
      wordIndexRef.current += 1;

      // CSS 変数から配色を取得
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--click-colors")
        .trim();
      let colors = ["#d8ad43", "#c72422", "#e68c86", "#f3ecd9"];
      if (raw) {
        const parsed = raw
          .replace(/^["']|["']$/g, "")
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean);
        if (parsed.length) colors = parsed;
      }
      const color = colors[Math.floor(Math.random() * colors.length)];

      const span = document.createElement("span");
      span.textContent = word;
      span.className = "click-text-particle";
      span.style.left = `${e.clientX}px`;
      span.style.top = `${e.clientY - 20}px`;
      span.style.color = color;
      span.style.textShadow = `0 0 10px ${color}88, 0 0 20px ${color}55`;

      document.body.appendChild(span);
      setTimeout(() => span.remove(), 1500);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [theme]);

  return null;
}