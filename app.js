import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Namaste_React_Coding_Assignment/Assets/logo.png";

// Food app design:
/**
 * Header
    -Logo
    -Nav items
*Body
    -Restaurant Container
        ->Restaurant Cards
            Image
            Name of food
            cuisines
            Star rating
            delivery time
             
*Footer
    -Copyrignt
    -Company name
    -Contact
    -Address    
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="Nav-list">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const reslist = [
    {
      "id": 118,
      "image": "https://i.postimg.cc/634bfgPW/mali-sandwich.jpg",
      "Category": "Bengali sweets",
      "Product_name": "Malai Sandwich",
      "price": 240,
      "quantity": "500g"
    },
    {
      "id": 106,
      "image": "https://i.postimg.cc/RhRc90HP/kaju-katli2.jpeg",
      "Category": "Dryfruit sweets",
      "Product_name": "Kaju Katli",
      "price": 650,
      "quantity": "500g"
    },
    {
      "id": 101,
      "image": "https://i.postimg.cc/FFSY514G/Lasun-Sev.jpg",
      "Category": "Namkeen",
      "Product_name": "Lasun Sev",
      "price": 70,
      "quantity": "500g"
    },
    {
      "id": 120,
      "image": "https://i.postimg.cc/J76czPYK/Gulab-Barfi.jpg",
      "Category": "Barfi",
      "Product_name": "Gulab barfi",
      "price": 240,
      "quantity": "500g"
    },
    {
      "id": 107,
      "image": "https://i.postimg.cc/KYJmySqZ/badam-halwa.jpeg",
      "Category": "Dryfruit sweets",
      "Product_name": "Badam halwa",
      "price": 820,
      "quantity": "500g"
    }
  ];

const RestaurantCard = (props) => {
  const { resData } = props;

  const{image,Product_name,price,quantity} = resData

  return (
    <div className="res-card">
      <div className="imgBx">
        <img src={image} alt="Motichur_Laddu" className="res-img" />
      </div>
      <div className="content">
        <h3>Product: <br />{Product_name}</h3>
        <h4>Price: {price}</h4>
        <h4>Quantity {quantity}</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {reslist.map((Restaurant)=>(
          <RestaurantCard key={Restaurant.id} resData={Restaurant}/>
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
