import type { ThemeName } from "@/hooks/useTheme";

export interface GuildInfo {
  guild_name: string;
  guild_tag: string;
  area_name: string;
  group_name: string;
  active_time_weekday: string;
  active_time_weekend: string;
  create_time: string;
  active_member_num: number;
  member_num: number;
  guild_rank: string;
  grand_parentname: string;
  guild_pic: string;
  guild_label: string[];
}

const casualGuildInfo: GuildInfo = {
  guild_name: "Kanazuki",
  guild_tag: "终焉",
  area_name: "陆行鸟",
  group_name: "神意之地",
  active_time_weekday: "01:00-24:00",
  active_time_weekend: "01:00-24:00",
  create_time: "2020-08-17 22:37:01",
  active_member_num: 5,
  member_num: 6,
  guild_rank: "30",
  grand_parentname: "恒辉队",
  guild_pic: "/images/kanazuki logo.png",
  guild_label: [
    "欢迎新手",
    "欢迎回归者",
    "欢迎学生党",
    "欢迎工作党",
    "休闲玩家",
    "社交活跃",
    "演奏",
    "挖宝",
    "采集制作",
    "钓鱼",
    "九宫幻卡",
    "角色扮演爱好者",
    "截图爱好者",
    "装修爱好者",
  ],
};

const hardcoreGuildInfo: GuildInfo = {
  guild_name: "Kanazuki",
  guild_tag: "终焉",
  area_name: "陆行鸟",
  group_name: "神意之地",
  active_time_weekday: "20:00-24:00",
  active_time_weekend: "14:00-24:00",
  create_time: "2020-08-17 22:37:01",
  active_member_num: 5,
  member_num: 6,
  guild_rank: "30",
  grand_parentname: "恒辉队",
  guild_pic: "/images/frame-1-290x290-B.png",
  guild_label: [
    "硬核玩家",
    "挑战极本",
    "挑战零式",
    "挑战绝本",
    "高难度攻略"
  ],
};

export function getGuildInfo(theme: ThemeName): GuildInfo {
  return theme === "red" ? hardcoreGuildInfo : casualGuildInfo;
}

export const defaultGuildInfo = casualGuildInfo;

export const API_URL =
  "https://kannatsuki-backend.onrender.com/api/risingstones/guild-info";