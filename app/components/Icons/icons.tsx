import { LinksFunction } from "@remix-run/cloudflare";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "app/components/Icons/icons.css",
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
  Sippo: "app//assets/img/icon_engineer.png",
  Css: "app//assets/img/skill_icons/css.svg",
  Html: "app//assets/img/skill_icons/html.svg",
  docker: "app//assets/img/skill_icons/docker.svg",
  firebase: "app//assets/img/skill_icons/firebase.svg",
  golang: "app//assets/img/skill_icons/golang.svg",
  gcp: "app//assets/img/skill_icons/google-cloud.svg",
  javascript: "app//assets/img/skill_icons/js.svg",
  pnpm: "app//assets/img/skill_icons/pnpm.svg",
  python: "app//assets/img/skill_icons/python.svg",
  react: "app//assets/img/skill_icons/react.svg",
  flutter: "app//assets/img/skill_icons/flutter.svg",
  remix: "app//assets/img/skill_icons/remix.svg",
  typescript: "app//assets/img/skill_icons/ts.svg",
  vercel: "app//assets/img/skill_icons/vercel.svg",
  nextjs: "app//assets/img/skill_icons/nextjs.svg",
  dart: "app//assets/img/skill_icons/dart.svg",
  oauth: "app//assets/img/skill_icons/oauth.svg",
  qiita: "app//assets/img/skill_icons/qiita.png",
  twitter: "app//assets/img/skill_icons/twitter.png",
  github: "app//assets/img/skill_icons/github.svg",
  arrowDown: "app//assets/img/common/arrow_down.svg",
  code: "app//assets/img/common/code.svg",
  outside: "app//assets/img/common/outside.svg",
  lifeStatistics: "app//assets/img/works/life-statistics.jpg",
  contore: "app//assets/img/works/contore.png",
};

export type IconName = keyof typeof IconMaps;
