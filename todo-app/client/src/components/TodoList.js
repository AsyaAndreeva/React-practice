import {useEffect, useState} from 'react';
import {TodoItem} from './TodoItem';
export const TodoList = () => {

    const [todos, setTodos] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:3000/todos`)
        .then(res => res.json())
        .then(result => {
            setTodos(Object.values(result));
        })
    }, []);

    const todoClickHandler = (todo) => {
      fetch(`http://localhost:3000/todos/${todo._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({...todo, isCompleted: !todo.isCompleted})
      }).then(res => res.json())
      .then(modifiedTodo => {
          setTodos(oldTodos => oldTodos.map(todo => todo._id === modifiedTodo._id ? modifiedTodo : todo))
      })
    };

    return (
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => <TodoItem key={todo._id} {...todo} onClick={todoClickHandler}/>)}
          </tbody>
        </table>
      );
      
}