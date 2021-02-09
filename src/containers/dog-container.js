import React from 'react';
import Dog from '../components/dog.js'

class DogContainer extends React.Component{
    render(){
        return( 
            <div id="dog-bar">
                {this.props.dogs.map(dog => <Dog dog={dog} handleClick={this.props.handleClick} /> )}
            </div>
        )
    }
}

export default DogContainer