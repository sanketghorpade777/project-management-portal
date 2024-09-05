
import {Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './Components/Admin/Dashboard';
import EmpDashboard from './Components/Employee/Dashboard';
import ClientDashboard from './Components/Client/Dashboard';
import {Toaster} from 'react-hot-toast';
import { AuthProvider } from "./AuthContext/authContext";


function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Toaster position='top-right' toastOptions={{duration: 5000}}/>
      <Routes>
        <Route path='/' element={<Login/>} exact/>
        <Route path='/register' element={<Register/>} />
        <Route path='/admin-dashboard' element={<AdminDashboard/>} />
        <Route path='/emp-dashboard' element={<EmpDashboard/>} />
        <Route path='/client-dashboard' element={<ClientDashboard/>} />
       
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
