import React, { useRef } from "react";
import { Icons } from "../Icons/icons";
import { LinksFunction } from "@remix-run/cloudflare";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "public/assets/css/viewMoreButton.css",
  },
];

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ViewMoreButton = ({ href, ...props }: Props) => {
  return (
    <a href={href} {...props} className="view-more-anchor">
      <div>
        <h4>View More</h4>
        <Icons name="arrowRight" size="14px" />
      </div>
    </a>
  );
};
