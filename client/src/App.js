import './App.css';
import {Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Login/>} exact/>
        <Route path='/register' element={<Register/>} />
      </Routes>
  
    </div>
  );
}

export default App;
