import React from "react";
import  ReactDOM  from "react-dom/client";

const heading1= (
    <h1 id="title" key="h2">
     Namaste React
     </h1>
);

const HeaderComponent= ()=>{
    return (
        <div id="container" className="header"> 
            {heading1}
            <ul className="listed">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallary</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

console.log(heading1)
const rend =ReactDOM.createRoot(document.getElementById("root"));
// console.log(rend)
rend.render(<HeaderComponent />);