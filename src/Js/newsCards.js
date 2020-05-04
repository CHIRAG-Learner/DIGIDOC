import React from "react";
import "../Css/button.css";
import "../Css/newsCards.css";
import img from '../Images/noimage.png';
import homeo from '../Images/homeo.png';
import {Link} from 'react-router-dom';
class NewsCards extends React.Component {
  exerciseList() {
    var str1=this.props.image;
    var str2=null;
    // var n = str1.localeCompare(str2);
    if(str1!=str2)
    {
      console.log('Available image chirag');
      return (this.props.image);
    }
    console.log('not available image chirag');
    return img;
  }
  render(){
  return (
   
    <div className="key" key={this.props.id}>
      
      <div className="divshape">
        <img className="image" src={ this.exerciseList() } alt="No Image Avaliable" />
        <div className="cardbody">
              <h5 className="cardtitle">{this.props.title}</h5>
            {/* <p className="kau">{this.props.description}</p> */}
              <footer><cite title="Source Title">{this.props.source}</cite></footer>
              {/* <Link to="myRoute" params={myParams} target="_blank"> */}
              <Link to={this.props.url}  target="noopener noreferrer">Read More</Link>
              {/* <a href={this.props.url} target="noopener noreferrer"> */}
                {/* Read More
              </a>  */}
            </div>
            <br/>
          </div>
          <br/>
            <br/>
    </div>
  );
  }
}
export default NewsCards;