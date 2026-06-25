// Create element through js 

// const header1=document.createElement('h1');
// header1.innerText ="Happy React Learning";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";


// now dom manipulation --> when we have to change something on our tree // index.html  . 
// const root= document.getElementById('root');
// root.append(header1); // they are chnaging our html now 
// root.append(header2); //

// styles ={fontSize:"30px", backgroundcolor:"blue", color:"white"}

// element.style[key]=element.style.fontSize ; becuase it iterate throught every property like tag styles and children.

//React:Object
//ReactDOM:Object

const React={
    createElement: function(tag,styles,children){
       const element = document.createElement(tag);

       if(typeof children ==='object'){
             for(let val of children)
                element.append(val); // list of array
       }
       else
       element.innerText=children;
   
       //  for iterate over the properties in function and take the values from h1 , object and children  next to font-size , ok 
       for(let key in styles){                                    
        element.style[key]=styles[key];
       }
         return element;
    }
}


const ReactDOM ={
    render: function(element,root){
        root.append(element);
    }
}


const header1 =React.createElement('h1',{fontSize:"30px",backgroundColor:"blue", color:"white"},"Happy React Learning");
const header2=React.createElement('h2',{fontSize:"25px",backgroundColor:"red", color:"white"},"how it is going");

const Li1=React.createElement('li',{},"HTML");
const Li2=React.createElement('li',{},"CSS");
const Li3=React.createElement('li',{},"JavaScript");

const UL= React.createElement('ul',{fontSize:"30px",backgroundColor:"blue", color:"white"},[Li1,Li2,Li3]);

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(UL,document.getElementById('root'));


//Unordered List 
//HTML
//CSS
//Javascript

// but in js when we create the ul ol 
// we ul =document.createElement
// li:create
//li:create
//li:create 
// then append it to ul so same we have to do now so it is array of list then we can use typeof children for appending 