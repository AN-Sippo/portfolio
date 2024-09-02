import { LinksFunction } from "@remix-run/cloudflare";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "public/assets/css/icons.css",
    },
  ];
};

export type Props = {
  name: IconName;
  size?: string;
  circle?: boolean;
  className?: string;
};

export const Icons = ({ name, size, circle, className }: Props) => {
  return (
    <img
      alt="icon"
      src={IconMaps[name]}
      style={size ? { width: size, height: size } : {}}
      className={`icons-default icons-w64 ${
        circle ? "icons-circle" : ""
      } ${className}`}
    />
  );
};

const IconMaps = {
  Sippo: "public/assets/img/icon_engineer.png",
  Css: "public/assets/img/skill_icons/css.svg",
  Html: "public/assets/img/skill_icons/html.svg",
  docker: "public/assets/img/skill_icons/docker.svg",
  firebase: "public/assets/img/skill_icons/firebase.svg",
  golang: "public/assets/img/skill_icons/golang.svg",
  gcp: "public/assets/img/skill_icons/google-cloud.svg",
  javascript: "public/assets/img/skill_icons/js.svg",
  pnpm: "public/assets/img/skill_icons/pnpm.svg",
  python: "public/assets/img/skill_icons/python.svg",
  react: "public/assets/img/skill_icons/react.svg",
  flutter: "public/assets/img/skill_icons/flutter.svg",
  remix: "public/assets/img/skill_icons/remix.svg",
  typescript: "public/assets/img/skill_icons/ts.svg",
  vercel: "public/assets/img/skill_icons/vercel.svg",
  nextjs: "public/assets/img/skill_icons/nextjs.svg",
  dart: "public/assets/img/skill_icons/dart.svg",
  oauth: "public/assets/img/skill_icons/oauth.svg",
  qiita: "public/assets/img/skill_icons/qiita.png",
  twitter: "public/assets/img/skill_icons/twitter.png",
  github: "public/assets/img/skill_icons/github.svg",
  arrowDown: "public/assets/img/common/arrow_down.svg",
  code: "public/assets/img/common/code.svg",
  outside: "public/assets/img/common/outside.svg",
  lifeStatistics: "public/assets/img/works/life-statistics.jpg",
  contore: "public/assets/img/works/contore.png",
};

export type IconName = keyof typeof IconMaps;
