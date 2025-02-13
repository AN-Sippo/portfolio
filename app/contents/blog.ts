export type Article = {
  title: string;
  description: string;
  date: Date;
  href: string;
  eyecatchUrl: string;
};

export type Articles = Array<Article>;

export const articles: Articles = [
  {
    title: "mvコマンドは移動先が存在しないとリネームになるぞ",
    description:
      "ファイルの移動やろ？？という理解だけで挑み、ハマりかけたので、反省文です。",
    date: new Date("2025-1-18"),
    eyecatchUrl: "/assets/img/skill_icons/qiita.png",
    href: "https://qiita.com/Sippo/items/99ff4cb0e9009cac3899",
  },
  {
    title: "応用情報技術者試験に合格した私の勉強法",
    date: new Date("2024-12-29"),
    description:
      "応用情報技術者試験に無事合格したので、備忘録として勉強法を残しておきます。",
    eyecatchUrl: "/assets/img/skill_icons/qiita.png",
    href: "https://qiita.com/Sippo/items/8a4f6847b5818e8e4ad8",
  },
  {
    title: "データを組み合わせて解析できるiosアプリを作った話",
    date: new Date("2024-12-15"),
    description:
      "Flutter製のiosアプリを無事リリースすることができたので、記録として記事を書いてみました。",
    eyecatchUrl: "/assets/img/skill_icons/flutter.svg",
    href: "https://qiita.com/Sippo/items/aa8eb2b383e54a5b6870",
  },
  {
    title: "viewport、お前誰や",
    date: new Date("2022-12-14"),
    description: "viewport関連でハマったので、調べてみました。",
    eyecatchUrl: "/assets/img/skill_icons/css.svg",
    href: "https://qiita.com/Sippo/items/631b13b8b22ae98e4a33",
  },
];
