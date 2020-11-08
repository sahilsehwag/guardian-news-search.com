import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ArticlePage from "articles/ArticlesPage";
import ArticleItem from "articles/ArticleItem";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/articles" />
      </Route>

      <Route exact path="/articles">
        <ArticlePage />
      </Route>

      <Route exact path="/article">
        <ArticleItem />
      </Route>
    </Router>
  );
};

export default Routes;
