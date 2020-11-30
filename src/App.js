import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
// import Favorites from './Containers/Favorites'

// App is the top level component
// App component's job is to render the DogsList
class App extends Component {
  render() {
    return (
      <div className="app">
        <DogsList />
        {/* <Favorites /> */}
      </div>
    );
  }
}

export default App;

/*

Deliverables:

- 1. Your application should render a list of dog images along with a button for each image that has an innerText of "Bark"

- 2. When a User clicks on the "Bark" button it should render an <h2> to the screen with an innerText of "Bark"

- 3. When a User clicks on the button a second time the <h2> should be removed from the DOM

*/