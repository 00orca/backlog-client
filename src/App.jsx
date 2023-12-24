import GamePage from "./pages/GamePage";
import "./App.css";
import Search from "./Components/Search/Search.1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/game/:slug" element={<GamePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
