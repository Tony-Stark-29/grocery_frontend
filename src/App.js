import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./views/Home";
import { Shop } from "./views/Shop";
import { NotFound } from "./views/NotFound";
import { ProductByCategory } from "./features/shop/ProductByCategory";
import { Product } from "./features/shop/Product";
import { Products } from "./features/shop/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />}>
          <Route index element={<Products/>} ></Route>
          <Route path=":category"  >
            <Route index element={<ProductByCategory/>} ></Route>
            <Route path=":id" element={<Product/>} ></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
