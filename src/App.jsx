import React, { useState } from 'react';
import InputComp from './Components/InputComp';
import Display from './Components/Display';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState({ tittle: '', description: '', status: 'not-completed' });
  const [filter, setFilter] = useState('all');
  const [editTodo, setEditTodo] = useState('false');


  const addTododata = (newTittle, newDesc) => {
    const newData = {
      'id': todos.length + 1,
      'tittle': newTittle,
      'description': newDesc,
      'status': 'not-completed'
    }
    setTodos([...todos, newData])
  }
  console.log(todos)

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const toggleStatus = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status: todo.status === 'completed' ? 'not-completed' : 'completed' } : todo)));
  };

  function editTodos(id, newTittle, newDesc) {
    let data = todos.map((todo) => (
      {
        ...todo,
        'tittle': todo.id === id ? newTittle : todo.tittle,
        'description': todo.id === id ? newDesc : todo.description
      }
    ))
    console.log(data, id, newTittle, newDesc)
    setTodos(data)
    setEditTodo(false)
  }

  const filteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.status === 'completed');
    } else if (filter === 'not-completed') {
      return todos.filter(todo => todo.status === 'not-completed');
    } else {
      return todos;
    }
  };
  const [newTittle, setNewTittle] = useState()
  const [newDesc, setNewDesc] = useState()

  return (
    <div>
      <center>  <h1>My Todo</h1>

        <InputComp addTodoData={addTododata} setFilter={setFilter} />
        {filteredTodos().map((item, index) => {
          return (
            <>

              <Display
                setNewTittle={setNewTittle}
                setNewDesc={setNewDesc}
                editTodos={editTodos}
                newTittle={newTittle}
                newDesc={newDesc}
                editTodo={editTodo}
                setTodos={setTodos}
                // updateTodo={updateTodo}
                // addTodo={addTodo}
                setEditTodo={setEditTodo} setNewTodo={setNewTodo} toggleStatus={toggleStatus} deleteTodo={deleteTodo} newTodo={newTodo} item={item} index={index} />

            </>
          )
        })}
      </center>
    </div>
  );
};

export default App;