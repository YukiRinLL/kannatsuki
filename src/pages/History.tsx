import Timeline from "@/components/history/Timeline";
import SectionDivider from "@/components/effects/SectionDivider";
import Kamon from "@/components/effects/Kamon";

export default function History() {
  return (
    <div className="relative pt-20">
      {/* 蒼白主题沿用原主页的新月意象 */}
      <div className="fixed top-[14vh] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <svg width="112" height="112" className="md:w-36 md:h-36" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <mask id="history-crescent-mask">
              <rect width="100" height="100" fill="white" />
              <circle cx="60" cy="50" r="42" fill="black" />
            </mask>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="rgb(150 180 220 / 0.6)"
            mask="url(#history-crescent-mask)"
          />
        </svg>
      </div>
      {/* 冒頭 — 木瓜紋 */}
      <div className="relative flex justify-center py-7">
        <Kamon size={40} variant="mokko" className="opacity-50" />
      </div>
      <Timeline />
      {/* 終端 — 鷹羽紋 */}
      <SectionDivider variant="kamon" kamonVariant="taka" className="opacity-60" />
    </div>
  );
}
