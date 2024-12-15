import { load } from "js-yaml";
import { readFileSync } from "fs";

export type Article = {
  title: string;
  description: string;
  date: Date;
  href: string;
  eyecatchUrl: string;
};

export type Articles = {
  articles: Array<Article>;
};

const typedLoad = <T = ReturnType<typeof load>>(
  ...args: Parameters<typeof load>
): T => load(...args) as T;

export const loadRecentArticles = (num: number) => {
  const doc = typedLoad<Articles>(
    readFileSync("app/contents/blog.yaml", "utf-8")
  );
  return doc.articles.slice(0, num);
};
