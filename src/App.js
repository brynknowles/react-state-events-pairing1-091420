import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
import BarkCounter from './Containers/BarkCounter'

class App extends Component {

  state = {
    api: [],
    count: 0
  }

  componentDidMount() {
    fetch('http://localhost:8000/dogs')
    .then(r => r.json())
    // .then(data => console.log(data))
    .then(dogArray => this.setState({api: dogArray}))
  } 

  counterIncrement = () => {
    // console.log(event)
    this.setState({count: ++this.state.count})
  }

  counterDecrement = () => {
    // console.log(event)
    this.setState({count: --this.state.count})
  }

  render() {
    console.log(this.state.count)
    return (
      <div className="app">
        <div>
          <BarkCounter counter={this.state.count}/>
        </div>
        <hr></hr>
        <div>
          <DogsList dogArray={this.state.api} counterIncr={this.counterIncrement} counterDecr={this.counterDecrement}/>
        </div>

      </div>
    );
  }
}

export default App;

/*

Go back to our morning pairing lab and do the following after watching the video:
1. Change the "bark" button on DogCard to a "favorite" button
2. The DogCard component will no longer render a new <h2> when the button is clicked
3. Create a FavoriteContainer
4. When a user clicks on the "favorite" button for a dog, that dog should be added to the FavoriteContainer
5. BONUS: figure out how to add multiple dogs to the FavoriteContainer

  state = { favedBey: [] }
  
  favHandler = (beyObj) => {
    let favedBeyArray = this.state.favedBey // array of faved GIFs

    if (beyObj.favorite) {
      if (!favedBeyArray.includes(beyObj)) {
        favedBeyArray.push(beyObj) // add to faved array
      }
      this.setState( { favedBey: favedBeyArray } )
    } else if (!beyObj.favorite) {
      favedBeyArray = favedBeyArray.filter(beyGif => beyGif.favorite) // filter out of faved array
      this.setState( { favedBey: favedBeyArray } )
      window.alert("I got a hot sauce in my bag, swag")
    }
  }

  render() {
    return (
      <div className="container" >
        <BeyContainer favHandler={this.favHandler} />
        <Favorites favedBey={this.state.favedBey} favHandler={this.favHandler}/>
      </div>
    );
  }

*/

