import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "app/components/Icons/icons.css",
    },
  ];
};

export const SkillIcon = ({ name }: { name: IconName }) => {
  return (
    <img
      alt="icon"
      src={SkillIcons[name]}
      className="icons-default icons-w64"
    />
  );
};

const SkillIcons = {
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
};

export type IconName = keyof typeof SkillIcons;
