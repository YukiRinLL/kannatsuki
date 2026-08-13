/**
 * メンバー情報 — Rising Stones API に準拠
 * 紅/蒼 主題ともに同じデータソースを使用
 */

/** 画像プロキシ — images.weserv.nl を利用してアバターを取得 */
export const IMAGE_PROXY = "https://images.weserv.nl/?url=";

/** デフォルトアバター — SVG data URI（人型シルエット） */
export const DEFAULT_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%234a4a52'/%3E%3Ccircle cx='32' cy='24' r='10' fill='%238a8a92'/%3E%3Cpath d='M16 56 C16 42 24 38 32 38 C40 38 48 42 48 56 Z' fill='%238a8a92'/%3E%3C/svg%3E";

/** アバター URL をプロキシ経由で取得（空の場合はデフォルトアバター） */
export function getProxiedAvatar(avatar: string): string {
  if (!avatar) return DEFAULT_AVATAR;
  return IMAGE_PROXY + encodeURIComponent(avatar);
}

export interface Badge {
  badgeField: string;
  badgeName: string;
  badgeLevel: number;
  badgeWeight: number;
}

export interface Member {
  /** 一意識別子 */
  uuid: string;
  /** キャラクター名 */
  name: string;
  /** プロフィール / 自己紹介 */
  bio: string;
  /** アバター画像 URL */
  avatar: string;
  /** 管理者タグ (0=一般) */
  adminTag: number;
  /** サーバー */
  areaName: string;
  /** データセンター */
  groupName: string;
  /** 最新の動態 */
  lastDynamic: string;
  /** バッジ一覧 */
  badges: Badge[];
}

/** メンバー一覧 API */
export const MEMBER_API_URL =
  "https://phantoms-backend.onrender.com/api/risingstones/guild-member?guildId=9375509261766965890";

/** API 取得失敗時のローカルフォールバックデータ */
export const MEMBER_LOCAL_API_URL = "/data/guild-member.json";

/** API 生データを Member 型へ正規化（反引号・前後空白を除去） */
export function normalizeMember(raw: {
  uuid?: string;
  character_name?: string;
  profile?: string | null;
  avatar?: string | null;
  admin_tag?: number;
  area_name?: string;
  group_name?: string;
  last_dynamic?: string | null;
  badge?: string;
}): Member {
  let badges: Badge[] = [];
  if (raw.badge) {
    try {
      const parsed = JSON.parse(raw.badge);
      if (Array.isArray(parsed)) {
        badges = parsed
          .filter((b) => b && typeof b === "object")
          .map((b) => ({
            badgeField: String(b.badgeField || ""),
            badgeName: String(b.badgeName || ""),
            badgeLevel: Number(b.badgeLevel) || 0,
            badgeWeight: Number(b.badgeWeight) || 0,
          }));
      }
    } catch {
      // パース失敗したら空配列を使用
    }
  }

  return {
    uuid: raw.uuid || "",
    name: raw.character_name || "名無し",
    bio: raw.profile || "",
    avatar: (raw.avatar || "").replace(/`/g, "").trim(),
    adminTag: raw.admin_tag ?? 0,
    areaName: raw.area_name || "",
    groupName: raw.group_name || "",
    lastDynamic: raw.last_dynamic || "",
    badges,
  };
}

/** admin_tag による役職表示 */
export function getRoleLabel(adminTag: number): { jp: string; cn: string } {
  if (adminTag === 1) return { jp: "親方", cn: "Master" };
  if (adminTag === 2) return { jp: "副親方", cn: "Vice Master" };
  if (adminTag === 3) return { jp: "幹部", cn: "Officer" };
  return { jp: "一般", cn: "Member" };
}
