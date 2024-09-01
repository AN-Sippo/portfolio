import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "app/components/Icons/icons.css",
    },
    {
      rel: "prefetch",
      href: "app/routes/assets/img/arrow_down.svg",
    },
  ];
};

export const ArrowDownIcon = ({ className }: { className: string }) => {
  return (
    <object
      className={`icons-default icons-w54 ${className}`}
      type="image/svg+xml"
      data="app/routes/assets/img/arrow_down.svg"
    ></object>
  );
};
