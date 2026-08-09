import type { ThemeName } from "@/hooks/useTheme";

export interface HistoryEvent {
  date: string;
  dateLabel: string;
  title: string;
  description: string;
  icon?: string;
}

const casualHistoryEvents: HistoryEvent[] = [
  {
    date: "2019-10-05",
    dateLabel: "2019 / 10 / 05",
    title: "フリーカンパニー設立",
    description:
      "FC Familiar Comrades が設立された日です。冒険の始まり — すべてはここから。",
  },
  {
    date: "2019-10-29",
    dateLabel: "2019 / 10 / 29",
    title: "FCハウス購入",
    description:
      "ラベンダーベッド第19区17番地にSハウスを購入。フリーカンパニーとして初めて家を持つことを可能にした。",
  },
  {
    date: "",
    dateLabel: "日付不明",
    title: "名前変更：The Coffee-break",
    description:
      "名前を The Coffee-break へ変更。略称を Cafe へ。FCのクレストを鳥へ変更。ネスカフェのロゴを参考に作ったからです。",
  },
  {
    date: "",
    dateLabel: "日付不明",
    title: "名前変更：A Cup of Tea → Rest",
    description:
      "主が紅茶好きなことと、世界史好き、そして某動画が流行っていることもあり、名前を A Cup of Tea へ変更。あまりにも略称に CAFE を使うFCが多くかぶるため、Rest に変更。意味は休息など。",
  },
  {
    date: "2020-08-17",
    dateLabel: "2020 / 08 / 17",
    title: "神無月 — 新たな章",
    description:
      "FCは神無月 (Kanazuki) へと生まれ変わる。月に神無し、されど冒険者の灯火は消えず。终焉の名の下に、新たな物語が始まる。",
  },
];

const hardcoreHistoryEvents: HistoryEvent[] = [
  {
    date: "2020-08-17",
    dateLabel: "2020 / 08 / 17",
    title: "神無月 — 結成",
    description:
      "终焉の名のもと、極限を求める者たちが集結した。単なるFCではなく、精鋭部隊としての第一歩。",
  },
  {
    date: "2021-03",
    dateLabel: "2021 / 03",
    title: "零式攻略開始",
    description:
      "エデン零式:覚醒編の攻略に着手。週末を通しての連続プレイ、シミュレーションと検証を重ね、チームの基礎を築いた。",
  },
  {
    date: "2021-07",
    dateLabel: "2021 / 07",
    title: "零式覚醒 全層クリア",
    description:
      "粘り強い挑戦の末、零式覚醒編を全層クリア。チームワークと執拗さの成果。",
  },
  {
    date: "2022-01",
    dateLabel: "2022 / 01",
    title: "絶モグ・ソフィア討滅",
    description:
      "絶滅戦に初挑戦。モグ・ソフィアを撃破し、FCのハードコアとしての実力を示した。",
  },
  {
    date: "2023-02",
    dateLabel: "2023 / 02",
    title: "極パンデモニウム零式",
    description:
      "最凶のコンテンツ、パンデモニウム零式に挑む。週をまたぐ長丁場、精度を極限まで高めた戦い。",
  },
  {
    date: "2024-06",
    dateLabel: "2024 / 06",
    title: "絶エデンクリア",
    description:
      "真なる絶望、エデン。長きにわたる攻略の末、ついに撃破。この瞬間、我々は终焉を現実に変えた。",
  },
  {
    date: "2025-07",
    dateLabel: "2025 / 07",
    title: "黄金の遺産 零式",
    description:
      "新たなる舞台、黄金の遺産。再び極限への挑戦が始まる。神無月の物語は、まだ続く。",
  },
];

export function getHistoryEvents(theme: ThemeName): HistoryEvent[] {
  return theme === "red" ? hardcoreHistoryEvents : casualHistoryEvents;
}