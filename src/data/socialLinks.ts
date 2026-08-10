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
    url: "https://github.com/YukiRinLL/FFXIV_Kannatsuki_MainPage",
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
      "每个人都可以参与，无论你是新手还是老手！一起讨论玩法剧情与世界观，攻略副本，探索宝物，出海垂钓！",
    icon: "users",
  },
  {
    title: "一起 Happy",
    subtitle: "楽しさを共有する",
    description:
      "在FC聊天频道问问「玩点什么」「有什么需要帮忙」随时组队出发！欢迎拍摄直播截屏投稿，自由记录艾欧泽亚的每一天。",
    icon: "heart",
  },
  {
    title: "平和友善 相互尊重",
    subtitle: "強要しない",
    description:
      "玩游戏开心第一！请保持独立性，互相尊重、换位思考，不将自己的想法强加于人。在彼此尊重中开心同乐，才是最好的。",
    icon: "shield",
  },
];

const hardcoreAboutCards: AboutCard[] = [
  {
    title: "极限攻略",
    subtitle: "限界への挑戦",
    description:
      "追求最高规格的副本攻略！专注于攻克每一个副本。如果你渴望突破自我，这里是你的战场。",
    icon: "shield",
  },
  {
    title: "全面探索",
    subtitle: "探求の道",
    description:
      "对于未知领域的探索永不止息！我们追求的是全领域全成就的收集，穷究一切知识、经验、技巧。",
    icon: "users",
  },
  {
    title: "极致卓越",
    subtitle: "究極の境地",
    description:
      "变强！没有不可能。如果你也渴望将FF14的玩法玩到极致，欢迎加入征途。",
    icon: "heart",
  },
];

export function getAboutCards(theme: ThemeName): AboutCard[] {
  return theme === "red" ? hardcoreAboutCards : casualAboutCards;
}

const casualClickWords = [
  "朧月","十六夜","花鳥風月","黄昏","花筏","雪月花","花吹雪","秋晴れ","冬枯れ","さようなら"
];

const hardcoreClickWords = [
  "修羅","紅蓮","殺陣","業火","神威","無双","戦鬼","斬月","殲滅","散華"
];

export function getClickWords(theme: ThemeName): string[] {
  return theme === "red" ? hardcoreClickWords : casualClickWords;
}