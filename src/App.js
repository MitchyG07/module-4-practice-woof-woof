import React from 'react';
import './App.css';
import DogContainer from './containers/dog-container.js'
import DisDoggo from './components/dis-doggo.js'

class App extends React.Component{

  state = {
    dogs: [],
    selectedDog: {},
    filterGoodBois: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(dogs => this.setState({dogs}))
  }

  handleClick = (dog) => {
    this.setState({
      selectedDog: dog
    })
  }

  updateDog = (dog) => {
    let goodDog = !dog.isGoodDog
    let configObj = ({
      method: 'PATCH',
      header: {
        'content-type':'application/json'
      },
      body: JSON.stringify({isGoodDog: goodDog})
    }) 
      fetch(`http://localhost:3000/pups/${dog.id}`, configObj)
      .then(res => res.json())
      .then(dog => {
        this.patchDogInArray(dog)
      })
  }
    

  patchDogInArray = (dog) => {
    this.setState( prevState => {
      let arrayDog = prevState.dogs.find(d => d.id === dog.id)
      arrayDog.isGoodDog = !arrayDog.isGoodDog
      Object.assign(dog,arrayDog)
      return {
        dogs: prevState.dogs
      }
    })
  }

  render(){
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div>
      <DogContainer dogs={this.state.dogs} handleClick={this.handleClick}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div>
        {this.state.selectedDog.name ? <DisDoggo selectedDoggo={this.state.selectedDog} updateDog={this.updateDog}/> : null }
        </div>
      </div>
    </div>
    );
  }
}

export default App;
