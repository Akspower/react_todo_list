import React,{useState} from 'react'


function ToDoList(){
const [tasks,settasks] = useState([]);
const [newtask,setnewtasks] = useState(" ");


function handleinputchange(event){
 setnewtasks(event.target.value);
}
function addtask(){
if(newtask.trim()!==""){
    settasks(t=>[...t,newtask]);
setnewtasks(" ");
}
}
function deletetask(index){
const updatedtasks=tasks.filter((_,i) => i!==index);
settasks(updatedtasks);
}
function movetaskup(index){
if (index>0){
    const updatedtasks=[...tasks];
    [updatedtasks[index],updatedtasks[index-1]]=
    [updatedtasks[index-1],updatedtasks[index]];
    settasks(updatedtasks);
}
}
function movetaskdown(index){
    if (index<tasks.length-1){
        const updatedtasks=[...tasks];
        [updatedtasks[index],updatedtasks[index+1]]=
        [updatedtasks[index+1],updatedtasks[index]];
        settasks(updatedtasks);
    }
}


return(
    
    <div className="to-do-list">
     <h1>TO-DO_LIST</h1>
     <div>
        <input 
           type='text'
           placeholder="Enter a Task..."
           value={newtask}
           onChange={handleinputchange}
        />
        <button className='add-button' onClick={addtask}>

            Add
        </button>
     </div>
     <ol>
    {tasks.map((task,index) => 
    <li key={index}>
        <span className='text'>{task}
            </span> 
            <button className='delete-button' onClick={()=> deletetask(index)}>Delete</button>
            <button className='move-button' onClick={()=> movetaskup(index)}>UP</button>
            <button className='move-down' onClick={()=> movetaskdown(index)}>DOWN</button>
            </li>
    )}
</ol>
    </div>
);
}
export default  ToDoList