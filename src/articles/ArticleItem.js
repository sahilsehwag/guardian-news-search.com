import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "./articles";

const ArticleItem = () => {
  const show = useSelector((state) => state.articles.show);
  const article = useSelector((state) => state.articles.article);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(setShow(false));

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="article-item"
      size={"xl"}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: "lighter" }}>
          {article && article.webTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {article && (
          <iframe
            is="x-frame-bypass"
            title={article.webTitle}
            src={article.webUrl}
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ArticleItem;
