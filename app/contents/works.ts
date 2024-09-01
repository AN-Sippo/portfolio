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
];
