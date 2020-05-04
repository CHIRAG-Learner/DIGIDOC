import React,{Component} from 'react';
import Menu1 from './Menu1';
import '../Css/Loginpage.css';
import Bottom from './Bottom';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class Loginpage extends Component
{ 
  constructor(props) {
    super(props);
    this.onChangeHandler=this.onChangeHandler.bind(this);
    this.onClickHandler=this.onClickHandler.bind(this);
    this.onChangeDescription=this.onChangeDescription.bind(this);
    this.onSub=this.onSub.bind(this);
      this.state = {
        selectedFile: null,
        Description:'Description regarding your vedio...',
        redirects:false
      }
  }
  onChangeDescription(e)
  {
    this.setState({Description:e.target.value});
  }
  onChangeHandler(e)
  {
    this.setState({
      selectedFile: e.target.files[0],
      loaded: 0,
    })
  }
  onClickHandler = (e) => 
  {
    e.preventDefault();
    const data = new FormData()
     data.append('file', this.state.selectedFile)
     data.append('Description',this.state.Description);
     data.append('name',this.props.location.state.user);
     var today = new Date();
     var dd = today.getDate();
     var months = ["January", "February", "March", "April", "May", "June", "July", 
                   "August", "September", "October", "November", "December"];
     var mm = months[today.getMonth()]; 
     var yyyy = today.getFullYear();
     today = dd+'-'+mm+'-'+yyyy;
     data.append('date',today);   
    var value =  document.getElementById("mySelect").value+'/'+document.getElementById("my").value+"/";
     axios.post("http://localhost:5000/upload/"+value, data, { 
     })
    .then(res => { 
     console.log(res.statusText)
       })
  }
  
  
  renderRedirect = () => {
    if (this.state.redirects) {
      return <Redirect to='/Login' />
    }
  }
 onSub()
 {
  this.setState({
    redirects: true
  })
   alert("Thanks For the Contribution!!!   Redirecting to Home Page!!!");
 }
  render(){
  return (
     <div >  
       {this.renderRedirect()}
       <Menu1/>
       <br/>
       <br/>
       <br/>
 <h1>FILE UPLOADS<span align="right"><button onClick={this.onSub}>LOG OUT</button></span></h1>
 <form className="shah" onSubmit={this.onClickHandler} enctype="multipart/form-data">
   <fieldset>
   <br/>
   <br/>
    <label><b>Choose the Type of treatment:  </b> </label>
    <select id="mySelect"  autofocus>
  <option value="allopathic">ALLOPATHIC</option>
  <option value="homeopathic">HOMEOPATHIC</option>
  <option value="ayurvedic">AYURVEDIC</option>
</select>
<label><b>Choose the Department:  </b> </label>
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
    <label><b>DESCRIPTION:    </b>  </label>
      <br/>
      
      <textarea name="message" rows="5" cols="100" value={this.state.Description} onChange={this.onChangeDescription}>Description regarding your vedio...</textarea>
      <br/>
  
    <label><b>UPLOAD:    </b>  </label>
    <br/>
    <br/>
    <input  type="file" size="100"  name="file" onChange={this.onChangeHandler} required/>
      <br/>
      <br/>
      
      <br/>
      <input type="submit" value="SUBMIT" width="3px" className="cos" />
    </fieldset>
      </form>
      <br/>

     
<Bottom/>
    </div>
      )
}
}