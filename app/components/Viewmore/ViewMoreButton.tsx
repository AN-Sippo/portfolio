import React, { useRef } from "react";
import { Icons } from "../Icons/icons";
import { LinksFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "public/assets/css/viewMoreButton.css",
  },
];

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export const ViewMoreButton = ({ href, ...props }: Props) => {
  return (
    <Link to={href} {...props} className="view-more-anchor">
      <div>
        <h4>View More</h4>
        <Icons name="arrowRight" size="14px" />
      </div>
    </Link>
  );
};
