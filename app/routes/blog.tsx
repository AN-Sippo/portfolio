import { useLoaderData } from "@remix-run/react";
import { Blog, links as blogLinks } from "~/components/Home/blog";
import { loadRecentArticles } from "~/utils/blog/blog";
import { json } from "@remix-run/react";
import {
  BreadCrumbs,
  links as breadCrumbsLinks,
} from "~/components/Breadcrumb/breadcrumb";

export const links = () => [
  ...blogLinks(),
  ...breadCrumbsLinks(),
  { rel: "stylesheet", href: "/assets/css/routes/blog.css" },
];

export const loader = async () => {
  const articles = loadRecentArticles();
  return json({ articles });
};

export default function BlogPage() {
  const { articles } = useLoaderData<typeof loader>();
  return (
    <div id="route-container">
      <BreadCrumbs />
      <h2>ブログ一覧</h2>
      <Blog articles={articles} articlesOnly />
    </div>
  );
}
