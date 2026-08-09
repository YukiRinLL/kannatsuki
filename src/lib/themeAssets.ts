import type { ThemeName } from "@/hooks/useTheme";

/**
 * 主題別ロゴマッピング
 *  紅墨金 (red) → 硬核玩法ロゴ (frame-1)
 *  蒼白 (blue) → 普通玩法ロゴ (kanazuki)
 */

const LOGOS = {
  red: "/images/frame-1-121x121-B.png",
  blue: "/images/kanazuki word.png",
} as const;

export function getLogo(theme: ThemeName) {
  return LOGOS[theme];
}
