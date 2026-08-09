/**
 * 家紋 (Kamon) — 伝統的日本の家紋SVG装飾
 *  複数の紋様バリエーションを提供
 */

export interface KamonProps {
  size?: number;
  className?: string;
  variant?: "mitsu" | "yotsume" | "kiku" | "mokko" | "taka";
}

/** 三つ巴 (Mitsudomoe) */
function Mitsudomoe({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path
        d="M50 20 C62 20 70 32 68 44 C66 38 58 34 50 34 C42 34 34 38 32 44 C30 32 38 20 50 20 Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M72 62 C78 72 74 86 62 88 C68 82 66 74 60 68 C54 62 46 60 40 62 C44 52 58 50 72 62 Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M28 62 C22 72 26 86 38 88 C32 82 34 74 40 68 C46 62 54 60 60 62 C56 52 42 50 28 62 Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

/** 四つ目 (Yotsumé) */
function Yotsume({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <rect x="30" y="30" width="40" height="40" fill="currentColor" opacity="0.15" transform="rotate(45 50 50)" />
      <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" transform="rotate(45 50 50)" />
      <rect x="40" y="40" width="20" height="20" fill="currentColor" opacity="0.1" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/** 菊 (Kiku) */
function Kiku({ size }: { size: number }) {
  const petals = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 360) / 16;
    return (
      <path
        key={i}
        d="M50 50 Q48 30 50 14 Q52 30 50 50 Z"
        fill="currentColor"
        opacity={i % 2 === 0 ? 0.25 : 0.15}
        transform={`rotate(${angle} 50 50)`}
      />
    );
  });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      {petals}
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.4" />
      <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/** 木瓜 (Mokkō) */
function Mokko({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
      <ellipse cx="50" cy="50" rx="36" ry="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="50" cy="50" rx="28" ry="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.5" />
      <circle cx="50" cy="34" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="66" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="34" cy="50" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="66" cy="50" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

/** 鷹羽 (Takanoha) */
function Taka({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      {/* 羽の左右 */}
      <path d="M50 50 Q30 25 18 38 Q28 42 35 46 Q42 48 50 50 Z" fill="currentColor" opacity="0.2" />
      <path d="M50 50 Q70 25 82 38 Q72 42 65 46 Q58 48 50 50 Z" fill="currentColor" opacity="0.2" />
      <path d="M50 50 Q32 55 22 72 Q34 66 40 60 Q46 54 50 50 Z" fill="currentColor" opacity="0.15" />
      <path d="M50 50 Q68 55 78 72 Q66 66 60 60 Q54 54 50 50 Z" fill="currentColor" opacity="0.15" />
      {/* 中央 */}
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export default function Kamon({
  size = 48,
  className = "",
  variant = "mitsu",
}: KamonProps) {
  const variants = {
    mitsu: Mitsudomoe,
    yotsume: Yotsume,
    kiku: Kiku,
    mokko: Mokko,
    taka: Taka,
  };
  const Svg = variants[variant];
  return (
    <span className={`inline-block text-kin-400 ${className}`}>
      <Svg size={size} />
    </span>
  );
}
