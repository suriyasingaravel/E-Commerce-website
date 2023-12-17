import './App.css';
import AllRoutes from './Components/AllRoutes';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     {/* <Home/> */}
    </div>
  );
}

export default App;
