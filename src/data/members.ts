import type { ThemeName } from "@/hooks/useTheme";

export interface Member {
  /** 显示名（游戏内ID） */
  name: string;
  /** 假名/罗马字副名 */
  subtitle: string;
  /** 职位/头衔 */
  role: string;
  /** 日语职位名 */
  roleJp: string;
  /** 主职/擅长玩法 */
  mainJob: string;
  /** 自我介绍 */
  bio: string;
  /** 加入时间 */
  joinDate: string;
  /** 头像背景色（用于占位头像） */
  accent: string;
  /** 在线状态 */
  status: "active" | "away" | "offline";
}

const casualMembers: Member[] = [
  // {
  //   name: "Yuki Rin",
  //   subtitle: "ゆきりん",
  //   role: "Master",
  //   roleJp: "親方",
  //   mainJob: "黑魔道士",
  //   bio: "欢迎来到神無月！任何问题随时找我。",
  //   joinDate: "2020-08",
  //   accent: "#d8ad43",
  //   status: "active",
  // },
  // {
  //   name: "Kanade",
  //   subtitle: "かなで",
  //   role: "Vice Master",
  //   roleJp: "副親方",
  //   mainJob: "学者",
  //   bio: "钓鱼和挖宝爱好者，随时组队出发！",
  //   joinDate: "2020-09",
  //   accent: "#3a8de0",
  //   status: "active",
  // },
  // {
  //   name: "Sora",
  //   subtitle: "そら",
  //   role: "Officer",
  //   roleJp: "幹部",
  //   mainJob: "吟遊詩人",
  //   bio: "演奏、装修、截图都在行。",
  //   joinDate: "2021-02",
  //   accent: "#c72422",
  //   status: "away",
  // },
  // {
  //   name: "Miku",
  //   subtitle: "みく",
  //   role: "Member",
  //   roleJp: "一般",
  //   mainJob: "黒魔道士",
  //   bio: "休闲玩家，喜欢剧情和幻卡。",
  //   joinDate: "2021-07",
  //   accent: "#9b6dd4",
  //   status: "active",
  // },
  // {
  //   name: "Haru",
  //   subtitle: "はる",
  //   role: "Member",
  //   roleJp: "一般",
  //   mainJob: "機工士",
  //   bio: "热爱生产采集，仓库总管。",
  //   joinDate: "2022-01",
  //   accent: "#6ba8e8",
  //   status: "offline",
  // },
  // {
  //   name: "Rin",
  //   subtitle: "りん",
  //   role: "Member",
  //   roleJp: "一般",
  //   mainJob: "忍者",
  //   bio: "新手引导员，有问必答。",
  //   joinDate: "2022-06",
  //   accent: "#d87093",
  //   status: "active",
  // },
];

const hardcoreMembers: Member[] = [
  // {
  //   name: "Yuki Rin",
  //   subtitle: "ゆきりん",
  //   role: "Master",
  //   roleJp: "総隊長",
  //   mainJob: "暗黒騎士",
  //   bio: "绝本首杀指挥，刀锋所向，终焉随行。",
  //   joinDate: "2020-08",
  //   accent: "#c72422",
  //   status: "active",
  // },
  // {
  //   name: "Kanade",
  //   subtitle: "かなで",
  //   role: "Vice Master",
  //   roleJp: "副隊長",
  //   mainJob: "戦士",
  //   bio: "零式首周CLEAR，硬核坦克担当。",
  //   joinDate: "2020-09",
  //   accent: "#d8ad43",
  //   status: "active",
  // },
  // {
  //   name: "Sora",
  //   subtitle: "そら",
  //   role: "Officer",
  //   roleJp: "幹部",
  //   mainJob: "侍",
  //   bio: "DPS极限追求者，循环零失误。",
  //   joinDate: "2021-02",
  //   accent: "#b01a1d",
  //   status: "active",
  // },
  // {
  //   name: "Miku",
  //   subtitle: "みく",
  //   role: "Raider",
  //   roleJp: "攻略隊",
  //   mainJob: "召喚士",
  //   bio: "绝亚历山大通关，parsing狂魔。",
  //   joinDate: "2021-07",
  //   accent: "#9b6dd4",
  //   status: "away",
  // },
  // {
  //   name: "Haru",
  //   subtitle: "はる",
  //   role: "Raider",
  //   roleJp: "攻略隊",
  //   mainJob: "機工士",
  //   bio: "绝龙骑首杀队成员，物理DPS标杆。",
  //   joinDate: "2022-01",
  //   accent: "#6ba8e8",
  //   status: "offline",
  // },
  // {
  //   name: "Rin",
  //   subtitle: "りん",
  //   role: "Raider",
  //   roleJp: "攻略隊",
  //   mainJob: "忍者",
  //   bio: "绝巴哈绝奈尔双通，潜行于终焉之影。",
  //   joinDate: "2022-06",
  //   accent: "#d87093",
  //   status: "active",
  // },
];

export function getMembers(theme: ThemeName): Member[] {
  return theme === "red" ? hardcoreMembers : casualMembers;
}
