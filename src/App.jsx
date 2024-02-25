import { createRoot } from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me Image"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Mitzie",
//       breed: "Princess",
//     }),
//     React.createElement(Pet, {
//       animal: "Gerbil",
//       name: "John",
//       breed: "Gerbil",
//     }),
//     React.createElement(Pet, { animal: "Cat", name: "Kuichi", breed: "Mixed" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet animal="Dog" name="Mitzie" breed="princess" />
      <Pet animal="Gerbil" name="John" breed="gerbil" />
      <Pet animal="Cat" name="Kuichi" breed="mixed" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
