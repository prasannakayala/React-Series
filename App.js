const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Iam an h1 element"),
    React.createElement("h2", {}, "Iam an h2 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam an h1 element"),
    React.createElement("h2", {}, "Iam an h2 element"),
  ]),
]);

//reactElement(object) => HTML (Browser understands)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent); //object
