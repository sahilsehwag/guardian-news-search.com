import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setArticle } from "./articles";
import { setShow } from "./articles";
import { MdOpenInNew } from "react-icons/md";

const ArticleList = () => {
  const articles = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();

  return (
    <div className="article-list">
      <ListGroup>
        {articles.map((article) => {
          return (
            <ListGroup.Item
              key={article.id}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  dispatch(setShow(true));
                  dispatch(setArticle(article));
                }
              }}
              action
              style={{ fontWeight: "lighter" }}
            >
              {/* {article.webTitle} | <b>{article.sectionName}</b> */}
              {article.webTitle}
              <span className="article-list__item-buttons">
                {new Date(article.webPublicationDate).toLocaleDateString()}{" "}
                <a href={article.webUrl} target="_blank" rel="noreferrer">
                  <MdOpenInNew />
                </a>
              </span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default ArticleList;
