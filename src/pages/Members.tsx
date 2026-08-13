import { motion } from "framer-motion";
import { RefreshCw, Loader2 } from "lucide-react";
import { useMembers } from "@/hooks/useMembers";
import MemberCard from "@/components/members/MemberCard";
import SectionDivider from "@/components/effects/SectionDivider";
import Kamon from "@/components/effects/Kamon";

export default function Members() {
  const { data: members, loading, error, retry } = useMembers();

  // 管理者在前面显示
  const sorted = [...members].sort(
    (a, b) => b.adminTag - a.adminTag
  );

  const total = members.length;

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
              神無月的伙伴们，与你同行。
              <br />
              每一位都是这段旅途的见证者。
            </p>

            {/* 统计 */}
            <div className="mt-8 inline-flex items-center gap-6 px-6 py-3 border border-kin-400/30" style={{ borderRadius: "2px" }}>
              <div className="text-center">
                <div className="font-yu text-2xl text-kinpaku">
                  {loading ? "—" : total}
                </div>
                <div className="kana-label tracking-[0.3em] opacity-60 mt-1">総勢</div>
              </div>
            </div>
          </motion.div>

          {/* 成员网格 */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <Loader2 size={36} className="animate-spin text-kin-400" strokeWidth={1.5} />
              <p className="font-mincho text-[13px] tracking-[0.3em] text-sumi-200/70">
                読み込み中…
              </p>
            </div>
          ) : sorted.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sorted.map((m, i) => (
                <MemberCard key={m.uuid || i} member={m} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-mincho text-sumi-200/60 tracking-[0.2em]">
                暂无成员数据
              </p>
              {error && (
                <button
                  onClick={retry}
                  className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-mincho tracking-[0.2em] text-aka-300 hover:text-aka-200 transition-colors"
                >
                  <RefreshCw size={14} />
                  データ更新を再試行 / 点击重试
                </button>
              )}
            </div>
          )}

          {/* 错误时底部重试（有数据时静默显示） */}
          {error && !loading && sorted.length > 0 && (
            <div className="text-center mt-8">
              <button
                onClick={retry}
                className="inline-flex items-center gap-2 text-[12px] font-mincho tracking-[0.2em] text-sumi-200/50 hover:text-aka-300 transition-colors"
              >
                <RefreshCw size={12} />
                データを再取得
              </button>
            </div>
          )}
        </div>
      </section>

      <SectionDivider variant="kamon" kamonVariant="mokko" className="opacity-60" />
    </div>
  );
}
