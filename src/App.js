import "./reset.css";
import Cards from "./Components/Cards/index.js";
import Carrossel from "./Components/Carrossel/index.js";
import Video from "./Components/Video/index.js";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Cards />
      <div className="teste">
        <Carrossel />
      </div>
      <div className="sla">
        <Video />
      </div>
    </div>
  );
}

export default App;
