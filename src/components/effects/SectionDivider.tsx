import Kamon from "./Kamon";
import type { KamonProps } from "./Kamon";

/**
 * 和柄セクション区切り (Wagara Section Divider)
 *  伝統的日本文様による装飾的な区切り線
 */

interface SectionDividerProps {
  variant?: "wave" | "kamon" | "mitsu" | "fan";
  kamonVariant?: KamonProps["variant"];
  className?: string;
}

/** 青海波の波型区切り */
function WaveDivider() {
  return (
    <div className="wagara-divider-wave">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="div-wave-g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="rgb(var(--kin-400) / 0.3)" />
            <stop offset="50%" stopColor="rgb(var(--kin-400) / 0.5)" />
            <stop offset="80%" stopColor="rgb(var(--kin-400) / 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M0 20 Q75 5 150 20 T300 20 T450 20 T600 20 T750 20 T900 20 T1050 20 T1200 20"
          fill="none"
          stroke="url(#div-wave-g)"
          strokeWidth="1.5"
        />
        <path
          d="M0 24 Q75 12 150 24 T300 24 T450 24 T600 24 T750 24 T900 24 T1050 24 T1200 24"
          fill="none"
          stroke="url(#div-wave-g)"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* 中央の青海波円 */}
        <circle cx="600" cy="20" r="6" fill="none" stroke="rgb(var(--aka-400) / 0.4)" strokeWidth="1" />
        <circle cx="600" cy="20" r="3" fill="rgb(var(--aka-400) / 0.3)" />
      </svg>
    </div>
  );
}

/** 家紋を配した区切り */
function KamonDivider({ kamonVariant }: { kamonVariant: KamonProps["variant"] }) {
  return (
    <div className="wagara-divider-kamon">
      <Kamon size={40} variant={kamonVariant} className="opacity-60" />
    </div>
  );
}

/** 三つ巴ドット区切り */
function MitsuDivider() {
  return (
    <div className="wagara-divider-mitsu">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

/** 扇子型区切り */
function FanDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-6 opacity-50">
      {/* 左の扇子線 */}
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="block w-px bg-gradient-to-b from-transparent via-kin-400/40 to-transparent"
            style={{ height: `${10 + i * 3}px`, transform: `rotate(${-20 + i * 10}deg)`, transformOrigin: "bottom", marginRight: "-2px" }}
          />
        ))}
      </div>
      {/* 中央線 */}
      <div className="h-px w-16 bg-gradient-to-r from-kin-400/30 via-aka-400/40 to-kin-400/30" />
      {/* 右の扇子線 */}
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="block w-px bg-gradient-to-b from-transparent via-kin-400/40 to-transparent"
            style={{ height: `${10 + (4 - i) * 3}px`, transform: `rotate(${-20 + i * 10}deg)`, transformOrigin: "bottom", marginRight: "-2px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default function SectionDivider({
  variant = "wave",
  kamonVariant = "mitsu",
  className = "",
}: SectionDividerProps) {
  const dividers = {
    wave: WaveDivider,
    kamon: () => <KamonDivider kamonVariant={kamonVariant} />,
    mitsu: MitsuDivider,
    fan: FanDivider,
  };
  const Divider = dividers[variant];
  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <Divider />
    </div>
  );
}
