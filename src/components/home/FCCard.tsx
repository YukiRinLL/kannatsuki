import { motion } from "framer-motion";
import {
  Clock,
  CalendarDays,
  MapPin,
  Users,
  Star,
  Shield,
  MapPinned,
  RefreshCw,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useGuildInfo } from "@/hooks/useGuildInfo";
import { getGuildInfo, type GuildInfo } from "@/data/guildInfo";

/**
 * FC Info カード — 巻物/軸装飾風
 *  墨色 + 金二重線 + 朱色アクセント
 *  主題別ロゴ・内容切替
 */

function InfoRow({
  icon,
  label,
  value,
  iconColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconColor?: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-kin-400/8 last:border-0">
      <span
        style={{ color: iconColor || "rgb(var(--kin-400))" }}
        className="flex-shrink-0 mt-0.5"
      >
        {icon}
      </span>
      <span className="font-mincho text-[12.5px] tracking-[0.3em] text-sumi-200/70 flex-shrink-0 pt-0.5">
        {label}
      </span>
      <span className="font-gothic text-[14px] text-washi-100 ml-auto text-right leading-[1.8] max-w-[55%]">
        {value}
      </span>
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-kin-400/8 last:border-0">
      <div className="w-5 h-5 skeleton-shimmer flex-shrink-0" />
      <div className="w-24 h-4 skeleton-shimmer flex-shrink-0" />
      <div className="w-28 h-4 skeleton-shimmer ml-auto" />
    </div>
  );
}

export default function FCCard() {
  const theme = useTheme((s) => s.theme);
  const { data, loading, error, retry } = useGuildInfo();

  // 主題別のデフォルト値を使用（API未取得時のフォールバック）
  const fallbackInfo = getGuildInfo(theme);
  const displayInfo: GuildInfo = data || fallbackInfo;

  const formatTime = (timeStr: string) => {
    if (!timeStr) return "—";
    return timeStr.replace("-", " — ");
  };

  const renderInfo = (info: GuildInfo) => (
    <>
      <InfoRow
        icon={<MapPin size={16} strokeWidth={1.5} />}
        label=" サーバー / 服务器"
        value={`${info.area_name} · ${info.group_name}`}
        iconColor="rgb(var(--kin-400))"
      />
      <InfoRow
        icon={<Clock size={16} strokeWidth={1.5} />}
        label="平日 / 工作日"
        value={formatTime(info.active_time_weekday)}
      />
      <InfoRow
        icon={<Clock size={16} strokeWidth={1.5} />}
        label="週末 / 周末"
        value={formatTime(info.active_time_weekend)}
      />
      <InfoRow
        icon={<CalendarDays size={16} strokeWidth={1.5} />}
        label="設立 / 成立"
        value={info.create_time}
      />
      <InfoRow
        icon={<Users size={16} strokeWidth={1.5} />}
        label="メンバー / 成员"
        value={`${info.active_member_num}  /  ${info.member_num}`}
      />
      <InfoRow
        icon={<Star size={16} strokeWidth={1.5} />}
        label="FC / 部队等级"
        value={`Lv.${info.guild_rank ? info.guild_rank.split(".")[0] : "—"}`}
        iconColor="rgb(var(--aka-500))"
      />
      <InfoRow
        icon={<Shield size={16} strokeWidth={1.5} />}
        label="大国防連軍 / 联军"
        value={info.grand_parentname}
        iconColor="rgb(var(--kin-300))"
      />
      <InfoRow
        icon={<MapPinned size={16} strokeWidth={1.5} />}
        label="アドレス / 地址"
        value="NULL"
        iconColor="rgb(var(--aka-500))"
      />
    </>
  );

  return (
    <section id="fc-card" className="relative py-28 px-4 wagara-shippo">
      <div className="container mx-auto max-w-5xl">
        {/* 見出し */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <span className="kana-label tracking-[0.5em]">ぶたい じょうほう</span>
          <h2 className="font-mincho text-4xl md:text-5xl tracking-[0.25em] text-kinpaku mt-3 mb-5">
            FC 情報
          </h2>
          <div className="mizuhiki-line max-w-sm mx-auto">
            <span className="font-mincho text-xs tracking-[0.4em]">FREE COMPANY</span>
          </div>
        </motion.div>

        {/* 巻物カード */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* 巻物の上下軸 */}
          <div className="absolute -left-3 -right-3 top-0 h-3 bg-gradient-to-r from-sumi-800 via-aka-600 to-sumi-800 border border-kin-400/20" style={{ borderRadius: "1px" }} />
          <div className="absolute -left-3 -right-3 bottom-0 h-3 bg-gradient-to-r from-sumi-800 via-aka-600 to-sumi-800 border border-kin-400/20" style={{ borderRadius: "1px" }} />
          {/* 軸の左右飾り */}
          <div className="absolute -left-5 -top-1 w-6 h-6 bg-gradient-to-br from-kin-300 to-kin-600 border border-sumi-800 z-10" />
          <div className="absolute -right-5 -top-1 w-6 h-6 bg-gradient-to-br from-kin-300 to-kin-600 border border-sumi-800 z-10" />
          <div className="absolute -left-5 -bottom-1 w-6 h-6 bg-gradient-to-br from-kin-300 to-kin-600 border border-sumi-800 z-10" />
          <div className="absolute -right-5 -bottom-1 w-6 h-6 bg-gradient-to-br from-kin-300 to-kin-600 border border-sumi-800 z-10" />

          <div className="washi-card washi-texture px-6 md:px-10 py-8 md:py-12 relative corner-ornament">
            <div className="flex flex-col gap-10 md:gap-12">
              {/* リスト */}
              <div className="flex-1">
                {/* ヘッダ */}
                <div className="mb-7 pb-6 border-b border-kin-400/15">
                  {loading ? (
                    <>
                      <div className="w-40 h-8 skeleton-shimmer mb-3" />
                      <div className="w-64 h-4 skeleton-shimmer" />
                    </>
                  ) : (
                    <div className="flex items-center gap-4 flex-wrap">
                      <h3 className="font-yu text-3xl md:text-4xl text-washi-50 tracking-[0.2em]">
                        {displayInfo.guild_name}
                      </h3>
                      <span className="stamp-aka font-yu"
                        style={{
                          width: "54px",
                          height: "54px",
                          fontSize: "16px",
                          borderRadius: "3px",
                        }}
                      >
                        {displayInfo.guild_tag}
                      </span>
                      <div className="w-full mt-3">
                        <p className="font-mincho text-[12px] tracking-[0.3em] text-sumi-200/60">
                          FREE COMPANY · FINAL FANTASY XIV ONLINE
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 行 */}
                {loading
                  ? Array.from({ length: 8 }).map((_, i) => <SkeletonRow key={i} />)
                  : renderInfo(displayInfo)}

                {error && !loading && (
                  <button
                    onClick={retry}
                    className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-mincho tracking-[0.2em] text-aka-300 hover:text-aka-200 transition-colors"
                  >
                    <RefreshCw size={14} />
                    データ更新を再試行 / 点击重试
                  </button>
                )}
              </div>
            </div>

            {/* タグ — 和印スタイル */}
            {!loading && (
              <div className="mt-10 pt-6 border-t border-kin-400/12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="kana-label tracking-[0.4em]">タグ / 标签</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-aka-500/30 to-transparent" />
                </div>
                <div className="flex flex-wrap gap-2 justify-start">
                  {displayInfo.guild_label.map((label, i) => (
                    <motion.span
                      key={`${theme}-${label}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      className="washi-tag font-mincho tracking-[0.15em]"
                    >
                      ・ {label.trim()}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}