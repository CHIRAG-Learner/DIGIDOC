import React , {Component} from 'react';
import Menu1 from './Menu1';
import Bottom from './Bottom.js';
import {Link} from 'react-router-dom';
import '../Css/Signup.css';
import axios from 'axios';

export default class Signup extends Component
{
  constructor(props){
    super(props);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangefullname=this.onChangefullname.bind(this);
    this.onChangework=this.onChangework.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
      username:'',
      fullname:'',
      work:'',
      password:''
              }
        }
     
    onChangeUsername(e)
    {
      this.setState({username:e.target.value
      });
    }
    onChangefullname(e)
    {
      this.setState({
        fullname:e.target.value
      });
    }
    onChangePassword(e)
    {
      this.setState({
        password:e.target.value
      })
    }
    onChangework(e)
    {
      this.setState({
        work:e.target.value
      })
    }
    onSubmit(e)
    {
      e.preventDefault();
      const user={
        username:this.state.username,
        fullname:this.state.fullname,
        work:this.state.work,
        speciality:document.getElementById("my").value,
        password:this.state.password,
        field:document.getElementById("sup").value,
      }
      axios.post('http://localhost:5000/hey/',user)
    .then(response => {
      if (response.data==="YES") {
        alert("You have been successfully signed in");
        window.location="/Login";
           }
      else{
        alert("SORRY!!Some error occured!!s!");
        window.location="/Login";
      }
    })
      
    }
  render()
  {
  return (
       <div>  
      <Menu1/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
      <form onSubmit={this.onSubmit} >
      <fieldset>
    <legend>SIGN UP:(Only For Doctors)</legend>
    <label>USERNAME:<span className="key">*</span></label>
    <input type="text"  placeholder=" Username.." value={this.state.username} onChange={this.onChangeUsername}/>
    <label>FULL NAME:<span className="key">*</span></label>
    <input type="text"  placeholder="Your name.." value={this.state.fullname} onChange={this.onChangefullname}/>
    <br/>
    <label>FIELD:<span className="key">*</span></label>
    <select  id="sup" autofocus>
  <option value="allopathic">ALLOPATHIC</option>
  <option value="ayurvedic">AYURVEDIC</option>
  <option value="homeopathic">HOMEOPATHIC</option>
   </select>
       <br/>
    <label>SPECIALITY:<span className="key">*</span></label>
    <select  id="my" autofocus>
  <option value="Anaesthesia">ANAESTHESIA</option>
  <option value="Anatomy">ANATOMY</option>
  <option value="Dermatology">DERMATOLOGY</option>
  <option value="Ent">ENT</option>
  <option value="Cardiology">CARDIOLOGY</option>
  <option value="Surgery">GENERAL SURGERY</option>
  <option value="Urology">UROLOGY</option>
  <option value="Neurosurgery">NEUROSURGERY</option>
  <option value="Obst">OBST. & GYNAE</option>
  <option value="Ophthalmology">OPHTHALMOLOGY</option>
  <option value="Orthopaedics">ORTHOPAEDICS</option>
  <option value="Paediatrics">PAEDIATRICS</option>
</select>
       <br/>
    <label>WORK EXPERIENCE:<span className="key">*</span></label><br/>
    <input type="number"  placeholder="Work Experience.." value={this.state.work} onChange={this.onChangework}/>
    <br/>
    <label>PASSWORD:<span className="key">*</span></label>
    <br/>
    <input type="password" className="ayush" placeholder="Enter 6 digit password"  value={this.state.password} onChange={this.onChangePassword}/>
    <br/>
    <br/>
    <input type="submit" value="Submit"/>
    </fieldset>
      </form>
       Back to <Link to="Login">Log In</Link> page..
      <br/>
      <br/>
      <br/>
      <br/>
      <Bottom/>
    </div>
         )
  }
}