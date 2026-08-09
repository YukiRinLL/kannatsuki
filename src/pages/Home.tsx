import Hero from "@/components/home/Hero";
import AboutFC from "@/components/home/AboutFC";
import FCCard from "@/components/home/FCCard";
import SocialLinks from "@/components/home/SocialLinks";
import SectionDivider from "@/components/effects/SectionDivider";
import Kamon from "@/components/effects/Kamon";

export default function Home() {
  return (
    <>
      <Hero />

      {/* 理念前 — 家紋区切り */}
      <SectionDivider variant="kamon" kamonVariant="mitsu" className="opacity-70" />

      <AboutFC />

      {/* 理念 → FC情報 — 青海波区切り */}
      <SectionDivider variant="wave" className="opacity-80" />

      <FCCard />

      {/* FC情報 → 連絡先 — 扇子区切り */}
      <SectionDivider variant="fan" className="opacity-70" />

      <SocialLinks />

      {/* 終端 — 菊紋 */}
      <div className="flex justify-center py-12">
        <Kamon size={36} variant="kiku" className="opacity-40" />
      </div>
    </>
  );
}
