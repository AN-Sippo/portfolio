import { LinksFunction } from "@remix-run/cloudflare";
import { Link, useLocation } from "@remix-run/react";
import { Fragment } from "react/jsx-runtime";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "/assets/css/components/breadCrumbs.css",
  },
];

type Route = {
  label: string;
  path: string;
};

const routes: Record<string, Route> = {
  "/": {
    label: "トップ",
    path: "/",
  },
  "/blog": {
    label: "ブログ一覧",
    path: "/blog",
  },
};

const detectRoutes = (path: string): Array<Route> => {
  const segments = path.split("/").filter((value) => value != "");
  let currentPath = "/";
  const paths = [currentPath];
  for (const segment of segments) {
    currentPath = currentPath + segment;
    paths.push(currentPath);
    currentPath = currentPath + "/";
  }
  return paths.map((path) => routes[path]);
};

export const BreadCrumbs = () => {
  const location = useLocation();
  const routeArray = detectRoutes(location.pathname);

  return (
    <nav id="bread-crumbs-root">
      {routeArray.map((route, index) => (
        <Fragment key={route.path}>
          {index !== 0 && <BreadCrumbsSeparator key={route.path + "-sep"} />}
          <BreadCrumbsItem route={route} />
        </Fragment>
      ))}
    </nav>
  );
};

const BreadCrumbsItem = ({ route }: { route: Route }) => {
  return (
    <>
      <Link to={route.path} className="bread-crumbs-item">
        {route.label}
      </Link>
    </>
  );
};

const BreadCrumbsSeparator = () => {
  return <span className="bread-crumbs-separator">{">"}</span>;
};
