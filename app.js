import React from "react";
import ReactDOM  from "react-dom/client";

/* The `const jsxHeading` is creating a React element using JSX syntax.  */
const Heading = ()=>(
    <h1>This is React element using JSX</h1>
);
console.log(Heading);


const TitleComponent = () =>(
    <div id="Parent">
        <Heading/>
        <h1>This is React functional component</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam fugit quis at explicabo repellendus deleniti quas facere saepe temporibus.</p>
    </div> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleComponent/>);

