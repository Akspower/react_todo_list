//import PropTypes from '.prop-types'


function Student (props){
    return(
 <div className="student">
    <p> Name: {props.name} </p>
    <p> age: {props.age} </p>
    <p> student: {props.isStudent ? "yes ": "no"} </p>
 </div>
    );
}

//default value
// Student.defaultprops={
//     name:"Guest",
//     age:20,
//     isStudent:true,
// }

// Student.propTypes={
//     name: PropTypes.string
// }
export default Student