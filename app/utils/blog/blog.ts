import { articles } from "~/contents/blog";

export const loadRecentArticles = (num?: number) => {
  return num ? articles.slice(0, num) : articles;
};
