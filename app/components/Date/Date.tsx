import { LinksFunction } from "@remix-run/cloudflare";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "assets/css/date-display.css",
  },
];

export const DateDisplay = ({ date }: { date: Date }) => {
  const displayDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return <h6 className="date-display-h6">{displayDate}</h6>;
};
