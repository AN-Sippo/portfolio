import type { LinksFunction } from "@remix-run/node";
import { EngineerIcon, links as iconLinks } from "~/components/engineerIcon";

export const links: LinksFunction = () => [
  ...iconLinks(),
  {
    rel: "stylesheet",
    href: "app/routes/_index.css",
  },
];

export default function Home() {
  return <Landing />;
}

const Landing = () => {
  return (
    <section>
      <p>jijiji</p>
      <EngineerIcon />
    </section>
  );
};
