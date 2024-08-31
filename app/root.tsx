import { LinksFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "app/root.css",
    },
  ];
};

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="page-container">
          <h1>Hello world!</h1>
          <Outlet />
        </div>

        <Scripts />
      </body>
    </html>
  );
}
