import "./App.css";
import Sidenav from "./components/Sidenav";
import DisplayerArea from "./components/DisplayerArea.jsx";
import Player from "./components/Player.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="overall-container">
        <Sidenav />
        <DisplayerArea />
        <Player />
      </div>
    </>
  );
}

export default App;
