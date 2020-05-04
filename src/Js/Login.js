import React,{Component} from 'react';
import Menu1 from './Menu1';
import Bottom from './Bottom.js';
import {Link} from 'react-router-dom';
import '../Css/Admin.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class Login extends Component 
{
  constructor(props)
    {
      super(props);
      this.onChangeUsername=this.onChangeUsername.bind(this);
      this.onChangePassword=this.onChangePassword.bind(this);
      this.onSu=this.onSu.bind(this);
      this.state={
      username:'',
      password:'',
      redirectToHome: false,
      redirect: false,
      redirectlogin:false
              }
    }
    onChangeUsername(e)
    {
      this.setState({username:e.target.value});
    }

    onChangePassword(e)
    {
      this.setState({password:e.target.value});
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to={{
          pathname: '/Loginpage',
          state: { user: this.state.username }
      }}/>
      }
    }
    renderRedirectLogin = () => {
      if (this.state.redirect) {
        return <Redirect to='/Login' />
      }
    }
 
    onSu(e)
    { 
      e.preventDefault();
      const userr=
          {
         username:this.state.username,
         password:this.state.password
          }
        
           axios.post('http://localhost:5000/hey/login',userr)
           .then(res => {
            //  console.log(res.data);
            if (res.data==="YES") {
              this.setState({
                redirect: true
              })
              alert("Welcome!!!")
                 }
            else{
                this.setState({
                  redirectlogin: true
                })
              alert("SORRY!!You are not valid User!!!")
            }
         })     
     }
    render()
    {
  return (
     <div > 
       {this.renderRedirect()} 
       {/* {this.renderRedirectLogin()}  */}
      <Menu1/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>   
      <form  className="akash" onSubmit={this.onSu}>
      <fieldset>
    <legend>DOCTOR'S LOG IN :</legend>
    <label for="fname">LOGIN NAME:</label>
    <input type="text" value={this.state.username} onChange={this.onChangeUsername} placeholder="UserName without salutation"/>
    <label for="lname">PASSWORD:</label>
    <input type="password"  value={this.state.password} onChange={this.onChangePassword} placeholder="Enter atleast 6-digit password"/>
    <br/>
    <input type="submit" value="Submit"/>
    <br/>
    </fieldset>
      </form>
      New Users <Link to="Signup">Sign Up</Link> here..
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Bottom/>
    </div>
         )

        }
}