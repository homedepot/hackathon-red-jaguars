import React, {Component} from 'react';
import './Wish.css';

class PostCreate extends Component {
  goBack = (e) => {
    e.preventDefault();
    this.props.history.push("/landing");
  }

  render() {
    return (
      <div className="centerIt">
          <h2> Your Wish is successfully Submitted.!!</h2>
        <br/>
        <h2>
          Your wish will be fulfilled soon.
        </h2>
        <br/><br/>
        <button className="leftSpace fancyButtons"  onClick={this.goBack}>Go To Home Screen</button>
      </div>
    )
  }
}

export default PostCreate;