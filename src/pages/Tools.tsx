import { useEffect, useState } from "react";
import { ExternalLink, ChevronDown, Compass, Search, Swords, Home as HomeIcon, Sparkles, ScrollText } from "lucide-react";
import { toolCategories, type ToolCategory, type ToolLink } from "@/data/tools";

const categoryIcons = [Compass, Search, ScrollText, Sparkles, HomeIcon, Swords, Compass];

type LinkStatus = "idle" | "checking" | "online" | "offline";

function getFaviconUrl(url: string) {
  try {
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(new URL(url).hostname)}&sz=64`;
  } catch {
    return "";
  }
}

function getHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ToolLinkItem({ name, description, url }: ToolLink) {
  const [status, setStatus] = useState<LinkStatus>("idle");
  const [latency, setLatency] = useState<number | null>(null);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    let disposed = false;
    setStatus("checking");
    const startedAt = performance.now();
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    void (async () => {
      try {
        // no-cors only exposes reachability, not the remote HTTP status code.
        await fetch(url, { mode: "no-cors", cache: "no-store", signal: controller.signal });
        if (!disposed) {
          setLatency(Math.max(1, Math.round(performance.now() - startedAt)));
          setStatus("online");
        }
      } catch {
        if (!disposed) setStatus("offline");
      } finally {
        window.clearTimeout(timeout);
      }
    })();

    return () => {
      disposed = true;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [url]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 py-2 border-b border-kin-400/10 hover:border-kin-300/40 hover:bg-kin-400/[0.04] transition-colors"
      title={`${name} · ${getHostname(url)}`}
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-sm bg-sumi-700/70 border border-kin-400/15 shrink-0 overflow-hidden">
        {!logoFailed && getFaviconUrl(url) ? (
          <img
            src={getFaviconUrl(url)}
            alt=""
            className="w-4 h-4 object-contain"
            loading="lazy"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="text-[9px] text-kin-300">{name.slice(0, 1)}</span>
        )}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-mincho text-xs tracking-[0.05em] text-washi-100 group-hover:text-kin-200 truncate">
          {name}
        </span>
        <span className="block text-[10px] text-sumi-200/45 mt-0.5 truncate">{description}</span>
      </span>
      <span
        className="flex items-center gap-1 text-[8px] text-sumi-200/35 shrink-0 opacity-75"
        title={`浏览器连通性检测：${status === "checking" ? "检测中" : status === "online" ? `可用，延迟 ${latency} ms` : status === "offline" ? "不可达" : "未检测"}`}
      >
        <span className={`w-1 h-1 rounded-full ${
          status === "online" ? "bg-emerald-400/70" : status === "offline" ? "bg-red-400/70" : status === "checking" ? "bg-kin-300/70 animate-pulse" : "bg-sumi-300/40"
        }`} />
        <span>
          {status === "checking" ? "…" : status === "online" ? `${latency}ms` : status === "offline" ? "×" : "·"}
        </span>
      </span>
      <ExternalLink size={13} className="text-kin-400/60 group-hover:text-kin-300 shrink-0" />
    </a>
  );
}

function getToolCount(node: ToolCategory): number {
  return (node.links?.length ?? 0) + (node.children?.reduce((sum, child) => sum + getToolCount(child), 0) ?? 0);
}

function ToolTree({ node, depth = 0, forceOpen }: { node: ToolCategory; depth?: number; forceOpen?: boolean }) {
  const [open, setOpen] = useState(forceOpen ?? depth === 0);
  const Icon = categoryIcons[depth % categoryIcons.length];
  const hasContent = Boolean(node.links?.length || node.children?.length);

  return (
    <section
      className={
        depth === 0
          ? "washi-card overflow-hidden border-2 border-kin-400/30"
          : depth === 1
          ? "relative mt-4 ml-2 border-l-2 border-kin-400/35 pl-4 md:ml-4 md:pl-6"
          : "relative mt-2 ml-3 border-l border-aka-400/25 pl-3 md:ml-5 md:pl-5"
      }
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-3 text-left group ${
          depth === 0
            ? "p-4 md:p-5 bg-sumi-950/25"
            : depth === 1
            ? "py-3 border-b border-kin-400/20"
            : "py-2 border-b border-aka-400/15"
        }`}
      >
        <span className={`flex items-center justify-center border shrink-0 ${
          depth === 0
            ? "w-9 h-9 border-kin-400/40 text-kin-200"
            : depth === 1
            ? "w-7 h-7 border-kin-400/35 text-kin-300"
            : "w-5 h-5 border-aka-400/30 text-aka-300"
        }`}>
          <Icon size={15} strokeWidth={1.4} />
        </span>
        <span className="flex-1 min-w-0">
          <span className={`block font-mincho tracking-[0.12em] text-washi-50 ${
            depth === 0
              ? "text-xl md:text-2xl font-semibold"
              : depth === 1
              ? "text-base md:text-lg font-medium"
              : "text-sm md:text-[15px]"
          }`}>
            {node.title}
          </span>
          <span className={`block tracking-[0.28em] uppercase mt-1 ${
            depth === 0
              ? "text-[10px] text-kin-200/80"
              : depth === 1
              ? "text-[10px] text-kin-300/70"
              : "text-[9px] text-aka-300/65"
          }`}>
            {node.subtitle}
          </span>
        </span>
        <span className={`hidden sm:block tracking-[0.1em] mr-1 ${depth === 0 ? "text-xs text-kin-200/60" : "text-[10px] text-sumi-200/45"}`}>
          {getToolCount(node)} 个网站
        </span>
        <ChevronDown size={16} className={`text-kin-300 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && hasContent && (
        <div className={`${depth === 0 ? "border-t border-kin-400/15 px-3 pb-3 md:px-4 md:pb-4" : depth === 1 ? "pb-2" : "pb-1"}`}>
          <p className={`font-mincho text-sumi-200/55 leading-6 max-w-2xl ${depth === 0 ? "text-xs py-3" : "text-[11px] py-2"}`}>
            {node.description}
          </p>
          {node.children?.map((child) => (
            <ToolTree key={`${node.title}-${child.title}`} node={child} depth={depth + 1} forceOpen={forceOpen} />
          ))}
          {node.links && node.links.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-1">
              {node.links.map((link) => (
                <ToolLinkItem key={`${node.title}-${link.name}-${link.url}`} {...link} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default function Tools() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <section className="container mx-auto max-w-6xl px-4">
        <header className="text-center py-8 md:py-10">
          <span className="kana-label tracking-[0.55em]">エオルゼア · しおり</span>
          <h1 className="font-mincho text-3xl md:text-5xl tracking-[0.2em] text-kinpaku mt-3 pl-[0.2em]">
            冒险者工具集
          </h1>
          <div className="mizuhiki-line max-w-sm mx-auto mt-6">
            <span className="font-mincho text-xs tracking-[0.35em]">TOOLS & LINKS</span>
          </div>
          <p className="font-mincho text-xs text-sumi-200/60 leading-[1.9] max-w-2xl mx-auto mt-5">
            将散落在艾欧泽亚各处的资料与工具，收进一册随身可取的旅途手记。
            <br />
            选择一个方向，开始下一段探索。
          </p>
        </header>

        <div className="flex items-center justify-between max-w-5xl mx-auto mb-3 px-1">
          <span className="text-[10px] tracking-[0.18em] text-sumi-200/45">
            {toolCategories.reduce((sum, category) => sum + getToolCount(category), 0)} 个外部站点
          </span>
          <button
            type="button"
            className="text-[11px] tracking-[0.12em] text-kin-300 hover:text-kin-200 transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "折叠全部" : "展开全部"}
          </button>
        </div>
        <div className="grid gap-2 max-w-5xl mx-auto">
          {toolCategories.map((category) => (
            <ToolTree key={`${category.title}-${expanded}`} node={category} forceOpen={expanded} />
          ))}
        </div>

        <p className="text-center text-xs text-sumi-200/40 tracking-[0.12em] mt-10">
          外部链接由第三方维护，打开前请确认站点来源与使用环境。
        </p>
      </section>
    </main>
  );
}
