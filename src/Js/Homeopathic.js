import React from 'react';
import Menu1 from './Menu1';
import '../Css/Homeopathic.css';
import Bottom from './Bottom';
import {Link} from 'react-router-dom';
function Homeopathic()
{
  return (
     <div >
       <Menu1/>
       <br/>
       <p className="trim">HOMEOPATHY</p>
       <table align="center" width="800" height="500" id="custom">
       <caption className="sanchit">SELECT THE DEPARTMENT BELOW</caption>
  <tr className="nishit"> 
  <td><Link to="/HOM_Anaesthesia">ANAESTHESIA</Link></td>
    <td><Link to="/HOM_Anatomy">ANATOMY</Link></td>
    <td><Link to="/HOM_Dermatology">DERMATOLOGY</Link></td>
  </tr>
  <tr>
    <td><Link to="/HOM_Ent"> ENT</Link></td>
    <td><Link to="/HOM_Cardiology">CARDIOLOGY</Link></td>
    <td><Link to="/HOM_Surgery">GENERAL SURGERY</Link></td>
  </tr>
  <tr className="nishit">
  <td><Link to="/HOM_Urology">UROLOGY</Link></td>
    <td><Link to="/HOM_Neurosurgery">NEUROSURGERY</Link></td>
    <td><Link to="/HOM_Obst">OBST. & GYNAE</Link></td>
  </tr>
  <tr>
    <td><Link to="/HOM_Ophthalmology">OPHTHALMOLOGY</Link></td>
    <td><Link to="/HOM_Orthopaedics">ORTHOPAEDICS</Link></td>
    <td><Link to="/HOM_Paediatrics">PAEDIATRICS</Link></td>
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
export default Homeopathic;