// //nested structure
// const nested = React.createElement(
//     'div',
//     {id:'parent'},

//     React.createElement(
//         'div',
//         {id:'child'},
        
//         React.createElement('h1',{},'I am h1 tag')
//     )
// );

// console.log(nested)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(nested)

//siblings

/* This JavaScript code is creating a nested structure of HTML elements using React's `createElement`function.

 The code creates a parent `div` element with an id of 'parent', which contains a child `div` element with an id of 'child'. 
 
 Inside the child `div`, there are two sibling elements: an `h1`
element with the text 'I am h1 tag' and an `h2` element with the text 'I am h2 tag'. */

// const siblings = React.createElement(
//     'div',
//     {id:'parent'},

//     React.createElement(
//         'div',
//         {id:'child'},
        
//         [React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')]
//     )
// );

// console.log(siblings)




// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(siblings)


{/* <div id = 'parent'>

    <div id = 'child 1'>
        <h1></h1>
        <h2></h2>
    </div>
    <div id = 'child 2'>
        <h1></h1>
        <h2></h2>
    </div>

</div> */}

/* The code you provided is creating a nested structure of HTML elements using React's `createElement`
function. */
/* The `const parent` code snippet is creating a nested structure of HTML elements using React's
`createElement` function. */
const parent = React.createElement(
    'div',
    {id:'parent'},

    [React.createElement(
        'div',
        {id:'child 1'},
        
        [React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')]
    ),
      React.createElement(
        'div',
        {id:'child 2'},
        [React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')]
    )]

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)

console.log(parent)