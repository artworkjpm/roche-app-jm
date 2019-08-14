import React from "react";
import { connect } from "react-redux";
//import ClickComponent from "./ClickComponent";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const removeArticle = id => {
  alert(id);
};

const ConnectedList = ({ articles }) => (
  <div>
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
          <button
            className="ml-2"
            onClick={() => {
              removeArticle(el.id);
            }}
          >
            x
          </button>
        </li>
      ))}
    </ul>
    {/* <ClickComponent /> */}
  </div>
);
const List = connect(mapStateToProps)(ConnectedList);

export default List;
