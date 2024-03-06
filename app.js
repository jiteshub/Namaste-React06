import React from "react";
import ReactDOM  from "react-dom";
const heading = React.createElement('h1',{id:'heading'},'Parcel is powerful and important part of react') 

//The line `const heading = react.createElement('h1',{},'Hello world from react')` is creating a React element representing an `<h1>` heading with the text content "Hello world from react".


const root = ReactDOM.createRoot(document.getElementById("root"));

//`const root = ReactDom.createRoot(document.getElementById('root'));` is creating a rootReact component that will be rendered into the HTML element with the id "root". 

/* `*/
root.render(heading);

// console.log(heading)

// nested html structure using react


