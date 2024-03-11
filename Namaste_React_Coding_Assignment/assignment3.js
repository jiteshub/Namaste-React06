import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Assets/projectlogo2.png";

// const Header = React.createElement('div',{className:"title"}, [
//   React.createElement("h1", {}, "I am h1"),
//   React.createElement("h2", {}, "I am h2"),
//   React.createElement("h3", {}, "I am h3"),
// ]);

// const TitleComponent = ()=>(
//     <div className="Title">
//         <h1>I am h1 of functional component</h1>
//         <h2>I am h2 of functional component</h2>
//         <h3>I am h3 of functional component</h3>
//     </div>
// );

// const JSXhead = (
//     <div className="title">
//         {<TitleComponent/>}
//         <h1>I am h1 of class title using JSX</h1>
//         <h2>I am h2 of class title using JSX</h2>
//         <h3>I am h3 of class title using JSX</h3>
//     </div>
// )

const HeaderComponent = () => (
    <div className="header">
      <ul>
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li>Search</li>
        <li>User</li>
      </ul>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
