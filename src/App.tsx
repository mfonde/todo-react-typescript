import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

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

    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== '' &&
        setTodos ([...todos, {text: newTodo, complete: false}])
    }

    return (
        <React.Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodoForm addTodo={addTodo} />
       </React.Fragment>
    );
};

export default App;