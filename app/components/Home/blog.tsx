import { SerializeFrom } from "@remix-run/cloudflare";
import { Article } from "~/utils/blog/blog";
import { Link } from "@remix-run/react";
import { DateDisplay, links as dateLinks } from "~/components/Date/Date";
import {
  ViewMoreButton,
  links as viewMoreButtonLinks,
} from "~/components/Viewmore/ViewMoreButton";
import { LinksFunction } from "@remix-run/react/dist/routeModules";

export const links: LinksFunction = () => [
  ...dateLinks(),
  ...viewMoreButtonLinks(),
  {
    rel: "stylesheet",
    href: "assets/css/home/blog.desktop.css",
    media: "(min-width:800px)",
  },
  {
    rel: "stylesheet",
    href: "assets/css/home/blog.mobile.css",
    media: "(max-width:799px)",
  },
];

type Props = {
  articles: Array<SerializeFrom<Article>>;
  articlesOnly?: boolean;
};
export const Blog = ({ articles, articlesOnly = false }: Props) => {
  return (
    <section className="section" id="blog">
      {!articlesOnly && <h2>Blog</h2>}
      <Articles articles={articles} />
      {!articlesOnly && (
        <div className="view-more-button-container">
          <ViewMoreButton href="/blog" />
        </div>
      )}
    </section>
  );
};

export const Articles = ({
  articles,
}: {
  articles: Array<SerializeFrom<Article>>;
}) => {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.title} />
      ))}
    </ul>
  );
};

const ArticleCard = ({ article }: { article: SerializeFrom<Article> }) => {
  return (
    <li className="article-card" key={article.title}>
      <Link to={article.href} target="_blank">
        <div className="article-container">
          <img src={article.eyecatchUrl} />
          <div className="article-content">
            <h4>{article.title}</h4>
            <DateDisplay date={new Date(Date.parse(article.date))} />
            <p>{article.description}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
