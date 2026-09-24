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
  const links = getSocialLinks("blue");

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
          <span className="kana-label tracking-[0.35em]">CONTACT</span>
          <h2 className="font-mincho text-4xl md:text-5xl tracking-[0.25em] text-kinpaku mt-3 mb-5">
            联系方式
          </h2>
          <div className="mizuhiki-line max-w-sm mx-auto">
            <span className="font-mincho text-xs tracking-[0.4em]">CONTACT US</span>
          </div>
          <p className="font-gothic text-[14px] text-sumi-200/60 mt-6 max-w-lg mx-auto leading-[2]">
            欢迎通过以下方式联系我们。
            <br />
            欢迎加入我们的社区。
          </p>
        </motion.div>

        {/* リンク一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
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
              whileHover={{ y: -3 }}
              className="group relative block"
            >
              <div className="washi-card washi-texture px-5 py-4 h-full relative overflow-hidden transition-all duration-300 hover:border-kin-400/60">
                <div className="relative flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full border shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ color: link.color, borderColor: `${link.color}55`, background: `${link.color}12` }}
                  >
                    {iconMap[link.icon] || <ScrollText size={20} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-mincho text-sm tracking-[0.18em] text-washi-50 group-hover:text-kin-300 transition-colors duration-300">
                      {link.name}
                    </h3>
                    <p className="mt-1 max-w-full truncate text-[11px] tracking-[0.04em] text-sumi-200/60" title={link.detail}>
                      {link.detail}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-sumi-200/40 group-hover:text-kin-300 shrink-0 transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
