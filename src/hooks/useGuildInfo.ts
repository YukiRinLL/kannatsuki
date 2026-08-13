import { useState, useEffect, useCallback } from "react";
import { type GuildInfo, defaultGuildInfo, API_URL, LOCAL_API_URL } from "@/data/guildInfo";

interface GuildInfoResponse {
  code: number;
  msg: string;
  data: GuildInfo;
}

/** API / ローカルデータを問わず、GuildInfo を正規化 */
function normalizeGuildInfo(raw: GuildInfo): GuildInfo {
  return {
    guild_name: raw.guild_name || "",
    guild_tag: raw.guild_tag || "",
    area_name: raw.area_name || "",
    group_name: raw.group_name || "",
    active_time_weekday: raw.active_time_weekday || "",
    active_time_weekend: raw.active_time_weekend || "",
    create_time: raw.create_time || "",
    active_member_num: Number(raw.active_member_num) || 0,
    member_num: Number(raw.member_num) || 0,
    guild_rank: String(raw.guild_rank || ""),
    grand_parentname: raw.grand_parentname || "",
    guild_pic: (raw.guild_pic || "").replace(/`/g, "").trim(),
    guild_label: Array.isArray(raw.guild_label) ? raw.guild_label : [],
    guild_describe: raw.guild_describe || "",
    guild_board: raw.guild_board || "",
    house_info: raw.house_info || "",
    update_time: raw.update_time || "",
    house_public: Boolean(raw.house_public),
  };
}

export function useGuildInfo() {
  const [data, setData] = useState<GuildInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchGuildInfo = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(API_URL, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result: GuildInfoResponse = await response.json();

      if (result.code === 10000 && result.data) {
        setData(normalizeGuildInfo(result.data));
      } else {
        throw new Error(result.msg || "API returned error");
      }
    } catch {
      // API 取得失敗時、ローカル JSON をフォールバックとして読み込む
      try {
        const localRes = await fetch(LOCAL_API_URL);
        if (localRes.ok) {
          const localResult: GuildInfoResponse = await localRes.json();
          if (localResult.code === 10000 && localResult.data) {
            setData(normalizeGuildInfo(localResult.data));
            setError(true);
          } else {
            throw new Error("Invalid local data");
          }
        } else {
          throw new Error("Local data unavailable");
        }
      } catch {
        setData(normalizeGuildInfo(defaultGuildInfo));
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGuildInfo();
  }, [fetchGuildInfo]);

  return { data, loading, error, retry: fetchGuildInfo };
}
