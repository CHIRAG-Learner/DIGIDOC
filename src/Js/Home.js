import React from 'react';
import Menu from './Menu';
import Menuu from './Menuu';
import '../Css/home.css';
import Bottom from './Bottom.js';
import {Link} from 'react-router-dom';
import butcher from '../Images/butcher.jpg';


var aa = {
  width: "70%",
  height: "500px",
};
function Home()
{
  return (
     <div className="ss">  
      <Menu/>
      <Menuu/>
       <div className="abc">A Destination for<br/> Advanced Care</div> <div  className="hey">
         <b>"DOCTORS'S ARE MEANT FOR PRESCRIPTION NOT FOR PROMOTION"</b></div>
    
      <figure>
      <img className=" ishant" alt="Smiley face" src={butcher}/>
  <figcaption><b>STOP YOURSELF FROM BEING BUTCHERED...</b></figcaption>
</figure>
      
      <br/>
      <br/>
      <br/>
      <br/>
       <table align="center" width="100" className="akb" style={aa}  >
         <caption><i><b>DECIDE YOUR OWN, THE TYPE OF TREATMENT YOU WANT</b></i></caption>
  <tr>
    <th ><u>ALLOPATHIC</u></th>
    <th ><u>HOMEOPATHIC</u></th>
    <th ><u>AYURVEDIC</u></th>
  </tr>
 <tr>
   <td>
   >Known as <div className="akbar"><b>'English Medicine'</b></div>
   </td>
   <td>
   >Known as<div className="akbar"><b>'Sweet Medicine'</b></div>
   </td>
   <td>
  >Known as <div className="akbar"><b>'Indian Medicine'</b></div>
   </td>
 </tr>
 <tr>
   <td>
   <Link to="Allopathic" className="a">CLICK HERE TO EXPLORE</Link>
   </td>
   <td>
   <Link to="Homeopathic" className="b">CLICK HERE TO EXPLORE</Link>
   </td>
   <td>
   <Link to="Avedic" className="c" >CLICK HERE TO EXPLORE</Link>
   </td>
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
export default Home;