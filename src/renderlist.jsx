  
  
  
  function List(){
  const fruits=[{id:1,name:"apple",calories:95}, 
               {id:2,name:"banana",calories:45},
               {id:3,name:"orange",calories:10},
               {id:4,name:"pineapple",calories:47}]
  const listitems=fruits.map(fruit=> <li key={fruit.id}> {fruit.name}: 
                                                    &nbsp;{fruit.calories}</li>)
 
 
//  const lowcalfruits=fruits.filter(fruits.calories < 100);
//   const lowcal=lowcalfruits.map(lowcalfruit=> <li key={lowcalfruit.id}>
//    {lowcalfruit.name}: &nbsp;
//    <b>{lowcalfruit.calories}</b>
//  </li>)
  return(
    <div>
    <ul>{listitems}</ul>
     {/* <ol> lowcalfruits</ol> */}
    </div>
  );
}



export default List