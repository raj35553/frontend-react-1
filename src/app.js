import React from "react";
import ReactDOM from "react-dom/client";

const app = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "This is h1 tag."),
    React.createElement("h2", { id: "heading" }, "Mohit"),
    React.createElement("h3", { id: "heading" }, "This is h3 tag.11dedsew"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "This is h1 tag of child 2.333"),
    React.createElement("h2", { id: "heading" }, "This is h2 tag of child 212222."),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(app);
