function UserGreeting(props){

if(props.isloggedin){
    return <h2 className="welcome-message"> welcome to work space {props.username}</h2> }
    else{
        return <h2> login first</h2>
    }

}
export default UserGreeting