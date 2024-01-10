import "./App.css";
import { HeaderAdvertisement } from "./features/navigation/HeaderAdvertisement";
import { Header } from "./features/Header";
import { Hero } from "./features/Hero";
import { Features } from "./features/Features";
import { Footer } from "./features/Footer";
import { Offer } from "./features/offers/Offer";
import { Delivery } from "./features/promotion/Delivery";
import { Moto } from "./features/promotion/Moto";

function App() {
  return (
    <div className="App">
      <HeaderAdvertisement />
      <Header />
      <main>
        <Hero />
        <Features />
        <Offer/>
        <Delivery/>
       <Moto/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
