import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import { getLogo, getLogoFallback } from "@/lib/themeAssets";

/**
 * しょうじ (障子) 風ナビゲーション
 *  墨色背景 + 金の細線 + 朱のアクセント
 *  主題別ロゴ切替
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme((s) => s.theme);
  const logoSrc = getLogo(theme);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "首页", sub: "はじめに", path: "/" },
    { label: "FC历史", sub: "歴史", path: "/history" },
    { label: "成员名簿", sub: "なかま", path: "/members" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shoji-glass py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 flex items-center justify-between">
        {/* Logo + ブランド */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <span className="relative inline-flex">
            <img
              key={theme}
              src={logoSrc}
              alt="Kanazuki"
              className="w-11 h-11 border border-kin-400/40 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
              style={{ borderRadius: "2px" }}
              onError={(e) => {
                const img = e.currentTarget;
                const fallback = getLogoFallback(theme);
                if (img.src !== fallback) {
                  img.src = fallback;
                } else {
                  img.style.display = "none";
                }
              }}
            />
            {/* 朱いワンポイント */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-aka-500" />
          </span>
          <div className="leading-tight">
            <div className="font-yu text-xl tracking-[0.2em] text-washi-50 group-hover:text-kin-300 transition-colors duration-300">
              神無月
            </div>
            <div className="kana-label tracking-[0.25em]">かんなづき</div>
          </div>
        </Link>

        {/* デスクトップナビ */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group py-2 mizuhiki-link ${active ? "active" : ""}`}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <span
                    className={`font-mincho text-[15px] tracking-[0.2em] transition-colors ${
                      active ? "text-kin-300" : "text-washi-100 group-hover:text-kin-200"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span className="kana-label opacity-70 tracking-[0.25em]">
                    {link.sub}
                  </span>
                </div>
              </Link>
            );
          })}

          {/* 区切りの縦棒 */}
          <span className="kiritori-v h-10" />

          {/* 主題切替 */}
          <ThemeToggle />

          <a
            href="https://jp.finalfantasyxiv.com/lodestone/freecompany/9227453424017171422/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2 border border-kin-400/40 hover:border-aka-400/70 transition-all duration-300"
            style={{ borderRadius: "2px" }}
          >
            <span className="w-1.5 h-1.5 bg-aka-500 rotate-45 group-hover:scale-125 transition-transform" />
            <span className="font-mincho text-[14px] tracking-[0.2em] text-washi-100 group-hover:text-aka-300 transition-colors">
              Lodestone
            </span>
          </a>
        </div>

        {/* モバイルトグル */}
        <button
          className="md:hidden text-washi-100 p-2 border border-kin-400/30"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ borderRadius: "2px" }}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {mobileOpen && (
        <div
          className="md:hidden shoji-glass mt-3 mx-4 p-6 flex flex-col gap-5 relative"
          style={{ borderRadius: "2px" }}
        >
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-kin-400/50" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-aka-500/50" />

          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex flex-col gap-0.5"
              >
                <span
                  className={`font-mincho text-[16px] tracking-[0.2em] ${
                    active ? "text-kin-300" : "text-washi-100"
                  }`}
                >
                  {link.label}
                </span>
                <span className="kana-label">{link.sub}</span>
              </Link>
            );
          })}

          <span className="kiritori-v h-px w-full" style={{ height: "1px" }} />

          <ThemeToggle />

          <a
            href="https://jp.finalfantasyxiv.com/lodestone/freecompany/9227453424017171422/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mincho tracking-[0.2em] text-aka-300"
          >
            → Lodestone
          </a>
        </div>
      )}
    </nav>
  );
}