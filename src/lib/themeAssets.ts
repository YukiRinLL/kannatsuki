import type { ThemeName } from "@/hooks/useTheme";
import { imageSources } from "./imageSources";

/**
 * 页面主题对应的 Logo
 *  优先使用 CDN，失败回退到本地
 */

const LOGO_FILES = {
  red: "frame-1-121x121-B.png",
  blue: "kannatsuki ele.png",
  japan: "kannatsuki logo.png",
  tools: "kannatsuki word.png",
} as const;

export function getLogo(theme: ThemeName) {
  const file = LOGO_FILES[theme];
  const entry = imageSources[file];
  return entry ? entry.cdn : `/images/${file}`;
}

export function getLogoFallback(theme: ThemeName) {
  const file = LOGO_FILES[theme];
  const entry = imageSources[file];
  return entry ? entry.local : `/images/${file}`;
}

export const logoOnError = (e: React.SyntheticEvent<HTMLImageElement>, theme: ThemeName) => {
  const img = e.currentTarget;
  const fallback = getLogoFallback(theme);
  if (img.src !== window.location.origin + fallback && img.src !== fallback) {
    img.src = fallback;
  }
};
