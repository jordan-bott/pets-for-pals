const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me Image"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Mitzie",
      breed: "Princess",
    }),
    React.createElement(Pet, {
      animal: "Gerbil",
      name: "John",
      breed: "Gerbil",
    }),
    React.createElement(Pet, { animal: "Cat", name: "Kuichi", breed: "Mixed" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
