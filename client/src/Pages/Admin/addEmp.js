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
  const [profile,setProfile] = useState('');
  const [city,setCity] = useState('');
  const [address,setAddress] = useState('');
  const HandleSubmit = async(e) => {
    e.preventDefault();
     try{
      console.log(name,email,password,gender,dept,profile,city,address);
          let formData  = { 
          name :name,
          email :email,
          password :password,
          gender :gender,
          dept :dept,
          profile :profile,
          city :city,
          address :address,
        }
        const data = JSON.stringify(formData);
        console.log(data);
      const Response =  await axios.post('/api/admin/add-emp',data,{
        headers: {
          'Content-Type': 'multipart/form-data',
        
      
        },
      });
        console.log(Response.data);
      }catch(e){
         console.log(e);
      }

  

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
                    <form className="forms-sample" onSubmit={HandleSubmit} >
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
                        <select className="form-select" id="exampleSelectGender"  defaultValue={''} onChange={(e) => setGender(e.target.value) }>
                        <option Value='' selected>Select Gender</option>
                          <option Value='male'>Male</option>
                          <option Value='female'>Female</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleSelectDept">Department</label>
                        <select className="form-select" id="exampleSelectDept" defaultValue={''} onChange={(e) => setDept(e.target.value) }>
                        <option Value='' selected>Select Department</option>
                          <option Value='dev'>Dev</option>
                          <option Value='design'>Design</option>
                          <option Value='testing'>Testing</option>
                          <option Value='devops'>Devops</option>
                          <option Value='seo'>SEO</option>
                        </select>

                        
                      </div>

              
                
                 

                      <div className="form-group">
                        <label>Profile Upload</label>
                        <input type="file" id="upload" className="file-upload-default" onChange={(e) => setProfile(e.target.files[0]) }/>
                        <div className="input-group col-xs-12">
                          <input type="text" className="form-control file-upload-info " disabled={true} placeholder="Upload Image" />
                          <span className="input-group-append">
                            {/* <button className="btn btn-gradient-primary py-1 file-upload-browse" type="button">Upload Profile</button> */}
                            <input type="file"  hidden/>
                            <label for="upload" className='label'>Choose file</label>
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
