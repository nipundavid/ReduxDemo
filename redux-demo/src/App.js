import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, SignIn } from "./actions";

import Nav from "./RouterFiles/Nav";
import Shop from "./RouterFiles/Shop";
import About from "./RouterFiles/About";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./RouterFiles/ItemDetail";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    // <div className="App">
    /*  { <h1> Counter: {counter} </h1>{" "}
      <button onClick={() => dispatch(increment(5))}> + </button>{" "}
      <button onClick={() => dispatch(decrement())}> - </button>{" "}
      <button onClick={() => dispatch(SignIn())}> SignIn </button>{" "}
      {isLogged ? <h3> Welcome</h3> : <h3> Please log in !! </h3>} }     */
    // </div>

    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const MainPage = () => (
  <div>
    <h1>Main Page</h1>
  </div>
);

export default App;
