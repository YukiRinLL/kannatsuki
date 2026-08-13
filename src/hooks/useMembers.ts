import { useState, useEffect, useCallback } from "react";
import {
  type Member,
  MEMBER_API_URL,
  MEMBER_LOCAL_API_URL,
  normalizeMember,
} from "@/data/members";

interface MemberResponse {
  code: number;
  msg: string;
  data: {
    registered: Array<Record<string, unknown>>;
    unRegister: Array<Record<string, unknown>>;
  };
}

export function useMembers() {
  const [data, setData] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMembers = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(MEMBER_API_URL, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const result: MemberResponse = await response.json();

      if (result.code === 10000 && result.data) {
        const members = (result.data.registered || []).map((raw) =>
          normalizeMember(raw as Parameters<typeof normalizeMember>[0])
        );
        setData(members);
      } else {
        throw new Error(result.msg || "API returned error");
      }
    } catch {
      // API 取得失敗時、ローカル JSON をフォールバックとして読み込む
      try {
        const localRes = await fetch(MEMBER_LOCAL_API_URL);
        if (localRes.ok) {
          const localResult: MemberResponse = await localRes.json();
          if (localResult.code === 10000 && localResult.data) {
            const members = (localResult.data.registered || []).map((raw) =>
              normalizeMember(raw as Parameters<typeof normalizeMember>[0])
            );
            setData(members);
            setError(true);
          } else {
            throw new Error("Invalid local data");
          }
        } else {
          throw new Error("Local data unavailable");
        }
      } catch {
        setData([]);
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  return { data, loading, error, retry: fetchMembers };
}
