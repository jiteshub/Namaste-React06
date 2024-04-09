import React from "react";
import ReactDOM from "react-dom/client";
import Header from'./Components/Header';
import Body from'./Components/Body';
import Footer from'./Components/Footer';



const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer name="Methi Manuhar" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
