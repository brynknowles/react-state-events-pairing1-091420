import React, { Component } from "react";
import DogCard from '../Components/DogCard'

class DogsList extends Component {

  renderAllDogs = () => {
    return this.props.dogArray.map(dogObj => <DogCard key={dogObj.id} dog={dogObj} counterIncr={this.props.counterIncr} counterDecr={this.props.counterDecr}/>)
  }

  render() {
    // console.log("Props in Doglist render:", this.props)

    return (
      <div className="list">
        {this.renderAllDogs()}
      </div>
    )
  }
}

export default DogsList;
