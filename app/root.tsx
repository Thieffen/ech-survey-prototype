import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import ECLStyles from "@ecl/preset-ec/dist/styles/ecl-ec.css";
import TailwindStyles from "./styles/app.css";
import Steps from "~/components/layout/Steps";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export function links() {
  return [
    { rel: "stylesheet", href: ECLStyles },
    { rel: "stylesheet", href: TailwindStyles },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="ecl-container my-6">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
