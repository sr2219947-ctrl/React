import React from "react";
import ReactDOM from "react-dom/client"

const names="Rana";
const obj ={
    age:22,
    salary:60
}
const obj2={
    backgroundColor:"black",
    color:"pink",
    fontSize:"30px"
}

//React ELement 
const newElement = (
    <>
        <h1 id="first" className="second">Hello Sakshi {names}</h1>
        <h2 style={obj2}>How's Going your learning journey {obj.age}</h2>
    </>
)

//React Component
//function Based component

function greet(){
    return <h1>Aur what's up</h1>
};

const meet =()=>{
    return <h2>I am doing well </h2>
}

const newElement2= greet();
const newElement3= meet();

// const newElement4 = <>{newElement2}{newElement3}</>
const newElement4 = <>{greet()}{meet()}</>
const Reactroot =ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(newElement);
Reactroot.render(newElement4);

// JSX : Javascript XMl : HTML code direct into js file 





