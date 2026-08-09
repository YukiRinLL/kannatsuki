import { useState, useEffect, useCallback } from "react";
import { type GuildInfo, defaultGuildInfo, API_URL } from "@/data/guildInfo";

interface GuildInfoResponse {
  code: number;
  msg: string;
  data: GuildInfo;
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
        setData(result.data);
      } else {
        throw new Error(result.msg || "API returned error");
      }
    } catch {
      setError(true);
      setData(defaultGuildInfo);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGuildInfo();
  }, [fetchGuildInfo]);

  return { data, loading, error, retry: fetchGuildInfo };
}
