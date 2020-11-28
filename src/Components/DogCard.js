import React from "react";

// DogCard is the child component of DogsList
// DogCard component's job is to render the name, image, bark button and bark text for one dog

class DogCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    // console.log("it's getting so noisy in here!")
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt="dog pic" src={this.props.dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.clickHandler}>Bark</button>
          {this.state.clicked ? <h2>Bark!</h2> : null}
        </span>
      </div>
    );
  }

}

export default DogCard;


// Deliverable 2 - When a User clicks on the "Bark" button it should render an <h2> to the screen with an innerText of "Bark"

// Deliverable 3 - When a User clicks on the button a second time the <h2> should be removed from the DOM

// 1. create a JSX h2 element with the text of "Bark" underneath the bark button
// 2. refactor the DogCard to be a class-based component so you can store state and set state
// 3. create a state object to store the state of the button to be clicked--set its default to false
// 4. add an onClick event listener to the bark button, with a value of calling a clickHandler function
// 5. create that clickHandler function and console log to test
// 6. set the state to the opposite of the default clicked value inside of the clickHandler function
// 7. create a conditional for the bark text to be rendered, by using a ternary operator inside of the button span