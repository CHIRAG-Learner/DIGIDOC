import React,{Component} from 'react';
import Menu1 from './Menu1';
import '../Css/Allopathic.css';
import Bottom from './Bottom';
import {Link} from 'react-router-dom';


export default class Allopathic extends Component 
{
  
  render(){
  return (
     <div className="tri">  
       <Menu1/>
       <div className="trim">Allopathic</div>
      <br/>
      <br/>
      <br/>
      <br/>
       <table align="center" width="800" height="500" id="customs">
       <caption className="str">SELECT THE DEPARTMENT BELOW</caption>
       
  <tr className="ol"> 
    <td><Link to="/ALL_Anaesthesia">ANAESTHESIA</Link></td>
    <td><Link to="/ALL_Anatomy">ANATOMY</Link></td>
    <td><Link to="/ALL_Dermatology">DERMATOLOGY</Link></td>
  </tr>
  <tr>
    <td><Link to="/ALL_Ent"> ENT</Link></td>
    <td><Link to="/ALL_Cardiology">CARDIOLOGY</Link></td>
    <td><Link to="/ALL_Surgery">GENERAL SURGERY</Link></td>
  </tr>
  <tr className="ol">
    <td><Link to="/ALL_Urology">UROLOGY</Link></td>
    <td><Link to="/ALL_Neurosurgery">NEUROSURGERY</Link></td>
    <td><Link to="/ALL_Obst">OBST. & GYNAE</Link></td>
  </tr>
  <tr>
    <td><Link to="/ALL_Ophthalmology"><div className="kar">OPHTHALMOLOGY</div></Link></td>
    <td><Link to="/ALL_Orthopaedics">ORTHOPAEDICS</Link></td>
    <td><Link to="/ALL_Paediatrics">PAEDIATRICS</Link></td>
  </tr>
</table>
<br/>
<br/>
<br/>
<br/>


<Bottom/>
    </div>
      )
  }
}