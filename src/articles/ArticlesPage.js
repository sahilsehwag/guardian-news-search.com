import React from "react";
import ArticleList from "articles/ArticleList";
import ArticleSearch from "articles/ArticleSearch";
import ArticleItem from "./ArticleItem";

const ArticlesPage = () => {
  return (
    <div className="article-page">
      <ArticleSearch />
      <ArticleList />
      <ArticleItem />
    </div>
  );
};

export default ArticlesPage;
