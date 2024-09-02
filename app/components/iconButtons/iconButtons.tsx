import { LinksFunction } from "@remix-run/cloudflare";
import {
  Icons,
  type Props as IconProps,
  links as iconLinks,
} from "../Icons/icons";

export const links: LinksFunction = () => {
  return [...iconLinks()];
};

type Props = IconProps & {
  href?: string;
};

export const IconButton = ({ href, ...props }: Props) => {
  return (
    <a href={href}>
      <Icons {...props} />
    </a>
  );
};
