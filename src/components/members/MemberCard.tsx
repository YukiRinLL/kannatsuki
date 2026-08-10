import { motion } from "framer-motion";
import type { Member } from "@/data/members";

interface Props {
  member: Member;
  index: number;
}

const statusMap = {
  active: { label: "在线", dot: "bg-emerald-400", text: "text-emerald-300" },
  away: { label: "离开", dot: "bg-amber-400", text: "text-amber-300" },
  offline: { label: "离线", dot: "bg-sumi-400", text: "text-sumi-300" },
} as const;

export default function MemberCard({ member, index }: Props) {
  const st = statusMap[member.status];
  // 用首字母做占位头像
  const initial = member.name.charAt(0).toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="washi-card washi-texture p-6 relative overflow-hidden group"
    >
      {/* 角朱印 */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-[0.06] group-hover:opacity-15 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${member.accent} 0%, transparent 60%)` }}
      />
      {/* 顶部金线 */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-kin-400/50 to-transparent" />

      <div className="relative flex items-start gap-4">
        {/* 头像（占位） */}
        <div className="flex-shrink-0 relative">
          <div
            className="w-16 h-16 flex items-center justify-center font-yu text-2xl text-washi-50 border"
            style={{
              background: `linear-gradient(135deg, ${member.accent}cc, ${member.accent}66)`,
              borderColor: `${member.accent}80`,
              borderRadius: "2px",
            }}
          >
            {initial}
          </div>
          {/* 在线状态点 */}
          <span
            className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-sumi-900 ${st.dot}`}
          />
        </div>

        {/* 名字 + 职位 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-mincho text-lg tracking-[0.15em] text-kinpaku truncate">
              {member.name}
            </h3>
            <span className="kana-label tracking-[0.2em] opacity-70">
              {member.subtitle}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span
              className="inline-flex items-center px-2 py-0.5 text-[10px] tracking-[0.25em] border"
              style={{
                color: member.accent,
                borderColor: `${member.accent}60`,
                background: `${member.accent}10`,
              }}
            >
              {member.roleJp}
            </span>
            <span className="font-gothic text-[11px] text-sumi-200/60 tracking-[0.15em]">
              {member.role}
            </span>
          </div>
        </div>
      </div>

      {/* 主职 + 加入时间 */}
      <div className="relative mt-5 grid grid-cols-2 gap-3 text-[12px]">
        <div className="border-l-2 pl-3" style={{ borderColor: `${member.accent}80` }}>
          <div className="kana-label tracking-[0.3em] opacity-60">しょく</div>
          <div className="font-mincho text-washi-100 tracking-[0.15em] mt-0.5">
            {member.mainJob}
          </div>
        </div>
        <div className="border-l-2 pl-3 border-kin-400/40">
          <div className="kana-label tracking-[0.3em] opacity-60">にゅうたい</div>
          <div className="font-gothic text-washi-100 tracking-[0.1em] mt-0.5">
            {member.joinDate}
          </div>
        </div>
      </div>

      {/* 简介 */}
      <p className="relative mt-4 font-gothic text-[12.5px] text-sumi-200/80 leading-[1.85] border-t border-kin-400/10 pt-3">
        {member.bio}
      </p>
    </motion.article>
  );
}
