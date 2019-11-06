import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';

const initialTodos: Todo[] = [
    {text: "Walk the dog", complete: true},
    {text: "Write app", complete: false}
]

const App: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);

    // const toggleTodo = (selectedTodo: Todo) => {
        //IF IMPORTING ToggleTodo FROM TYPE FILE, YOU HAVE ALREADY SPECIFIED THE TYPE.
        const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    // text: todo.text,
                    // ...todo
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo;
        })
        setTodos(newTodos);
    }

    return (
        <React.Fragment>
            <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
            <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
        </React.Fragment>
    );
};

export default App;