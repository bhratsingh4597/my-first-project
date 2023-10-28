import React from "react";
import  ReactDOM  from "react-dom/client";

const heading1= (
    <h1 id="title" key="h2">
     "Namaste React"
     </h1>
);

const HeaderComponent= ()=>{
    return (
        <div> 
            {heading1}
           <h2>
            Namaste React Component
           </h2>
           <p>This is paragraph</p>
        </div>
    )
}

console.log(heading1)
const rend =ReactDOM.createRoot(document.getElementById("root"));
// console.log(rend)
rend.render(<HeaderComponent />);