import React from 'react'
import './App.css';
import {Button, Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faCheck} from '@fortawesome/free-solid-svg-icons'

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample task",
      isDone: false
    }
  ]); //State hook to store tasks and it's status of completion

  const addTodo = text => {
    const newTodos = [...todos, {text}]; //Using spread operator to append the next task to the list 
    setTodos(newTodos); //Add the new task to the to-do's list
  }

  const markTodo = index => {
    const newTodos = [...todos]; //Using spread operator to copy all tasks 
    newTodos[index].isDone = true; //So that the required task can be marked done
    setTodos(newTodos) //And it can be updated by setting the newTodos as todos
  }

  const removeTodo = index => {
     const newTodos = [...todos]; //Using spread operator to copy all tasks
     newTodos.splice(index, 1); //So that the required task can be removed (start at index, delete 1) 
     setTodos(newTodos); //And the list can be updated 
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className ="text-center">To-do List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo 
                key={index}
                index={index}
                todo = {todo}
                markTodo = {markTodo}
                removeTodo = {removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </header>
    </div>
  );
}

function Todo({index, todo, markTodo, removeTodo}) { //handles the mark and remove function buttons
  return(
    <div className="todo">
      <span style={{ textDecoration: todo.isDone? "line-through" : ""}}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}><FontAwesomeIcon icon={faCheck} /></Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}><FontAwesomeIcon icon={faXmark} /></Button>
      </div>
    </div>
  )
}

function FormTodo({addTodo}){
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label> 
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default App;
