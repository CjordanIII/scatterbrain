import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
