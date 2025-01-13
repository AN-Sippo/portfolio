import { useLoaderData } from "@remix-run/react";
import { Articles, Blog, links as blogLinks } from "~/components/Home/blog";
import { loadRecentArticles } from "~/utils/blog/blog";
import { json } from "@remix-run/react";

export const links = () => [...blogLinks()];

export const loader = async () => {
  const articles = loadRecentArticles();
  return json({ articles });
};

export default function BlogPage() {
  const { articles } = useLoaderData<typeof loader>();
  return (
    <div>
      <Blog articles={articles} articlesOnly />
    </div>
  );
}
