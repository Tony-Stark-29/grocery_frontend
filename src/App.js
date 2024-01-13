import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./views/Home";
import { Shop } from "./views/Shop";
import { NotFound } from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} >
            
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
