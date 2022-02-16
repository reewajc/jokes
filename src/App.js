import logo from './logo.svg';
import './App.css';
import Jokes from './components/jokes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const url = 'http://localhost:8080/api/v1/jokes/random'
  return (
    <div className="App">
   
   <Jokes url={url}/>
    </div>
  );
}

export default App;