import React from "react";
import  ReactDOM  from "react-dom/client";

const heading1=React.createElement(
    "h1",
    {
        id:"title"
    },
"Namaste React");

const heading2=React.createElement(
    "h3",
    {
        id:"paragraph"
    },
"Namaste React");

const container=React.createElement(
    "div",
    {
        id:"container"
    },
    [heading1,heading2]
);
console.log(heading1)
const rend =ReactDOM.createRoot(document.getElementById("root"));
console.log(rend)
rend.render(container);