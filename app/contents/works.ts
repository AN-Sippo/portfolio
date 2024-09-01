import { IconName } from "~/components/Icons/icons";

export type Work = {
  title: string;
  name: IconName;
  productUrl?: string;
  sourceCodeUrl?: string;
  description: string;
};
export const works: Array<Work> = [
  {
    title: "life-statistics",
    name: "lifeStatistics",
    productUrl:
      "https://apps.apple.com/jp/app/life-statistics/id6502862822?l=en-US",
    description: `野菜を食べると肌が綺麗になるって本当？
たくさん寝ると集中力が上がるって本当？
ネットで検索しても、正しい情報に辿り着けるとは限りません。
自分自身で実験して、本当に役立つ結論を導きましょう。`,
  },
  {
    title: "こんとれ！",
    name: "contore",
    productUrl: "https://github.com/Al-Mikan/contore",
    sourceCodeUrl: "https://github.com/Al-Mikan/contore",
    description: `技育展2022 「世の中を楽しくする」部門 優秀賞受賞。
作業に集中したい, 可愛いペットを育てたいすべての人をターゲットとした集中力サポートアプリです。
画像認識を用いた姿勢検知による集中力測定、そして、集中度と作業時間に応じたキャラ育成の要素といった多彩な機能を提供します。`,
  },
];
