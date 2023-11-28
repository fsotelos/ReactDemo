import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoListProject/TodoList';
import Weather from "./components/WeatherProject/Weather"
import DisplayClocks from './components/ClockWorldProject/DisplayClocks';
import PasswordGenerator from './components/PasswordGeneratorProject/PasswordGenerator';
function App() {
  return (
    <div className="App">
      {/* <TodoList/>     */}
      {/* <Weather/> */}
      {/* <DisplayClocks/> */}
      <PasswordGenerator/>
    </div>
  );
}

export default App;
