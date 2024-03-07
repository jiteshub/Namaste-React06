import React from "react";
import ReactDOM  from "react-dom/client";

/* This JavaScript code is using React to create a simple JSX element, which is a heading element
`<h1>` with the text "This is React element using JSX". */
const jsxHeading = <h1>This is React element using JSX</h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
