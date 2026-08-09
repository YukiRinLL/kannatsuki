import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import Kamon from "@/components/effects/Kamon";

/**
 * ヒーロー — 風格・朱印風
 */
export default function Hero() {
  const theme = useTheme((s) => s.theme);
  const isRed = theme === "red";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 背景巨大「月」文字 — 神無月=10月に由来 */}
      <span className="sumi-kanji-bg" aria-hidden>月</span>

      {/* 月 — 蒼:新月 / 紅:満月（テーマ切替時にアニメーション再再生しない） */}
      <div className="absolute top-[14%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        {isRed ? (
          /* 満月 */
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full" style={{ background: "rgb(var(--aka-300) / 0.7)" }} />
        ) : (
          /* 新月 — SVGで自然な三日月 */
          <svg width="112" height="112" className="md:w-36 md:h-36" viewBox="0 0 100 100">
            <defs>
              <mask id="crescent-mask">
                <rect width="100" height="100" fill="white" />
                <circle cx="60" cy="50" r="42" fill="black" />
              </mask>
            </defs>
            <circle
              cx="50" cy="50" r="42"
              fill="rgb(150 180 220 / 0.6)"
              mask="url(#crescent-mask)"
            />
          </svg>
        )}
      </div>
      {/* 左に縦書き装飾 */}
      <div className="hidden lg:block absolute left-[5vw] top-[18%] pointer-events-none select-none">
        <div className="tategaki-deco text-lg text-kin-400/40">
          {isRed ? (
            <>
              極限の道は<br />终焉の先に。<br />—— 神無月
            </>
          ) : (
            <>
              旅の続きは<br />月明かりの下で。<br />—— 神無月
            </>
          )}
        </div>
      </div>
      {/* 右に縦書き装飾（二本目） */}
      <div className="hidden lg:block absolute right-[5vw] top-[55%] pointer-events-none select-none">
        <div className="tategaki-deco text-base text-aka-300/25">
          {isRed ? (
            <>
              刀の如く<br />研ぎ澄まし<br />勝利を掴む
            </>
          ) : (
            <>
              花のように<br />咲き誇れ<br />冒険者よ
            </>
          )}
        </div>
      </div>
      {/* 右に朱印 */}
      <div className="hidden lg:block absolute right-[8vw] top-[25%] pointer-events-none select-none">
        <motion.div
          initial={{ rotate: -14, scale: 0.7, opacity: 0 }}
          animate={{ rotate: -8, scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 1, ease: "easeOut" }}
          className="stamp-aka text-center flex flex-col items-center justify-center"
          style={{ width: "124px", height: "124px", borderRadius: "50%" }}
        >
          <span style={{ fontSize: "16px", lineHeight: 1.2 }}>
            {isRed ? "终焉" : "神無月"}
          </span>
          <span style={{ fontSize: "10px", letterSpacing: "0.3em", marginTop: "6px" }}>
            {isRed ? "SHUUEN" : "KANNAZUKI"}
          </span>
        </motion.div>
      </div>

      {/* 左下に家紋装飾 */}
      <div className="hidden lg:block absolute left-[6vw] bottom-[12%] pointer-events-none select-none opacity-20">
        <Kamon size={64} variant="yotsume" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 w-full">
        {/* 水引 ライン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="w-full max-w-3xl flex items-center gap-6 mb-8"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-kin-400/40 to-kin-400/20" />
          <span className="font-mincho text-kin-400 text-xs tracking-[0.6em]">
            FF XIV
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-aka-500/30 to-aka-500/15" />
        </motion.div>

        {/* かな */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-10 kana-label text-[0.8rem]"
        >
          かんなづき · KANNAZUKI
        </motion.div>

        {/* タイトル — 神無月 */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.55, ease: "easeOut" }}
          className="relative font-yu text-[64px] md:text-[110px] lg:text-[140px] leading-[1.05] text-kinpaku tracking-[0.18em] mt-2"
        >
          神無月
          {/* 右上の朱い小印 */}
          <span
            className="stamp-aka absolute md:-top-2 md:-right-14 lg:-right-16 text-center"
            style={{
              width: "44px",
              height: "44px",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          >
            印
          </span>
        </motion.h1>

        {/* 帯文 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="relative mt-6 flex items-center gap-4"
        >
          <span className="w-10 h-px bg-aka-500/50" />
          <p className="font-mincho text-sm md:text-[15px] tracking-[0.3em] text-washi-100/80">
            {isRed ? "極限攻略 ・ 精鋭部隊" : "フリーカンパニー ・ クロスワールドリンクシェル"}
          </p>
          <span className="w-10 h-px bg-kin-400/50" />
        </motion.div>

        {/* 英文副題 */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-3 text-xs md:text-sm tracking-[0.38em] text-sumi-200/50 font-gothic uppercase"
        >
          {isRed ? "Hardcore Raiding & Elite Squad" : "Free Company & Cross-world Linkshell"}
        </motion.p>

        {/* スクロールインジケータ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-mincho text-xs tracking-[0.5em] text-sumi-200/60">
            スクロール
          </span>
          <div className="kiritori-v h-10" />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="text-aka-400" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}