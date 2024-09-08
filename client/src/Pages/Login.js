import {React,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast';
function Login() {

  const [userdata,setUserdata] = useState(null);
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [usertype,setUserType] = useState('');
   const [Token,setToken] = useState(null);
    const navigate = useNavigate();
  const HandleLogin= async(e) => {
      e.preventDefault();
     try{

      const Response =  await axios.post('/login',{
          username,password,usertype
        });
          if(Response.data.status === 400){
            toast.error(Response.data.message);
          }
          toast.success(Response.data.message);
          localStorage.setItem('jwtToken',Response.data.token);
          setToken(Response.data.token);
        setUserdata(Response.data);
       
        if(Response.data.data.userType === 'admin'){
          navigate('/admin-dashboard');
        }else if(Response.data.data.userType === 'employee'){
          navigate('/emp-dashboard');
        }else if(Response.data.data.userType === 'client'){
          navigate('/client-dashboard');
        }else{
          navigate('/');
        }
      }catch(err){
        console.log(err);
      }
}




    return (
    <>
     
      <div className="content">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="login/images/undraw_remotely_2j6y.png" alt={''} className="img-fluid" />
      </div>
      <div className="col-md-6 contents">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mb-4">
              <h3>Sign In</h3>
              {/* <p className="mb-4">Online Project Management System</p> */}
            </div>
            <form onSubmit={HandleLogin} method="post">
            <div className="form-group first mb-4">
                <label htmlFor="usertype">Select User type</label>
                <select className="form-control" id="usertype" defaultValue={''} onChange={ (e) => setUserType(e.target.value) } required>
                  <option  className="form-control" Value={''} selected>Select User Type</option>
                <option  className="form-control" Value={'admin'}>Admin</option>
                <option  className="form-control" Value={'employee'}>Employee</option>
                <option  className="form-control" Value={'client'}>Client</option>
                
                </select>
              </div>

              <div className="form-group first">
                <label htmlFor="username">Username</label>
                <input type="email" className="form-control" id="username" onChange={(e) =>setUsername(e.target.value)} required/>
              </div>
              <div className="form-group last mb-4">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" defaultChecked="checked" />
                  <div className="control__indicator" />
                </label>
                <span className="ml-auto"><a href="/"  className="forgot-pass">Forgot Password</a></span> 
              </div>
              <input type="submit" defaultValue="Log In" className="btn btn-block btn-primary" />
              <span className="d-block text-left my-4 text-muted">— or login with —</span>
              <div className="social-login">
                <a  href="/"  className="facebook">
                  <span className="icon-facebook mr-3" /> 
                </a>
                <a  href="/"  className="twitter">
                  <span className="icon-twitter mr-3" /> 
                </a>
                <a   href="/" className="google">
                  <span className="icon-google mr-3" /> 
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
    </>
  )
}

export default Login
