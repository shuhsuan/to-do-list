import React from 'react'
import './App.css';
import {Button, Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faCheck} from '@fortawesome/free-solid-svg-icons'
import UseFetch from './fetch';
import CitySelector from './cityselector';
import WeatherCard from './weathercard'

function Todo({index, todo, markTodo, removeTodo}) { //handles the mark and remove function buttons
  return(
    <div className="todo">
      <span style={{ textDecoration: todo.isDone? "line-through" : ""}}>{todo.text}</span>
      <div className="buttons">
        <Button aria-label="mark-done" id="mark done" variant="outline-success" onClick={() => markTodo(index)}><FontAwesomeIcon icon={faCheck} /></Button>{' '}
        <Button aria-label="delete" id="remove task" variant="outline-danger" onClick={() => removeTodo(index)}><FontAwesomeIcon icon={faXmark} /></Button>
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
        <Form.Label><b>Add Tasks</b></Form.Label> 
        <Form.Control id="textbox" autoComplete="off" type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new task" />
      </Form.Group>
      <Button variant="primary mb-3 mt-2" type="submit">
        Submit
      </Button>
    </Form>
  )
}

function App() {
  const {data, error, isLoading, setUrl} = UseFetch(); //Import elements of UseFetch I need to use

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

const getContent = () => {
  if(error) return <h2>Error when fetching: {error}</h2>
  if(!data && isLoading) return <h2>LOADING...</h2>
  if(!data) return null;
  return <WeatherCard summary={data.current.summary} icon={data.current.icon_num} temp={data.current.temperature} feels={data.current.feels_like} uv={data.current.uv_index} windspeed={data.current.wind.speed}/> //this data refers to the one from UseFetch
}

  return (
    <div className="App">
      <header className="App-header">
      <div id="form">
      <h1 className ="text-center sitcky-top text-white mb-0">To-do List</h1>
          <FormTodo addTodo={addTodo} />
          {todos.map((todo, index) => (
            <div key={index}>
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
            </div>
          ))}
        </div>

        <div id="weather">
        <CitySelector id="selector" onSearch={(city) => {setUrl(`https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${city}&timezone=auto&language=en&units=metric`)}} />
        
        {getContent()}
        </div>

      </header>
    </div>
  );
}

export default App;
