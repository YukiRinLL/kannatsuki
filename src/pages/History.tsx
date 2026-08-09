import Timeline from "@/components/history/Timeline";
import SectionDivider from "@/components/effects/SectionDivider";
import Kamon from "@/components/effects/Kamon";

export default function History() {
  return (
    <div className="pt-20">
      {/* 冒頭 — 木瓜紋 */}
      <div className="flex justify-center py-10">
        <Kamon size={40} variant="mokko" className="opacity-50" />
      </div>
      <Timeline />
      {/* 終端 — 鷹羽紋 */}
      <SectionDivider variant="kamon" kamonVariant="taka" className="opacity-60" />
    </div>
  );
}
