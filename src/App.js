import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./views/Home";
import { Shop } from "./views/Shop";
import { NotFound } from "./views/NotFound";
import { ProductByCategory } from "./features/products/ProductByCategory";
import { Product } from "./features/products/Product";
import { Products } from "./features/products/Products";
import { MyAccount } from "./features/user/MyAccount";
import { Login } from "./features/user/Login";
import { Dashboard } from "./features/myAccount/Dashboard";
import { Orders } from "./features/myAccount/Orders";
import { Addresses } from "./features/myAccount/Addresses";
import { AccountDetails } from "./features/myAccount/AccountDetails";
import { Cart } from "./features/cart/Cart";
import { Checkout } from "./features/checkout/Checkout";
import { WhishList } from "./features/whishList/WhishList";
import { Salad } from "./features/salad/Salad";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />}>
          <Route index element={<Products />}></Route>
          <Route path=":category">
            <Route index element={<ProductByCategory />}></Route>
            <Route path=":name/:id" element={<Product />}></Route>
            
          </Route>
        
          <Route path="cart" element={<Cart />}></Route>
          <Route path="whishlist" element={<WhishList />}></Route>
          <Route path="myaccount" element={<MyAccount />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="orders" element={<Orders />}></Route>
            <Route path="addresses" element={<Addresses />}></Route>
            <Route path="account-details" element={<AccountDetails />}></Route>
          </Route>
          <Route path="myaccount/login" element={<Login />}></Route>
          <Route path="checkout/:id?" element={<Checkout />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
