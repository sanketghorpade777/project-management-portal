import {Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toaster} from 'react-hot-toast';
import { AuthProvider } from "./AuthContext/authContext";
import AdminDashboard from './Components/Admin/Dashboard';
import EmpDashboard from './Components/Employee/Dashboard';
import ClientDashboard from './Components/Client/Dashboard';
import AddEmp  from './Pages/Admin/addEmp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Toaster position='top-right' toastOptions={{duration: 5000}}/>
      <Routes>
        <Route path='/' element={<Login/>} exact/>
        <Route path='/register' element={<Register/>} />

        <Route path='/emp-dashboard' element={<EmpDashboard/>} />
        <Route path='/client-dashboard' element={<ClientDashboard/>} />
       
       {/* Admin Routes Start */}
       <Route path='/admin-dashboard' element={<AdminDashboard/>} />
       <Route path='/add-emp' element={<AddEmp/>} />
       {/* Admin Routes End */}


      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;





