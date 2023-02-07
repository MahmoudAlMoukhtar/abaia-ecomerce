import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import {useState} from "react";
import OrederList from "./pages/orederList/OrederList";

function App() {
  const [theme, selectTheme] = useState("white");
  document.querySelector("body").style.backgroundColor =
    theme === "black" ? "#27272a" : "white";
  document.querySelector("body").style.color =
    theme === "black" ? "white" : "black";
  return (
    <Router>
      <Topbar theme={theme} selectTheme={selectTheme} />
      <div className="container ">
        <Sidebar theme={theme} selectTheme={selectTheme} />
        <Switch>
          <Route exact path="/">
            <Home theme={theme} selectTheme={selectTheme} />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/oreders">
            <OrederList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
