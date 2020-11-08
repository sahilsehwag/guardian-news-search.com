import Guardian from "guardian-js";

const api = new Guardian(process.env.REACT_APP_SECRET, true);

export const types = {
  SET_ARTICLES: "articles/set-articles",
  SET_ARTICLE: "articles/set-article",
  SET_SHOW: "articles/set-show"
};

export default (
  state = {
    articles: [],
    article: null,
    show: false
  },
  action
) => {
  switch (action.type) {
    case types.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    case types.SET_ARTICLE:
      return {
        ...state,
        article: action.payload
      };
    case types.SET_SHOW:
      return {
        ...state,
        show: action.payload
      };
    default:
      return state;
  }
};

export const setArticles = (query) => {
  return (dispatch) => {
    api.content
      .search(query, {
        pageSize: 20
      })
      .then((response) => {
        dispatch({
          type: types.SET_ARTICLES,
          payload: JSON.parse(response.body).response.results
        });
      });
  };
};

export const setArticle = (article) => ({
  type: types.SET_ARTICLE,
  payload: article
});

export const setShow = (flag) => ({
  type: types.SET_SHOW,
  payload: flag
});
