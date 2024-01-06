import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { NotFound } from "./views/NotFound";
import { HeaderAdvertisement } from "./features/navigation/HeaderAdvertisement";
import { Header } from "./features/Header";
import { Hero } from "./features/Hero";
import { Features } from "./features/Features";
import { Footer } from "./features/Footer";

function App() {
  return (
    <div className="App">
      <HeaderAdvertisement />
      <Header />
      <main>
        <Hero />
        <Features />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
