import React from 'react';
import './Country.css'
const ShowProps = (props) => {
    return (
        <div className='country'>
            <h3>Countries name is :{props.name}</h3>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default ShowProps;