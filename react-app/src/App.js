import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Home from "./components/Home";

import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Users from "./components/Users";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
