import { LinksFunction } from "@remix-run/node";

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
  Sippo: "app/routes/assets/img/icon_engineer.png",
  Css: "app/routes/assets/img/skill_icons/css.svg",
  Html: "app/routes/assets/img/skill_icons/html.svg",
  docker: "app/routes/assets/img/skill_icons/docker.svg",
  firebase: "app/routes/assets/img/skill_icons/firebase.svg",
  golang: "app/routes/assets/img/skill_icons/golang.svg",
  gcp: "app/routes/assets/img/skill_icons/google-cloud.svg",
  javascript: "app/routes/assets/img/skill_icons/js.svg",
  pnpm: "app/routes/assets/img/skill_icons/pnpm.svg",
  python: "app/routes/assets/img/skill_icons/python.svg",
  react: "app/routes/assets/img/skill_icons/react.svg",
  flutter: "app/routes/assets/img/skill_icons/flutter.svg",
  remix: "app/routes/assets/img/skill_icons/remix.svg",
  typescript: "app/routes/assets/img/skill_icons/ts.svg",
  vercel: "app/routes/assets/img/skill_icons/vercel.svg",
  nextjs: "app/routes/assets/img/skill_icons/nextjs.svg",
  dart: "app/routes/assets/img/skill_icons/dart.svg",
  oauth: "app/routes/assets/img/skill_icons/oauth.svg",
  qiita: "app/routes/assets/img/skill_icons/qiita.png",
  twitter: "app/routes/assets/img/skill_icons/twitter.png",
  github: "app/routes/assets/img/skill_icons/github.svg",
  arrowDown: "app/routes/assets/img/common/arrow_down.svg",
  code: "app/routes/assets/img/common/code.svg",
  outside: "app/routes/assets/img/common/outside.svg",
  lifeStatistics: "app/routes/assets/img/works/life-statistics.jpg",
};

export type IconName = keyof typeof IconMaps;
