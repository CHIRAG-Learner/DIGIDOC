import React, { Component } from 'react';
import axios from 'axios';
import Menu1 from './Menu1';
import Bottom from './Bottom';
import '../Css/Adminpage.css';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

const Exercise = props => (
  <tr >
    <td className="sap">{props.exercise.username}</td>
    <td className="sap">DR.{props.exercise.fullname}</td>
    <td className="sap">{props.exercise.field}</td>
    <td className="sap">D.M.({props.exercise.speciality})</td>
    <td className="sap">{props.exercise.approve}</td>
    <td className="sap">
       <Link to="#" onClick={()=> {props.UpdateExercise(props.exercise._id) }} >Give Access</Link>
    </td>
    <td className="sap">
       <Link to="#" onClick={()=> {props.RevokeExercise(props.exercise._id) }}>Revoke Access</Link>
    </td>
    <td className="sap">
       <Link to="#" onClick={()=> {props.deleteExercise(props.exercise._id) }}>Delete Data</Link>
    </td>
  </tr>
)

export default class Adminpage extends Component {
  constructor(props) {
    super(props);
    this.UpdateExercise = this.UpdateExercise.bind(this)
    this.deleteExercise = this.deleteExercise.bind(this)
    this.RevokeExercise=this.RevokeExercise.bind(this)
    this.onSub=this.onSub.bind(this);
    this.state = {exercises: [],unauth:false};
                }
  componentDidMount() 
  {
        window.addEventListener("beforeunload", this._confirm);
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = this._backConfirm;
        axios.get('http://localhost:5000/hey/')
       .then(response => {
        if(response.data=='unauthorised')
        {
          this.setState({unauth:true})
        }
        else{
          this.setState({ exercises: response.data })
        }
        
      })
      .catch((error) => {
        console.log(error);
      })
  }
  componentDidUpdate(){

    window.onpopstate  = (e) => {
      this.setState({unauth:true})
   }
  
      }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this._confirm);
    window.onpopstate = () => { }
}

_backConfirm = async () => {
    let event = window.confirm("Changes that you may not be saved.");
    if(event){
        window.history.pushState(null, "", window.location.href);
    }
}

_confirm = (e) => {
    var confirmationMessage = "\o/";
    e.returnValue = confirmationMessage;
    return confirmationMessage;
}

  UpdateExercise(id) {
    axios.put('http://localhost:5000/hey/update/'+id)
    .then(
         window.location.reload(),
      alert("ACCESS GRANTED!!!")
    );
  }
  deleteExercise(id) {
    axios.delete('http://localhost:5000/hey/'+id)
    .then(

     window.location.reload(),
      alert("DATA DELETED SUCCESSFULLY!!!")
    );
  }
  RevokeExercise(id) {
    axios.put('http://localhost:5000/hey/revoke/'+id)
    .then(
      // <Adminpage/>
       window.location.reload(),
      alert("ACCESS REVOKED!!!")
    );
  }
   
  onSub()
  {
    axios.put('http://localhost:5000/hey/logout/')
    .then(
      this.setState({unauth:true}),
      window.location=('/'),
      alert("Redirecting to Home Page!!!")
    )
    .catch((error) => {
      console.log(error);
    })
  }
  
  exerList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} UpdateExercise={this.UpdateExercise} RevokeExercise={this.RevokeExercise} 
    deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    if (this.state.unauth) {
      return <Redirect to={{
          pathname : '/',
          // isVerified: true
      }}/>;
    }
    return (
      <div>
        <Menu1/>
        <br/>
        <br/>
        <br/>
        <h1 className="akba">ADMIN'S ACCOUNT<span align="right"><button onClick={this.onSub}>LOG OUT</button></span></h1>
        <h3 className="mani"><b>REGISTERED DOCTORS</b></h3>
        <table id="customers" align="center">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>FullName</th>
              <th>Field</th>
              <th>Speciality</th>
              <th>Approve</th>
              <th>Access</th>
              <th>Revoke Access</th>
              <th>Delete Data</th>
            </tr>
          </thead>
          <tbody>
            { this.exerList() }
          </tbody>
        </table>
        <br/>
        <br/>
        <br/>
        <Bottom/>
      </div>
    )
  }
}