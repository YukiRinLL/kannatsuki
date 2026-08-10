/**
 * 图片源映射 — 优先使用 CDN，失败回退到本地
 */

export const imageSources: Record<string, { cdn: string; local: string }> = {
  "frame-1-121x121-B.png": {
    cdn: "https://free.picui.cn/free/2026/08/10/6a79704d1b417.png",
    local: "/images/frame-1-121x121-B.png",
  },
  "frame-1-290x290-B.png": {
    cdn: "https://free.picui.cn/free/2026/08/10/6a79704d1cb0f.png",
    local: "/images/frame-1-290x290-B.png",
  },
  "kannatsuki ele.png": {
    cdn: "https://free.picui.cn/free/2026/08/10/6a797052e08cf.png",
    local: "/images/kannatsuki ele.png",
  },
  "kannatsuki logo.png": {
    cdn: "https://free.picui.cn/free/2026/08/10/6a797050772d6.png",
    local: "/images/kannatsuki logo.png",
  },
  "kannatsuki word.png": {
    cdn: "https://free.picui.cn/free/2026/08/10/6a797053d45e2.png",
    local: "/images/kannatsuki word.png",
  },
  "BW.png": {
    cdn: "https://i.imgs.ovh/2026/08/10/6ae9faa34c600c934375bcb766a3824c.png",
    local: "/images/BW.png",
  },
  "RBY.png": {
    cdn: "https://i.imgs.ovh/2026/08/10/79e9e5f02def06ffe840afdcdc7b32f9.png",
    local: "/images/RBY.png",
  },
};

/**
 * 获取图片的 CDN 地址，CDN 失败时回退到本地
 * 返回初始 src + onError handler
 */
export function getImageSrc(filename: string): {
  src: string;
  onError: (e: React.SyntheticEvent<HTMLImageElement>) => void;
} {
  const entry = imageSources[filename];
  if (!entry) {
    return {
      src: filename.startsWith("/") ? filename : `/images/${filename}`,
      onError: () => {},
    };
  }

  return {
    src: entry.cdn,
    onError: (e) => {
      const img = e.currentTarget;
      if (img.src !== entry.local) {
        img.src = entry.local;
      }
    },
  };
}
