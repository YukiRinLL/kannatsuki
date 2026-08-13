import type { ThemeName } from "@/hooks/useTheme";
import { imageSources } from "@/lib/imageSources";

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
  /** FC 紹介文 / 简介 */
  guild_describe: string;
  /** FC 掲示板 / 公告板 */
  guild_board: string;
  /** ハウス情報 / 房屋信息 */
  house_info: string;
  /** データ更新時間 / 数据同步时间 */
  update_time: string;
  /** ハウス公開フラグ / 房屋是否公开 */
  house_public: boolean;
}

const casualGuildInfo: GuildInfo = {
  guild_name: "Kannatsuki",
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
  guild_pic: imageSources["kannatsuki logo.png"].cdn,
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
  guild_describe: "欢迎^ ^",
  guild_board: "部队权限是全部打开的，特效之类的可以自己换 Q群:2154059817",
  house_info: "未登记",
  update_time: "",
  house_public: false,
};

const hardcoreGuildInfo: GuildInfo = {
  guild_name: "Kannatsuki",
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
  guild_pic: imageSources["frame-1-290x290-B.png"].cdn,
  guild_label: [
    "硬核玩家",
    "挑战极本",
    "挑战零式",
    "挑战绝本",
    "高难度攻略"
  ],
  guild_describe: "欢迎^ ^",
  guild_board: "部队权限是全部打开的，特效之类的可以自己换 Q群:2154059817",
  house_info: "未登记",
  update_time: "",
  house_public: false,
};

export function getGuildInfo(theme: ThemeName): GuildInfo {
  return theme === "red" ? hardcoreGuildInfo : casualGuildInfo;
}

export const defaultGuildInfo = casualGuildInfo;

export const API_URL =
  "https://phantoms-backend.onrender.com/api/risingstones/guild-info?guildId=9375509261766965890";

/** API 取得失敗時のローカルフォールバックデータ */
export const LOCAL_API_URL = "/data/guild-info.json";