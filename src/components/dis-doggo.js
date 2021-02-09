import React from 'react'

class DisDoggo extends React.Component {

    state = {
        dog: {
            id: this.props.selectedDoggo.id,
            name: this.props.selectedDoggo.name,
            image: this.props.selectedDoggo.image,
            isGoodDog: this.props.selectedDoggo.isGoodDog,
        }
    }


    render() {
    return (
        <div id="dog-info">
            <img src={this.props.selectedDoggo.image} alt='cutie' />
            <h2>{this.props.selectedDoggo.name}</h2>
            <button onClick={() => this.props.updateDog(this.props.selectedDoggo)}>{this.props.selectedDoggo.isGoodDog ? 'Good Doggo' : 'Bad Boi'}</button>
        </div>
    )
    }
}

export default DisDoggo