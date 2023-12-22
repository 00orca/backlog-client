import "./App.css";
import Game from "./Components/Game/Game";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <div className="content">
        {/* <Search /> */}
        <Game game_id="31551" />
      </div>
    </div>
  );
}

export default App;
