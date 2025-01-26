import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizza_number = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {pizza_number > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine ,6 creative dishes to choose from. All
            from our stone oven.All organic , All delicious{" "}
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaobj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We are still making our menu :)</p>
      )}
    </div>
  );
}

function Pizza({ pizzaobj }) {
  const { name, ingredients, price, soldOut, photoName } = pizzaobj;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const curr_hour = new Date().getHours();
  const open_hour = 9;
  const closing_hour = 22;
  const is_open = curr_hour >= open_hour && curr_hour <= closing_hour;

  return (
    <footer className="footer">
      {is_open ? (
        <Order closing_hour={closing_hour} />
      ) : (
        <p>
          We are closed. Please visit us between {open_hour}:00 - {closing_hour}
          :00
        </p>
      )}
    </footer>
  );
}

function Order({ closing_hour }) {
  return (
    <div className="order">
      <p>We are open until {closing_hour}:00.Please Vist us or Order Online</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
