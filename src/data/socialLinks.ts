import type { ThemeName } from "@/hooks/useTheme";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  hoverColor: string;
}

const casualSocialLinks: SocialLink[] = [
  {
    name: "Lodestone",
    url: "https://jp.finalfantasyxiv.com/lodestone/freecompany/9227453424017171422/",
    icon: "scroll",
    color: "#6592e6",
    hoverColor: "#7ca1e9",
  },
  {
    name: "Discord",
    url: "https://kaihei.co/Pz0Q4r",
    icon: "message-circle",
    color: "#5865F2",
    hoverColor: "#7a83f3",
  },
  {
    name: "GitHub",
    url: "https://github.com/YukiRinLL/FFXIV_Phantoms_MainPage",
    icon: "github",
    color: "#a0a0b8",
    hoverColor: "#c5c5d8",
  },
];

const hardcoreSocialLinks: SocialLink[] = [
  {
    name: "Lodestone",
    url: "https://jp.finalfantasyxiv.com/lodestone/freecompany/9227453424017171422/",
    icon: "scroll",
    color: "#c72422",
    hoverColor: "#e68c86",
  },
  {
    name: "Discord",
    url: "https://kaihei.co/Pz0Q4r",
    icon: "message-circle",
    color: "#d8ad43",
    hoverColor: "#ecd99e",
  },
  {
    name: "Raiding Hub",
    url: "https://kaihei.co/Pz0Q4r",
    icon: "github",
    color: "#b01a1d",
    hoverColor: "#d64f49",
  },
];

export function getSocialLinks(theme: ThemeName): SocialLink[] {
  return theme === "red" ? hardcoreSocialLinks : casualSocialLinks;
}

export interface AboutCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const casualAboutCards: AboutCard[] = [
  {
    title: "共同运营",
    subtitle: "みんなで運営する",
    description:
      "组内讨论氛围良好，有许多热心的艾欧泽亚冒险者。讨论话题多为FF14游戏玩法机制、剧情、世界观设定等内容。部队房装潢设施齐全，公会相关设定精细，部队箱各类宠物坐骑消耗品免费供给！可以一起体验各类副本攻略、宝物探索、出海垂钓等团队活动。萌新大佬都可以开诚布公，共同打造良好环境。",
    icon: "users",
  },
  {
    title: "一起 Happy",
    subtitle: "楽しさを共有する",
    description:
      "找朋友们一起玩！在FC聊天频道中问问「玩点什么？」，我当然会邀请你！FC不限制视频拍摄、直播、社交平台上的截屏投稿等共享手段，请自由享受。在艾欧泽亚的每一天，都值得被记录与分享。",
    icon: "heart",
  },
  {
    title: "平和友善 相互尊重",
    subtitle: "強要しない",
    description:
      "玩游戏开心第一！在MMORPG里也请保持自己的独立性，互相尊重和换位思考，不要将自己的想法强加对方。请重视对方的想法，然后试着请求或者帮忙。在不强迫的游戏中开心同乐才是最好的。",
    icon: "shield",
  },
];

const hardcoreAboutCards: AboutCard[] = [
  {
    title: "极限攻略",
    subtitle: "極限への挑戦",
    description:
      "追求最高难度的副本攻略！从高难度内容到绝境之战，我们的团队专注于攻克每一个挑战。通过精确的战术配合和不懈的练习，我们以首杀和高难度通关为目标。如果你渴望突破自我，这里是你的战场。",
    icon: "shield",
  },
  {
    title: "精密协作",
    subtitle: "連携の極致",
    description:
      "每一次副本都是一场精密的交响乐。我们强调沟通、配合和执行力，通过严格的团队训练和战术讨论，将个人能力转化为团队力量。零式、绝本、极本——每一个难关都是我们的舞台。",
    icon: "users",
  },
  {
    title: "追求卓越",
    subtitle: "究極の境地",
    description:
      "硬核不仅是目标，更是一种态度。我们追求DPS极限、完美循环、零失误通关。在终焉的旗帜下，没有不可能。如果你也渴望将FF14玩到极致，欢迎加入我们的征途。",
    icon: "heart",
  },
];

export function getAboutCards(theme: ThemeName): AboutCard[] {
  return theme === "red" ? hardcoreAboutCards : casualAboutCards;
}

const casualClickWords = [
  "Astral",
  "Umbral",
  "Arcanum",
  "Polyglot",
  "Transcendent",
  "Material",
  "Original",
  "Xenogeneic",
  "Etheral",
  "Sin",
  "Missionary",
  "Requiem",
  "Clement",
  "Cristal",
  "Zodiac",
];

const hardcoreClickWords = [
  "Resolve",
  "Rend",
  "Ruin",
  "Rampant",
  "Primal",
  "Savage",
  "Unreal",
  "Ultimate",
  "Alexander",
  "Omega",
  "Abyss",
  "Soul",
  "Slaughter",
  "Beast",
  "Glory",
];

export function getClickWords(theme: ThemeName): string[] {
  return theme === "red" ? hardcoreClickWords : casualClickWords;
}