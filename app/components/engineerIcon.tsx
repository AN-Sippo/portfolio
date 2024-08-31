import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "app/components/engineerIcon.css",
    },
  ];
};

export const EngineerIcon = () => {
  return (
    <img
      src="app/routes/assets/img/icon_engineer.png"
      alt="icon"
      className="engineer-icon engineer-icon-50"
    />
  );
};
