import './todo.css';
function Todo({title,date,time}){
    return(
        <div className="task">
            <h3>{title}</h3>
            <h3>{date}</h3>
            <h3>{time}</h3>
            
        </div>
    )
}

export default Todo;