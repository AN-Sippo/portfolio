import { LinksFunction } from "@remix-run/cloudflare";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "assets/css/icons.css",
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
  Sippo: "/assets/img/icon_engineer.png",
  Css: "/assets/img/skill_icons/css.svg",
  Html: "/assets/img/skill_icons/html.svg",
  docker: "/assets/img/skill_icons/docker.svg",
  firebase: "/assets/img/skill_icons/firebase.svg",
  golang: "/assets/img/skill_icons/golang.svg",
  gcp: "/assets/img/skill_icons/google-cloud.svg",
  javascript: "/assets/img/skill_icons/js.svg",
  pnpm: "/assets/img/skill_icons/pnpm.svg",
  python: "/assets/img/skill_icons/python.svg",
  react: "/assets/img/skill_icons/react.svg",
  flutter: "/assets/img/skill_icons/flutter.svg",
  remix: "/assets/img/skill_icons/remix.svg",
  typescript: "/assets/img/skill_icons/ts.svg",
  vercel: "/assets/img/skill_icons/vercel.svg",
  nextjs: "/assets/img/skill_icons/nextjs.svg",
  dart: "/assets/img/skill_icons/dart.svg",
  oauth: "/assets/img/skill_icons/oauth.svg",
  qiita: "/assets/img/skill_icons/qiita.png",
  twitter: "/assets/img/skill_icons/twitter.png",
  github: "/assets/img/skill_icons/github.svg",
  arrowDown: "/assets/img/common/arrow_down.svg",
  arrowUp: "/assets/img/common/arrow_up.svg",
  arrowLeft: "/assets/img/common/arrow_left.svg",
  arrowRight: "/assets/img/common/arrow_right.svg",
  code: "/assets/img/common/code.svg",
  outside: "/assets/img/common/outside.svg",
  lifeStatistics: "/assets/img/works/life-statistics.jpg",
  contore: "/assets/img/works/contore.png",
};

export type IconName = keyof typeof IconMaps;
