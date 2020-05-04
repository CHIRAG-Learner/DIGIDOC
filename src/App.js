import React , {Component} from 'react';
import './App.css';
import Home from './Js/Home';
import Allopathic from './Js/Allopathic';
import Homeopathic from './Js/Homeopathic';
import Avedic from './Js/Avedic';
import About from './Js/About';
import Wellness from './Js/Wellness';
import Login from './Js/Login';
import Admin from './Js/Admin';
import Contact from './Js/Contact';
import Signup from './Js/Signup';
import Adminpage from './Js/Adminpage';
import Loginpage from './Js/Loginpage';

import ALL_Anaesthesia from './Js/ALL_Anaesthesia';
import ALL_Anatomy from './Js/ALL_Anatomy';
import ALL_Cardiology from './Js/ALL_Cardiology';
import ALL_Ent from './Js/ALL_Ent';
import ALL_Neurosurgery from './Js/ALL_Neurosurgery';
import ALL_Obst from './Js/ALL_Obst';
import ALL_Ophthalmology from './Js/ALL_Ophthalmology';
import ALL_Orthopaedics from './Js/ALL_Orthopaedics';
import ALL_Paediatrics from './Js/ALL_Paediatrics';
import ALL_Surgery from './Js/ALL_Surgery';
import ALL_Urology from './Js/ALL_Urology';
import ALL_Dermatology from './Js/ALL_Dermatology';

import HOM_Anaesthesia from './Js/HOM_Anaesthesia';
import HOM_Anatomy from './Js/HOM_Anatomy';
import HOM_Cardiology from './Js/HOM_Cardiology';
import HOM_Ent from './Js/HOM_Ent';
import HOM_Neurosurgery from './Js/HOM_Neurosurgery';
import HOM_Obst from './Js/HOM_Obst';
import HOM_Ophthalmology from './Js/HOM_Ophthalmology';
import HOM_Orthopaedics from './Js/HOM_Orthopaedics';
import HOM_Paediatrics from './Js/HOM_Paediatrics';
import HOM_Surgery from './Js/HOM_Surgery';
import HOM_Urology from './Js/HOM_Urology';
import HOM_Dermatology from './Js/HOM_Dermatology';

import AUR_Anaesthesia from './Js/AUR_Anaesthesia';
import AUR_Anatomy from './Js/AUR_Anatomy';
import AUR_Cardiology from './Js/AUR_Cardiology';
import AUR_Ent from './Js/AUR_Ent';
import AUR_Neurosurgery from './Js/AUR_Neurosurgery';
import AUR_Obst from './Js/AUR_Obst';
import AUR_Ophthalmology from './Js/AUR_Ophthalmology';
import AUR_Orthopaedics from './Js/AUR_Orthopaedics';
import AUR_Paediatrics from './Js/AUR_Paediatrics';
import AUR_Surgery from './Js/AUR_Surgery';
import AUR_Urology from './Js/AUR_Urology';
import AUR_Dermatology from './Js/AUR_Dermatology';

 import {BrowserRouter,Route,Switch} from 'react-router-dom';
class App extends Component{
  render()
  {
    return (
       <BrowserRouter>
      <div className="App">
        <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/Allopathic' component={Allopathic}/>
           <Route path='/Homeopathic'  component={Homeopathic}/>
           <Route path='/Avedic' component={Avedic}/>
           <Route path='/About'  component={About}/>
           <Route path='/Wellness' component={Wellness}/>
           <Route path='/Login' component={Login}></Route>
           <Route path='/Admin' component={Admin}></Route>
           <Route path='/Contact' component={Contact}></Route>
           <Route path='/Signup' component={Signup}></Route>
           <Route path='/Adminpage' component={Adminpage}></Route>
           <Route path='/Loginpage' component={Loginpage}></Route>
           <Route path='/ALL_Anaesthesia' component={ALL_Anaesthesia}></Route>
           <Route path='/ALL_Anatomy' component={ALL_Anatomy}></Route>
           <Route path='/ALL_Cardiology' component={ALL_Cardiology}></Route>
           <Route path='/ALL_Ent' component={ALL_Ent}></Route>
           <Route path='/ALL_Neurosurgery' component={ALL_Neurosurgery}></Route>
           <Route path='/ALL_Obst' component={ALL_Obst}></Route>
           <Route path='/ALL_Ophthalmology' component={ALL_Ophthalmology}></Route>
           <Route path='/ALL_Orthopaedics' component={ALL_Orthopaedics}></Route>
           <Route path='/ALL_Paediatrics' component={ALL_Paediatrics}></Route>
           <Route path='/ALL_Surgery' component={ALL_Surgery}></Route>
           <Route path='/ALL_Urology' component={ALL_Urology}></Route>
           <Route path='/ALL_Dermatology' component={ALL_Dermatology}></Route>

           <Route path='/HOM_Anaesthesia' component={HOM_Anaesthesia}></Route>
           <Route path='/HOM_Anatomy' component={HOM_Anatomy}></Route>
           <Route path='/HOM_Cardiology' component={HOM_Cardiology}></Route>
           <Route path='/HOM_Ent' component={HOM_Ent}></Route>
           <Route path='/HOM_Neurosurgery' component={HOM_Neurosurgery}></Route>
           <Route path='/HOM_Obst' component={HOM_Obst}></Route>
           <Route path='/HOM_Ophthalmology' component={HOM_Ophthalmology}></Route>
           <Route path='/HOM_Orthopaedics' component={HOM_Orthopaedics}></Route>
           <Route path='/HOM_Paediatrics' component={HOM_Paediatrics}></Route>
           <Route path='/HOM_Surgery' component={HOM_Surgery}></Route>
           <Route path='/HOM_Urology' component={HOM_Urology}></Route>
           <Route path='/HOM_Dermatology' component={HOM_Dermatology}></Route>

           <Route path='/AUR_Anaesthesia' component={AUR_Anaesthesia}></Route>
           <Route path='/AUR_Anatomy' component={AUR_Anatomy}></Route>
           <Route path='/AUR_Cardiology' component={AUR_Cardiology}></Route>
           <Route path='/AUR_Ent' component={AUR_Ent}></Route>
           <Route path='/AUR_Neurosurgery' component={AUR_Neurosurgery}></Route>
           <Route path='/AUR_Obst' component={AUR_Obst}></Route>
           <Route path='/AUR_Ophthalmology' component={AUR_Ophthalmology}></Route>
           <Route path='/AUR_Orthopaedics' component={AUR_Orthopaedics}></Route>
           <Route path='/AUR_Paediatrics' component={AUR_Paediatrics}></Route>
           <Route path='/AUR_Surgery' component={AUR_Surgery}></Route>
           <Route path='/AUR_Urology' component={AUR_Urology}></Route>
           <Route path='/AUR_Dermatology' component={AUR_Dermatology}></Route>
        </Switch>
        
      </div>
      </BrowserRouter>
        );
  }
}
export default App;
