import React,{Component} from 'react';
import Menu1 from './Menu1';
import "../../node_modules/video-react/dist/video-react.css";
import '../Css/Anaesthesia.css';
import Bottom from './Bottom';
import { Player } from 'video-react';
import axios from 'axios';
var images = require.context('../Backened/ADMIN_WALLET/allopathic/anatomy', true);

const Exercise = props => (
  <tr >
  <td>
       <div className="ka">

        <span className="kar"> <i>Uploaded by: 
          <span className="tooltip">
          Dr.{props.exercise.name}
          <span className="tooltiptext"><i>D.M.({props.exercise.speciality})</i><br/>
          <i>Work Exp: {props.exercise.exp} YRS</i></span></span></i></span> 

        <span className="lame"> <span className="tooltip">{props.exercise.upload} <span className="tooltext"><i>
          {props.exercise.hours}:{props.exercise.minutes}:{props.exercise.seconds}</i></span></span></span>
        <br/>
       <br/>
       <br/>
  <Player className="skol"  fluid={false}
      width={370} height={250}
      playsInline    poster="/assets/poster.png" 
      src={images(`./${props.exercise.imagename}`)}/>
     <p className="karam">Description: {props.exercise.description}</p>  
     </div>
    <br/>
    <br/>
   </td>
</tr> 
)

export default class ALL_Anatomy extends Component 
{
  constructor(props) {
    super(props);
    this.state = {exercises: []};
                }
                componentDidMount() 
  {
    axios.get('http://localhost:5000/get/allopathic/anatomy')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onSub()
  {
    window.location=('/Allopathic');
  }
  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} key={currentexercise._id}/>;
    })
  }
    render(){
  return (
     <div >  
       <Menu1/>
       <br/>
       <br/>
       <br/>
       <h1 className="kok">Anatomy<span align="right"><button onClick={this.onSub}>BACK</button></span></h1>
    <br/>
    <br/>
    <table id="cust" align="center" border="0">
          <tbody class="container container-3">
            { this.exerciseList() }
          </tbody>
    </table>
    <br/>
    <br/>
<Bottom/>
    </div>
      )
}
}
