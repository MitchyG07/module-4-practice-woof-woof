import React from 'react';

const Dog = (props) => {
    return(
        <span onClick={() => props.handleClick(props.dog)}>{props.dog.name}</span>
    )
}

export default Dog