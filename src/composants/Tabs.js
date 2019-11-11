import React from "react";
import "./Tabs.css";

const Tabs = props => {
  return (
    <div className="tabs">
      <div
        className={props.tabIndex === 0 ? "selected" : "tab-item"}
        onClick={() => {
          props.onClick(0);
        }}
      >
        Popular Movies
      </div>
      <div
        className={props.tabIndex === 1 ? "selected" : "tab-item"}
        onClick={() => {
          props.onClick(1);
        }}
      >
        Upcoming Movies
      </div>
      <div
        className={props.tabIndex === 2 ? "selected" : "tab-item"}
        onClick={() => {
          props.onClick(2);
        }}
      >
        Top Rated Movies
      </div>
    </div>
  );
};

export default Tabs;
