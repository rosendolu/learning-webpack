import _ from "lodash";
import "@public/css/style.css";
import "@public/css/index.scss";
import "normalize.css";
import data from "./data";
import { print1 } from "./print";

const Add = (a, b) => {
  return () => {
    return a + b;
  };
};

document.querySelector("#app>.title").textContent = `hello webpack 1+3= ${Add(
  1,
  3
)()} `;
console.log(data.title, JSON.stringify(data));
console.log(print1());
