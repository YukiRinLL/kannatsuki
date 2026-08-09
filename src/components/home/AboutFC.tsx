import { motion } from "framer-motion";
import { Users, Heart, Shield } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { getAboutCards } from "@/data/socialLinks";
import Kamon from "@/components/effects/Kamon";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={28} strokeWidth={1.5} />,
  heart: <Heart size={28} strokeWidth={1.5} />,
  shield: <Shield size={28} strokeWidth={1.5} />,
};

/**
 * AboutFC — 三つの理念
 * 和紙カード × 朱印アイコン × 金の見出し
 * 主題別内容切替
 */
export default function AboutFC() {
  const theme = useTheme((s) => s.theme);
  const cards = getAboutCards(theme);

  return (
    <section id="about" className="relative py-28 px-4 wagara-kikko">
      <div className="container mx-auto max-w-6xl">
        {/* 見出し */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 relative"
        >
          <span className="kana-label tracking-[0.5em]">みっつの おもい</span>
          <h2 className="font-mincho text-4xl md:text-5xl tracking-[0.25em] text-kinpaku mt-3 mb-5">
            三つの理念
          </h2>
          <div className="mizuhiki-line max-w-sm mx-auto">
            <span className="font-mincho text-xs tracking-[0.4em]">ABOUT US</span>
          </div>
          {/* 家紋装飾 */}
          <div className="flex justify-center mt-4 opacity-30">
            <Kamon size={28} variant="mitsu" />
          </div>
        </motion.div>

        {/* 3枚のカード */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {cards.map((card, index) => (
            <motion.div
              key={`${theme}-${card.title}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.18 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="washi-card washi-texture p-8 h-full corner-ornament relative">
                {/* 左上の番号 — 和印 */}
                <span className="absolute -top-3 -left-3 z-10 stamp-aka font-yu"
                  style={{
                    width: "36px",
                    height: "36px",
                    fontSize: "15px",
                    borderRadius: "3px",
                  }}
                >
                  {["一", "二", "三"][index] || index + 1}
                </span>

                {/* アイコン台座 */}
                <div className="mb-7 inline-flex items-center justify-center w-16 h-16 relative group">
                  <div className="absolute inset-0 rotate-45 bg-gradient-to-br from-aka-500/40 to-aka-700/20 border border-aka-400/40" />
                  <div className="absolute inset-2 rotate-45 border border-kin-400/30" />
                  <span className="relative z-10 text-kin-300 group-hover:text-washi-50 transition-colors duration-500">
                    {iconMap[card.icon] || <Users size={28} />}
                  </span>
                </div>

                {/* タイトル */}
                <h3 className="font-mincho text-2xl text-washi-50 tracking-[0.15em] mb-1">
                  {card.title}
                </h3>
                <p className="font-mincho text-aka-300 text-[13px] tracking-[0.25em] mb-5">
                  {card.subtitle}
                </p>

                {/* 中飾り線 */}
                <div className="h-px w-14 bg-gradient-to-r from-aka-500/70 to-transparent mb-5" />

                {/* 本文 */}
                <p className="font-gothic text-[14px] leading-[2] text-sumi-100/75">
                  {card.description}
                </p>

                {/* 右下の角印 */}
                <div className="mt-6 pt-4 border-t border-kin-400/10 flex justify-end">
                  <span className="kana-label opacity-60">神無月</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}