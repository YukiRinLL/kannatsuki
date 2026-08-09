import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

/**
 * 主題切替ボタン — 紅墨金 ⇔ 蒼白
 */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isRed = theme === "red";

  return (
    <button
      onClick={toggle}
      aria-label={isRed ? "青白主題へ切替" : "紅墨金主題へ切替"}
      title={isRed ? "青白主題へ切替" : "紅墨金主題へ切替"}
      className="group relative inline-flex items-center gap-2.5 px-3.5 py-2 border transition-all duration-500"
      style={{
        borderRadius: "2px",
        borderColor: isRed ? "rgb(var(--kin-400) / 0.4)" : "rgb(var(--aka-400) / 0.5)",
        background: isRed ? "rgb(var(--kin-400) / 0.06)" : "rgb(var(--aka-400) / 0.08)",
      }}
    >
      {/* 左：主題アイコン */}
      <span className="relative flex items-center justify-center w-5 h-5">
        {/* 紅主題マーク — 朱い菱 */}
        <motion.span
          animate={{ opacity: isRed ? 1 : 0, scale: isRed ? 1 : 0.5 }}
          transition={{ duration: 0.35 }}
          className="absolute w-4 h-4 rotate-45 border"
          style={{ borderColor: "rgb(var(--aka-400))", background: "rgb(var(--aka-500) / 0.4)" }}
        />
        {/* 蒼主題マーク — 青い丸 */}
        <motion.span
          animate={{ opacity: isRed ? 0 : 1, scale: isRed ? 0.5 : 1 }}
          transition={{ duration: 0.35 }}
          className="absolute w-4 h-4 rounded-full border-2"
          style={{ borderColor: "rgb(var(--aka-400))", background: "rgb(var(--aka-300) / 0.2)" }}
        />
      </span>

      {/* ラベル */}
      <span
        className="font-mincho text-[12px] tracking-[0.25em] transition-colors"
        style={{ color: isRed ? "rgb(var(--kin-300))" : "rgb(var(--aka-300))" }}
      >
        {isRed ? "紅" : "蒼"}
      </span>

      {/* 右：切替 ⟳ */}
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 0.6 }}
        transition={{ duration: 0.4 }}
        className="text-[10px] font-gothic"
        style={{ color: "rgb(var(--washi-100))" }}
      >
        ⇄
      </motion.span>
    </button>
  );
}
