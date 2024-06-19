import React, {useState} from 'react';







function Mycomponenet(){
  const[count,setcount]=useState(0);

  const[car,setcar]=useState({
    year:2024,
    make:"Tata",
    model:"nexon"
  });

  function increment(){
    setcount(count+1);
  };
  function decrement(){
    setcount(count-1);
  };
  function reset(){
    setcount(0);
  };
  
  function handleyearchange(event){
  setcar({...car,year: event.target.value});
  };
  function handlemakechange(event){
    setcar({...car,make: event.target.value});
  };
  function handlemodelchange(event){
    setcar({...car,model: event.target.value});
  };

return(
    <div>
        <p>Count {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>reset</button>
      

      <p>your fvrt car is:{car.year} {car.make} {car.model}</p>

      <input type="number" value={car.year} onChange={handleyearchange} /> <br/>
      <input type="text" value={car.make} onChange={handlemakechange} /> <br/>
      <input type="text" value={car.model} onChange={handlemodelchange} /> <br/>
    </div>
);

}
export default Mycomponenet