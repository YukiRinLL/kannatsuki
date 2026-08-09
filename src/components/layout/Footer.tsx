import Kamon from "@/components/effects/Kamon";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 wagara-yukiwa">
      {/* 青海波のライン */}
      <div className="seigaiha-border opacity-60" />

      <div className="border-t border-kin-400/15 bg-gradient-to-b from-sumi-900/40 to-sumi-950/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* 装飾の印 — 小さな朱四角 */}
            <div className="flex items-center gap-5">
              <span className="stamp-aka"
                style={{ width: "38px", height: "38px", fontSize: "10px", borderRadius: "2px" }}
              >
                神
              </span>
              <div className="text-left">
                <div className="font-mincho text-base tracking-[0.3em] text-kin-300">
                  神無月 · 终焉
                </div>
                <div className="kana-label tracking-[0.3em]">
                  KANNAZUKI · SHUUEN
                </div>
              </div>
            </div>

            {/* 家紋装飾 — 左右に配する */}
            <div className="flex items-center gap-8 opacity-40">
              <Kamon size={24} variant="mokko" />
              <div className="mizuhiki-line w-72 opacity-80">
                <span className="font-mincho text-xs tracking-[0.4em]">FFXIV · CWLS</span>
              </div>
              <Kamon size={24} variant="mokko" />
            </div>

            <p className="text-[11px] leading-7 text-sumi-200/70 font-gothic max-w-xl">
              Copyright © SQUARE ENIX CO., LTD. All Rights Reserved.
              <br />
              © Crystal Alliance cir. · 神無月 〈终焉〉 部隊ホームページ
              <br />
              当サイトは非公式のファンサイトであり、スクウェア・エニックス様とは一切関係ありません。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
