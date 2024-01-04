import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { NotFound } from "./views/NotFound";
import { HeaderAdvertisement } from "./components/HeaderAdvertisement";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <HeaderAdvertisement/>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
