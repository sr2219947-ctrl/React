
const element = React.createElement("h1",{id:"first",className:"Sakshi",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello how are you");
const element2 = React.createElement("h1",{id:"second",className:"Sakshi",style:{backgroundColor:"black",fontSize:"30px",color:"white"}},"Hello task completed ");

// ReactDOM.render(element,document.getElementById('root')); // no longer supported in react18
const div1=React.createElement('div',{},[element,element2]);

const Reactroot =ReactDOM.createRoot(document.getElementById('root'));
//React root container : is 
// Reactroot.render(element);
// Reactroot.render(element2);


Reactroot.render(div1);







