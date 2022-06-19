import { Fragment } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodos from './components/ListTodos';

function App() {
  return <Fragment>
    <div className="container">
      <CreateTodo />
      <ListTodos />
    </div>
  </Fragment>;
}

export default App;
