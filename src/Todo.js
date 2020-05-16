import React from 'react';
const Todo = ({ todos, deleteTodo}) => {
    
    // Check if State is empty or not
    const todoList = todos.length ? (
        todos.map( todo => {
            return (
               
              <div className="collection-item todo-item" key={todo.id} style={{ display: "flex", justifyContent: "space-between",alignItems:"center"}}>
                <span style={ listStyle }>
                {todo.content}
                </span>
                <span>
                <button onClick={() => { deleteTodo(todo.id); }} style={ styleBtn }>
                    <a className="waves-effect waves-teal btn-flat" style={ span }>Delete</a>
                </button>
                </span>
              </div>
            )})
    ) : ( <p className="center green-text"> You don't have any todo's today !</p> );

    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}

// Style Delete Button
const styleBtn = {
     backgroundColor: "tomato",
     border: "0px",
     borderRadius: "5px",
}

const span = {
    fontSize: "18px",
    color: "white",
    fontWeight: "bold",
}

// Style Todo Content List
const listStyle = {
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "500",
    letterSpacing: "0.5px",
}

export default Todo;
