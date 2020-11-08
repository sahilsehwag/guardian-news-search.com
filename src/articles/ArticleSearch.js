import { setArticles } from "articles/articles";
import React, { useEffect, useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ArticlesSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {}, [query]);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onClickHandler = (e) => {
    dispatch(setArticles(query));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setArticles(query));
  };

  return (
    <div className="article-search">
      <Form onSubmit={onSubmitHandler} inline>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search News"
            onChange={onChangeHandler}
            style={{ fontWeight: "lighter" }}
          />
          <InputGroup.Append>
            <Button
              variant="primary"
              onClick={onClickHandler}
              style={{ fontWeight: "lighter" }}
            >
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
};

export default ArticlesSearch;
