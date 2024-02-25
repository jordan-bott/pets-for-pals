import { createRoot } from "react-dom";
import Pet from "./Pet";

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
