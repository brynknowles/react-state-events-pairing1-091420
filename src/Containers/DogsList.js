import React from "react";
import DogCard from '../Components/DogCard'
import { apiResponse } from '../api'

// DogsList is the parent component to DogCard
// DogsList component's job is to render the list of dogs

class DogsList extends React.Component {

  renderDogs = () => {
    return apiResponse.map(dogObj => <DogCard key={dogObj.id} dog={dogObj}/>)
  }

  render() {
    return (
      <div className="list">
        <h1>Index</h1>
        {this.renderDogs()}
      </div>
    )
  }

}

export default DogsList;

// Deliverable 1 -  Your application should render a list of dog images along with a button for each image that has an innerText of "Bark"

// 1. import DogCard
// 2. import the api
// 3. create a function to render all dogs
// 4. inside that function, map over the apiResponse array to render individual DogCards
// 5. call and invoke the render all dogs function inside of the render function in the class.
// 6. inside of the DogCard file, pass in props as the DogCard function's parameter to render the name, image and bark button to the page