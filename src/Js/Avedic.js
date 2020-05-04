import React from 'react';
import Menu1 from './Menu1';
import '../Css/Avedic.css';
import Bottom from './Bottom';
import {Link} from 'react-router-dom';
function Avedic()
{
  return (
     <div >  
       <Menu1/>
       <br/>
       <p className="trim">Ayurvedic</p>
       <table align="center" width="800" height="500" id="custom">
       <caption className="sanchit">SELECT THE DEPARTMENT BELOW</caption>
  <tr className="nis"> 
  <td><Link to="/AUR_Anaesthesia">ANAESTHESIA</Link></td>
    <td><Link to="/AUR_Anatomy">ANATOMY</Link></td>
    <td><Link to="/AUR_Dermatology">DERMATOLOGY</Link></td>
  </tr>
  <tr>
    <td><Link to="/AUR_Ent"> ENT</Link></td>
    <td><Link to="/AUR_Cardiology">CARDIOLOGY</Link></td>
    <td><Link to="/AUR_Surgery">GENERAL SURGERY</Link></td>
  </tr>
  <tr className="nis">
  <td><Link to="/AUR_Urology">UROLOGY</Link></td>
    <td><Link to="/AUR_Neurosurgery">NEUROSURGERY</Link></td>
    <td><Link to="/AUR_Obst">OBST. & GYNAE</Link></td>
  </tr>
  <tr>
    <td><Link to="/AUR_Ophthalmology">OPHTHALMOLOGY</Link></td>
    <td><Link to="/AUR_Orthopaedics">ORTHOPAEDICS</Link></td>
    <td><Link to="/AUR_Paediatrics">PAEDIATRICS</Link></td>
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
export default Avedic;