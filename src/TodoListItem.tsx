import React from 'react';
import './TodoListItem.css';

interface TodoListItemProps {
    todo: Todo,
    // toggleTodo: (selectedTodo: Todo) => void
    //CAN MOVE ToggleTodo DEFINITION TO TYPE FILE TO BE USED UNIVERSALLY.
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label className={todo.complete? "complete" : undefined}>
                <input type="checkbox" checked={todo.complete} onChange={()=> {toggleTodo(todo)}} />    
                {todo.text}        
            </label>
        </li>
    )
}

export default TodoListItemProps;