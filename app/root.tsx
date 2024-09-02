import { LinksFunction } from "@remix-run/cloudflare";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "assets/css/root.css",
    },
  ];
};

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
