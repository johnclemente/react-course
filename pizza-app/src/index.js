import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* Only render the pizzas if available */}
      {numPizzas > 0 ? (
        //react fragment lets us get around the JSX rule of only having one html parent
        <>
          <p>
            We have some many pizzas that are so amazing! currently we have{" "}
            {numPizzas} pizzas.{" "}
          </p>

          <ul className="pizzas">
            {/* map will loop over the array and create a new array. you need a key when you map */}
            {pizzaData.map((pizza) => (
              <Pizza pizzaObjects={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu</p>
      )}

      {/* <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        photoName={pizzaData[0].photoName}
        price="10"
      /> */}
    </main>
  );
}

function BusinessHours() {
  const currentTime = new Date().getHours();
  const isOpen = currentTime >= 9 && currentTime < 17;
  return isOpen;
}

function Footer() {
  const isOpen = BusinessHours();

  return (
    <footer className="footer">
      {isOpen ? (
        <Order isOpen={isOpen} />
      ) : (
        <p>Please come when we are open. We would love to have you!</p>
      )}
    </footer>
  );
}

function Order({ isOpen }) {
  <div className="order">
    <p>
      It's {new Date().toLocaleTimeString()}. We are{" "}
      {{ isOpen } ? "open! " : "closed. "}
      <button className="btn">Order</button>
    </p>
  </div>;
}

function Pizza({ pizzaObjects }) {
  // if (pizzaObjects.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObjects.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObjects.photoName} alt={pizzaObjects.name} />
      <div>
        <h3> {pizzaObjects.name} </h3>
        <p>{pizzaObjects.ingredients}</p>
        <span>{!pizzaObjects.soldOut ? pizzaObjects.price : "SOLD OUT"}</span>
      </div>
    </li>
  );
}

//we want to render the react app within this div
const root = ReactDOM.createRoot(document.getElementById("root"));
//you can wrap in strict mode for better debugging
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
