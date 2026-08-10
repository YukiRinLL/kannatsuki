import { motion } from "framer-motion";
import { ScrollText, MessageCircle, Github, ExternalLink } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { getSocialLinks } from "@/data/socialLinks";

const iconMap: Record<string, React.ReactNode> = {
  scroll: <ScrollText size={22} strokeWidth={1.5} />,
  "message-circle": <MessageCircle size={22} strokeWidth={1.5} />,
  github: <Github size={22} strokeWidth={1.5} />,
};

/**
 * Social Links — 家紋（カモン）スタイルのボタン
 * 主題別内容切替
 */
export default function SocialLinks() {
  const theme = useTheme((s) => s.theme);
  const links = getSocialLinks(theme);

  return (
    <section id="social" className="relative py-28 px-4 wagara-seigaiha">
      <div className="container mx-auto max-w-5xl">
        {/* 見出し */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <span className="kana-label tracking-[0.5em]">あいて した</span>
          <h2 className="font-mincho text-4xl md:text-5xl tracking-[0.25em] text-kinpaku mt-3 mb-5">
            ご連絡先
          </h2>
          <div className="mizuhiki-line max-w-sm mx-auto">
            <span className="font-mincho text-xs tracking-[0.4em]">CONTACT US</span>
          </div>
          <p className="font-gothic text-[14px] text-sumi-200/60 mt-6 max-w-lg mx-auto leading-[2]">
            仲間のお声かけはいつでも歓迎いたします。
            <br />
            お気軽に以下のリンクから遊びに来てください。
          </p>
        </motion.div>

        {/* リンク一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {links.map((link, index) => (
            <motion.a
              key={`${theme}-${link.name}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative block"
            >
              <div className="washi-card washi-texture p-6 h-full relative overflow-hidden transition-all duration-500 hover:border-aka-400/50">
                {/* 背景の角紋 */}
                <div
                  className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full opacity-[0.08] group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${link.color} 0%, transparent 60%)`,
                  }}
                />

                {/* 上部の朱い線 */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-aka-500/60 to-transparent group-hover:via-aka-400 transition-colors duration-500" />

                <div className="relative flex flex-col items-center gap-4 text-center">
                  {/* 家紋アイコン */}
                  <div
                    className="w-16 h-16 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  >
                    {/* 八角形の台座（和風家紋） */}
                    <div
                      className="absolute inset-0 rotate-45 border transition-colors duration-500"
                      style={{
                        borderColor: `${link.color}40`,
                        background: `${link.color}0d`,
                      }}
                    />
                    <div
                      className="absolute inset-2 rotate-45 border transition-colors duration-500"
                      style={{ borderColor: `${link.color}25` }}
                    />
                    <span className="relative z-10 group-hover:rotate-12 transition-transform duration-500">
                      {iconMap[link.icon] || <ScrollText size={22} />}
                    </span>
                  </div>

                  {/* タイトル */}
                  <h3 className="font-mincho tracking-[0.3em] text-washi-50 group-hover:text-kin-300 transition-colors duration-500">
                    {link.name}
                  </h3>

                  {/* 小飾り矢印 */}
                  <div className="flex items-center gap-2 mt-auto pt-2">
                    <span className="kana-label opacity-70 tracking-[0.3em]">
                      {theme === "red" ? "入隊" : "アクセス"}
                    </span>
                    <ExternalLink
                      size={12}
                      className="text-aka-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* 下部角飾り */}
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-kin-400/30" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-aka-500/30" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}