import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";
import type { Member, Badge } from "@/data/members";
import { getRoleLabel, getProxiedAvatar, DEFAULT_AVATAR } from "@/data/members";

interface Props {
  member: Member;
  index: number;
}

/** バッジレベルによる色分け */
function getBadgeAccent(level: number): string {
  if (level >= 2) return "aka";
  if (level >= 1) return "kin";
  return "gin";
}

export default function MemberCard({ member, index }: Props) {
  const role = getRoleLabel(member.adminTag);
  const avatarSrc = getProxiedAvatar(member.avatar);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="washi-card washi-texture p-6 relative overflow-hidden group flex flex-col"
    >
      {/* 角朱印 */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-[0.06] group-hover:opacity-15 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle, rgb(var(--aka-400)) 0%, transparent 60%)" }}
      />
      {/* 顶部金线 */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-kin-400/50 to-transparent" />

      <div className="relative flex items-start gap-4">
        {/* アバター — プロキシ経由、失敗時デフォルトアバター */}
        <div className="flex-shrink-0 relative">
          <div
            className="w-16 h-16 flex items-center justify-center border overflow-hidden"
            style={{ borderRadius: "2px", borderColor: "rgb(var(--kin-400) / 0.4)" }}
          >
            <img
              src={avatarSrc}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = DEFAULT_AVATAR;
              }}
            />
          </div>
        </div>

        {/* 名字 + 役職 */}
        <div className="flex-1 min-w-0">
          <h3 className="font-mincho text-lg tracking-[0.15em] text-kinpaku truncate">
            {member.name}
          </h3>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span
              className="inline-flex items-center px-2 py-0.5 text-[10px] tracking-[0.25em] border"
              style={{
                color: "rgb(var(--kin-300))",
                borderColor: "rgb(var(--kin-400) / 0.4)",
                background: "rgb(var(--kin-400) / 0.06)",
              }}
            >
              {role.jp}
            </span>
            <span className="font-gothic text-[11px] text-sumi-200/60 tracking-[0.15em]">
              {role.cn}
            </span>
          </div>
        </div>
      </div>

      {/* サーバー / データセンター */}
      {(member.areaName || member.groupName) && (
        <div className="relative mt-5 flex items-center gap-2 text-[12px] border-l-2 pl-3 border-kin-400/40">
          <MapPin size={12} className="text-kin-400" strokeWidth={1.5} />
          <span className="font-mincho text-washi-100 tracking-[0.15em]">
            {[member.groupName, member.areaName].filter(Boolean).join(" · ")}
          </span>
        </div>
      )}

      {/* プロフィール */}
      {member.bio && (
        <p className="relative mt-4 font-gothic text-[12.5px] text-sumi-200/80 leading-[1.85] border-t border-kin-400/10 pt-3">
          {member.badges.length === 0 ? member.bio : member.bio}
        </p>
      )}

      {/* バッジ一覧 */}
      {member.badges.length > 0 && (
        <div className="relative mt-4 pt-3 border-t border-kin-400/10 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Award size={12} className="text-kin-400" strokeWidth={1.5} />
            <span className="kana-label tracking-[0.3em] text-[10px] opacity-70">
              バッジ / 勋章
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {member.badges.slice(0, 6).map((b: Badge, i: number) => {
              const accent = getBadgeAccent(b.badgeLevel);
              const color =
                accent === "aka"
                  ? "rgb(var(--aka-400))"
                  : accent === "kin"
                  ? "rgb(var(--kin-400))"
                  : "rgb(var(--sumi-300))";
              return (
                <span
                  key={`${b.badgeField}-${i}`}
                  className="inline-flex items-center px-2 py-0.5 text-[10px] font-mincho tracking-wider border"
                  title={b.badgeName}
                  style={{
                    color,
                    borderColor: `${color}55`,
                    background: `${color}10`,
                    borderRadius: "1px",
                  }}
                >
                  {b.badgeLevel >= 1 ? (
                    <span
                      className="mr-1 inline-block w-1.5 h-1.5 rounded-full"
                      style={{ background: color }}
                    />
                  ) : null}
                  {b.badgeName}
                </span>
              );
            })}
            {member.badges.length > 6 && (
              <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-gothic text-sumi-200/50 border border-sumi-200/20"
                style={{ borderRadius: "1px" }}
                title={member.badges
                  .slice(6)
                  .map((b) => b.badgeName)
                  .join(" / ")}
              >
                +{member.badges.length - 6}
              </span>
            )}
          </div>
        </div>
      )}

      {/* プロフィールなしでバッジもない場合は区切り線なしで bio 表示ブロック分の隙間を埋める flex-1 */}
      {!member.bio && member.badges.length === 0 && <div className="flex-1" />}

      {/* 最新動態 */}
      {member.lastDynamic && (
        <p className="relative mt-4 pt-3 border-t border-kin-400/10 font-gothic text-[11px] text-sumi-200/50 leading-[1.7]">
          {member.lastDynamic}
        </p>
      )}
    </motion.article>
  );
}
