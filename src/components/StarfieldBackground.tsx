import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLocation } from "react-router-dom";
import { imageSources } from "@/lib/imageSources";

/**
 * 和紙風背景 — ユーザーが提供した16:9背景画像を使用
 *  青/白 → BW.png (青海波×竹×窓格子)
 *  紅/黒/金 → RBY.png (松×雲×扇子×青海波)
 *  重ね掛け:
 *   ① 背景画像（cover + 暗め/明めオーバーレイで読みやすさ確保）
 *   ② 舞う花びら — 桜/雪
 *   ③ 金/青の塵
 */
export default function StarfieldBackground() {
  const theme = useTheme((s) => s.theme);
  const location = useLocation();
  const isRed = theme === "red";
  const isJapan = theme === "japan";
  const isTools = theme === "tools";
  const isPlainPage = location.pathname === "/members" || location.pathname === "/tools";
  const isHistoryPage = location.pathname === "/history";
  const bgFile = isRed ? "RBY.png" : "BW.png";
  const [bgSrc, setBgSrc] = useState(imageSources[bgFile]?.cdn || `/images/${bgFile}`);
  const bgFallback = imageSources[bgFile]?.local || `/images/${bgFile}`;

  // 主題切替時に背景图片を同步
  useEffect(() => {
    setBgSrc(imageSources[bgFile]?.cdn || `/images/${bgFile}`);
  }, [bgFile]);

  const petals = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * -18,
      duration: 14 + Math.random() * 14,
      size: 8 + Math.random() * 14,
      opacity: 0.22 + Math.random() * 0.35,
    }));
  }, []);

  const dustParticles = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => {
      const x = (i * 53 + 97) % 1600;
      const y = (i * 97 + 31) % 900;
      const r = 0.6 + ((i * 3) % 10) / 10;
      const op = 0.15 + ((i * 7) % 55) / 100;
      return { x, y, r, op, idx: i };
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {!isPlainPage && (
        <div
          key={theme}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bg-fade-in"
          style={{ backgroundImage: `url(${bgSrc})` }}
          onError={() => {
            if (bgSrc !== bgFallback) setBgSrc(bgFallback);
          }}
        />
      )}
      {/* 読みやすさ用オーバーレイ
          青/白 → 強めの白い半透明マスクで全体を明るく
          紅/黒/金 → 強めの黒い半透明マスクでコントラスト確保 */}
      <div
        className="absolute inset-0"
        style={{
          background: isPlainPage
            ? "var(--bg-page)"
            : isRed
            ? "linear-gradient(180deg, rgb(var(--sumi-950) / 0.78) 0%, rgb(var(--sumi-950) / 0.58) 25%, rgb(var(--sumi-950) / 0.62) 55%, rgb(var(--sumi-950) / 0.82) 100%)"
            : isJapan || isTools
            ? "linear-gradient(180deg, rgb(var(--sumi-900) / 0.68) 0%, rgb(var(--sumi-900) / 0.54) 35%, rgb(var(--sumi-900) / 0.72) 100%)"
            : "linear-gradient(180deg, rgb(255 255 255 / 0.82) 0%, rgb(255 255 255 / 0.70) 25%, rgb(255 255 255 / 0.72) 55%, rgb(255 255 255 / 0.88) 100%)",
        }}
      />

      {isPlainPage && (
        <>
          <div className="absolute inset-0 opacity-45 bg-wagara-lines" />
          <div className="absolute inset-0 opacity-30 bg-wagara-seigaiha" />
        </>
      )}

      {/* 工具集与成员簿使用纹路；历史页保持纯净的蓝白背景 */}
      {!isHistoryPage && petals.map((p) => (
        <span
          key={p.id}
          className="absolute animate-sakura-fall"
          style={{
            left: `${p.left}%`,
            top: "-10vh",
            width: `${p.size}px`,
            height: `${p.size * 0.85}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            filter: "blur(0.2px)",
          }}
        >
          <svg viewBox="0 0 32 28" width="100%" height="100%">
            <defs>
              <radialGradient id={`petal-${p.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: "rgb(var(--aka-100))", stopOpacity: 0.95 }} />
                <stop offset="100%" style={{ stopColor: "rgb(var(--aka-400))", stopOpacity: 0.8 }} />
              </radialGradient>
            </defs>
            <path
              d="M16 2 C19 6 28 6 28 16 C28 26 19 28 16 28 C13 28 4 26 4 16 C4 6 13 6 16 2 Z"
              fill={`url(#petal-${p.id})`}
            />
            <circle cx="16" cy="15" r="1.2" fill="rgb(var(--washi-50))" opacity="0.4" />
          </svg>
        </span>
      ))}

      {/* ③ 金/青の塵 */}
      {!isHistoryPage && <svg
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1600 900"
      >
        {dustParticles.map((p) => (
          <circle
            key={p.idx}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill={p.idx % 3 === 0 ? "rgb(var(--kin-200))" : p.idx % 3 === 1 ? "rgb(var(--kin-400))" : "rgb(var(--aka-300))"}
            opacity={p.op}
          />
        ))}
      </svg>}
    </div>
  );
}
