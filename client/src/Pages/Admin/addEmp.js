import {React,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../Components/Admin/Header';
import Sidebar from '../../Components/Admin/Sidebar';
import Footer from '../../Components/Admin/Footer';
function AddEmp() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [gender,setGender] = useState('');
  const [dept,setDept] = useState('');
  const [upload,setUpload] = useState('');
  const [city,setCity] = useState('');
  const [address,setAddress] = useState('');
  const HandleSubmit = async(e) => {
    e.preventDefault();
     try{
      const Response =  await axios.post('/api/admin/add-emp',{
        name,email,password,gender,dept,upload,city,address
        });
        console.log(Response);
      }catch(e){
         console.log(e);
      }

    console.log(name,email,password,gender,dept,upload,city,address);

 }


  return (
    <div>
       <div className="container-scroller" >
           <Header/>
           <div className="container-fluid page-body-wrapper">

      <Sidebar/>
      <div className="main-panel">
      <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Add New Employee</h4>
                    {/* <p className="card-description"> Add Employee </p> */}
                    <form className="forms-sample" onSubmit={HandleSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" onChange={(e) => setName(e.target.value) } />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail3">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email"  onChange={(e) => setEmail(e.target.value) } />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword4">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.value) } />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleSelectGender">Gender</label>
                        <select className="form-select" id="exampleSelectGender" onChange={(e) => setGender(e.target.value) }>
                          <option value='male'>Male</option>
                          <option value='female'>Female</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleSelectGender">Department</label>
                        <select className="form-select" id="exampleSelectGender" onChange={(e) => setDept(e.target.value) }>
                          <option value='dev'>Dev</option>
                          <option value='design'>Design</option>
                          <option value='testing'>Testing</option>
                          <option value='devops'>Devops</option>
                          <option value='seo'>SEO</option>
                        </select>

                        
                      </div>


                
                 

                      <div className="form-group">
                        <label>Profile Upload</label>
                        <input type="file" name="img" className="file-upload-default" onChange={(e) => setUpload(e.target.files) }/>
                        <div className="input-group col-xs-12">
                          <input type="text" className="form-control file-upload-info " disabled={true} placeholder="Upload Image" />
                          <span className="input-group-append">
                            <button className="file-upload-browse btn btn-gradient-primary py-1" type="button">Upload Profile</button>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputCity1">City</label>
                        <input type="text" className="form-control" id="exampleInputCity1" placeholder="Location" onChange={(e) => setCity(e.target.value) }/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleTextarea1">Address</label>
                        <textarea className="form-control" id="exampleTextarea1" rows={4}  onChange={(e) => setAddress(e.target.value) }/>
                      </div>
                      <button type="submit" className="btn btn-gradient-primary me-2">Submit</button>
                      <button className="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              <Footer/>
              </div>
              </div>
              </div>
    </div>
  )
}

export default AddEmp;
