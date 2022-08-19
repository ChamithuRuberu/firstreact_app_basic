import './App.css';
import ClassBaseComponent from "./component/classBaseComponent";
import CounterFunction from "./component/functionBaseComponent";


function App() {
  return (
    <div className="App">
      <h1>Hello this is my first react project..!</h1>
        <ClassBaseComponent/>
        <CounterFunction/>
    </div>
  );
}

export default App;
