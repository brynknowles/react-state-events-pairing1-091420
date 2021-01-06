import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: false
  }

  barkHandler = () => {
    // console.log("barking dog")
    this.setState({clicked: !this.state.clicked})
    {this.state.clicked ? this.props.counterDecr() : this.props.counterIncr()}
  }

  render() {
    // console.log(this.props.counter)
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt="dog" src={this.props.dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.barkHandler}>Bark</button>
          {this.state.clicked ? <h1>Bark!</h1> : null}
        </span>
      </div>
    );
  }
}

export default DogCard;
