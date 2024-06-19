
import React,{useState,useEffect} from "react";
function Mycomp(){
const[width,setwidth]=useState(window.innerWidth);
const[height,setheight]=useState(window.innerHeight);
//     const[count,setcount]=useState(0);
//     useEffect(() => {
//         document.title='count: ${count} ' ;
//       },[count]);
// function addcount(){
//    setcount(c=> c+1);
// }
useEffect(()=>{
    window.addEventListener("resize",handleresize);
    console.log("event listener added")
})
 
 function handleresize(){
    setwidth(window.innerWidth);
    setheight(window.innerHeight);
 }
return(
 <>
 {/* <p>Count: {count}</p>
 <button onClick={addcount}>Add</button> */}

<p>window width:{width}px </p>
<p>window height:{height}px </p>


 </>
);

}
export default Mycomp;