
import {Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
import {Toaster} from 'react-hot-toast';



function App() {
  return (
    <div className="App">
     <Toaster position='top-right' toastOptions={{duration: 5000}}/>
      <Routes>
        <Route path='/' element={<Login/>} exact/>
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />

      </Routes>
  
    </div>
  );
}

export default App;
