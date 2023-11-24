import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoListProyect/TodoList';
import Weather from "./components/WeatherProyect/Weather"

function App() {
  return (
    <div className="App">
      <TodoList/>    
      <Weather/>
    </div>
  );
}

export default App;
