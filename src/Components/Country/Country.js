import React from 'react';
import './Country.css'
const ShowProps = (props) => {
    const {name,population,flags} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />  
            <h3>Countries name is : {name.common}</h3>
            <p>Population: {population}</p>
        </div>
    );
};

export default ShowProps;