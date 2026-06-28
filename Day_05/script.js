import React,  {useState} from  "react"
import ReactDOM from 'react-dom/client'

function Counter(){
    let [count, setCount] =useState(0);
    let [incValue, setIncValue] = useState(0);
    let [decValue, setDecValue] = useState(0);


    function incrementnumber(){
        // count= count+1;
        setCount(count+1);
        setIncValue(incValue+1);
        // console.log("count value is: ",count);
        // document.querySelector('h1').innerText =`Count is ${count}`;
    }

    function decrementnumber(){
        // count=count-1;
        setCount(count-1);
        setDecValue(decValue + 1)
        // console.log("count value is:", count);
        // document.querySelector('h1').innerText =`Count is ${count}`;
    }

   return (
    <div className="first">
    <h1>Count is:{count}</h1>
    <button onClick={incrementnumber}>Increment {incValue }</button>
    <button onClick={decrementnumber}>Decrement {decValue} </button>
    </div>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)
