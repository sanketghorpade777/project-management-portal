import './App.css';
import {Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Login/>} exact/>
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
  
    </div>
  );
}

export default App;
