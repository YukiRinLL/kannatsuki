/** @type {import('tailwindcss').Config} */

// 色を CSS 変数へ委譲 — rgb(var(--x) / <alpha-value>) 形式により
// 透明度修飾子 (text-aka-300/70 等) も主題切替時に自動追従する
const v = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  darkMode: ["class", '[data-theme="red"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        // 墨 — 背景/暗部スケール（紅主題: 黒 / 蒼主題: 白）
        sumi: {
          50: v("--sumi-50"),
          100: v("--sumi-100"),
          200: v("--sumi-200"),
          300: v("--sumi-300"),
          400: v("--sumi-400"),
          500: v("--sumi-500"),
          600: v("--sumi-600"),
          700: v("--sumi-700"),
          800: v("--sumi-800"),
          900: v("--sumi-900"),
          950: v("--sumi-950"),
        },
        // 紅 — 主アクセント（紅主題: 朱 / 蒼主題: 群青）
        aka: {
          50: v("--aka-50"),
          100: v("--aka-100"),
          200: v("--aka-200"),
          300: v("--aka-300"),
          400: v("--aka-400"),
          500: v("--aka-500"),
          600: v("--aka-600"),
          700: v("--aka-700"),
          800: v("--aka-800"),
          900: v("--aka-900"),
        },
        // 金 — 副アクセント（紅主題: 金 / 蒼主題: 鋼青）
        kin: {
          50: v("--kin-50"),
          100: v("--kin-100"),
          200: v("--kin-200"),
          300: v("--kin-300"),
          400: v("--kin-400"),
          500: v("--kin-500"),
          600: v("--kin-600"),
          700: v("--kin-700"),
          800: v("--kin-800"),
          900: v("--kin-900"),
        },
        // 和紙 — 文字色（紅主題: 乳白 / 蒼主題: 濃紺）
        washi: {
          50: v("--washi-50"),
          100: v("--washi-100"),
          200: v("--washi-200"),
          300: v("--washi-300"),
        },
        sumiure: {
          500: v("--sumiure-500"),
          600: v("--sumiure-600"),
          700: v("--sumiure-700"),
        },
      },
      fontFamily: {
        mincho: ['"Shippori Mincho"', '"Noto Serif JP"', '"Noto Serif SC"', "serif"],
        yu: ['"Yu Mincho"', '"Shippori Mincho"', '"Noto Serif JP"', "serif"],
        kaisho: ['"Zen Old Mincho"', '"Noto Serif JP"', '"Noto Serif SC"', "serif"],
        gothic: [
          '"Noto Sans JP"',
          '"Noto Sans SC"',
          '"Hiragino Kaku Gothic ProN"',
          "sans-serif",
        ],
      },
      boxShadow: {
        kin: "0 0 0 1px rgb(var(--kin-400) / 0.3), 0 8px 30px rgb(var(--sumi-950) / 0.5)",
        aka: "0 0 0 1px rgb(var(--aka-400) / 0.3), 0 8px 30px rgb(var(--aka-800) / 0.4)",
        washi:
          "0 1px 0 rgb(var(--washi-50) / 0.03) inset, 0 20px 40px -20px rgb(var(--sumi-950) / 0.8)",
      },
      animation: {
        "float-up": "floatUp 1.5s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        "sakura-fall": "sakuraFall 18s linear infinite",
        "wave-move": "waveMove 20s ease-in-out infinite",
        stroke: "stroke 1.4s ease-out forwards",
        "shoji-flicker": "shojiFlicker 6s ease-in-out infinite",
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-160px)", opacity: "0" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        sakuraFall: {
          "0%": { transform: "translate3d(0,-10vh,0) rotate(0deg)" },
          "100%": { transform: "translate3d(40px, 110vh, 0) rotate(360deg)" },
        },
        waveMove: {
          "0%,100%": { transform: "translateX(0) scaleY(1)" },
          "50%": { transform: "translateX(-30px) scaleY(1.08)" },
        },
        stroke: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        shojiFlicker: {
          "0%,100%": { opacity: "0.86" },
          "50%": { opacity: "0.94" },
        },
      },
    },
  },
  plugins: [],
};
