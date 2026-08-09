import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { getHistoryEvents } from "@/data/historyData";

/**
 * タイムライン — 巻子（かんす） / 掛け軸風
 *  左右交互のカード（両面唐紙）
 *  主題別内容切替
 */
export default function Timeline() {
  const theme = useTheme((s) => s.theme);
  const events = getHistoryEvents(theme);
  const isRed = theme === "red";

  return (
    <section className="relative py-24 px-4 wagara-ajiro">
      <div className="container mx-auto max-w-5xl">
        {/* 見出し */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span className="kana-label tracking-[0.5em]">あゆみ · れきし</span>
          <h2 className="font-mincho text-4xl md:text-5xl tracking-[0.25em] text-kinpaku mt-3 mb-5">
            FC 歴史
          </h2>
          <div className="mizuhiki-line max-w-sm mx-auto">
            <span className="font-mincho text-xs tracking-[0.4em]">HISTORY</span>
          </div>
          <p className="font-mincho text-[14px] text-sumi-200/70 mt-7 leading-[2.2] max-w-xl mx-auto">
            {isRed
              ? "この精鋭部隊には、極限を求め続けた幾多の戦いの軌跡があります。"
              : "この自由部隊には、短いながらも幾筋かの輝く歴史があります。"}
            <br />
            {isRed
              ? "挑戦と挫折の物語、そして勝利の記憶をご覧ください。"
              : "冒険者達と共に刻んだ、大切なあゆみをどうぞご覧ください。"}
          </p>
        </motion.div>

        {/* 軸 — 中央線（金+朱のキリトリ線） */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 kiritori-v md:-translate-x-1/2" />

          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={`${theme}-${index}`}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                className={`relative flex items-start mb-16 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* 節目の朱い印（中央のドット） */}
                <div className="absolute left-6 md:left-1/2 z-20 md:-translate-x-1/2 -translate-y-[2px]">
                  <div className="relative w-7 h-7 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rotate-45 bg-gradient-to-br from-aka-400 to-aka-700 border border-kin-400/60"
                      style={{ boxShadow: "0 0 14px rgb(var(--aka-500) / 0.55)" }}
                    />
                    <div className="absolute inset-[5px] rotate-45 border border-washi-50/40" />
                  </div>
                </div>

                {/* 日付（モバイル：左端に並ぶ、デスク：カードの外） */}
                <div
                  className={`hidden md:block w-[calc(50%-3rem)] shrink-0 ${
                    isLeft ? "text-right pr-12 order-1" : "pl-12 order-1"
                  }`}
                >
                  {/* 日付の朱印 */}
                  <div
                    className={`inline-flex flex-col items-end ${
                      isLeft ? "" : "items-start"
                    }`}
                  >
                    <span className="kana-label tracking-[0.4em] mb-1">
                      {index + 1}
                    </span>
                    <span className="font-mincho text-lg tracking-[0.25em] text-kin-300">
                      {event.dateLabel}
                    </span>
                  </div>
                </div>

                {/* カード本体 */}
                <div
                  className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 shrink-0 ${
                    isLeft ? "md:pr-0 md:order-2" : "md:pl-0 md:order-2"
                  }`}
                >
                  <div className="washi-card washi-texture p-6 md:p-7 group relative corner-ornament hover:border-aka-400/35 transition-all duration-500">
                    {/* モバイル日付 */}
                    <div className="md:hidden mb-4 pb-3 border-b border-kin-400/15">
                      <span className="kana-label tracking-[0.3em] mr-3">
                        {index + 1}
                      </span>
                      <span className="font-mincho tracking-[0.2em] text-kin-300">
                        {event.dateLabel}
                      </span>
                    </div>

                    {/* タイトル */}
                    <h3 className="font-mincho text-xl md:text-[22px] tracking-[0.15em] text-washi-50 group-hover:text-kin-300 transition-colors duration-500 mb-4">
                      {event.title}
                    </h3>

                    {/* 内容 */}
                    <p className="font-gothic text-[14px] leading-[2.1] text-sumi-100/75">
                      {event.description}
                    </p>

                    {/* 下部の小飾り */}
                    <div className="mt-6 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rotate-45 bg-aka-500" />
                      <span className="h-px flex-1 bg-gradient-to-r from-aka-500/40 to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* 終端 — 現在マーク */}
          <div className="relative mt-10 flex justify-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 washi-card">
              <span className="w-2 h-2 rounded-full bg-aka-500 animate-pulse" />
              <span className="font-mincho text-sm tracking-[0.3em] text-kin-300">
                {isRed
                  ? "現在 · 攻略は続く"
                  : "現在 · これからも続きます"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}