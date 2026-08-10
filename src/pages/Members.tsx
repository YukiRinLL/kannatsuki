import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { getMembers } from "@/data/members";
import MemberCard from "@/components/members/MemberCard";
import SectionDivider from "@/components/effects/SectionDivider";
import Kamon from "@/components/effects/Kamon";

export default function Members() {
  const theme = useTheme((s) => s.theme);
  const isRed = theme === "red";
  const members = getMembers(theme);

  // 按职位权重排序展示
  const roleOrder = ["Master", "Vice Master", "Officer", "Raider", "Member"];
  const sorted = [...members].sort(
    (a, b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role)
  );

  const total = members.length;
  const activeCount = members.filter((m) => m.status === "active").length;

  return (
    <div className="pt-20">
      {/* 顶部家纹 */}
      <div className="flex justify-center py-10">
        <Kamon size={40} variant="yotsume" className="opacity-50" />
      </div>

      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* 标题区 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="text-center mb-14"
          >
            <span className="kana-label tracking-[0.5em]">なかま · めいぼ</span>
            <h2 className="font-mincho text-4xl md:text-5xl tracking-[0.25em] text-kinpaku mt-3 mb-5 pl-[0.25em]">
              成员名簿
            </h2>
            <div className="mizuhiki-line max-w-sm mx-auto">
              <span className="font-mincho text-xs tracking-[0.4em]">MEMBERS</span>
            </div>
            <p className="font-mincho text-[14px] text-sumi-200/70 mt-7 leading-[2.2] max-w-xl mx-auto">
              {isRed
                ? "终焉的精锐，于此集结。"
                : "神无月的伙伴们，与你同行。"}
              <br />
              {isRed
                ? "每一位皆为极限之路的同行者。"
                : "每一位都是这段旅途的见证者。"}
            </p>

            {/* 统计 */}
            <div className="mt-8 inline-flex items-center gap-6 px-6 py-3 border border-kin-400/30" style={{ borderRadius: "2px" }}>
              <div className="text-center">
                <div className="font-yu text-2xl text-kinpaku">{total}</div>
                <div className="kana-label tracking-[0.3em] opacity-60 mt-1">総勢</div>
              </div>
              <div className="w-px h-8 bg-kin-400/30" />
              <div className="text-center">
                <div className="font-yu text-2xl text-kinpaku">{activeCount}</div>
                <div className="kana-label tracking-[0.3em] opacity-60 mt-1">在籍</div>
              </div>
            </div>
          </motion.div>

          {/* 成员网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.map((m, i) => (
              <MemberCard key={`${theme}-${m.name}`} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="kamon" kamonVariant="mokko" className="opacity-60" />
    </div>
  );
}
