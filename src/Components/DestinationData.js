import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text"></div>
        <p> {this.props.text} </p>
      </div>
    );
  }
}

export default DestinationData;
