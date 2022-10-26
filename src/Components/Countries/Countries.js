import React, { useEffect, useState } from 'react';
import ShowProps from '../Country/Country';

const Countries = () => {
    const [countries,setCountries] = useState([])

    useEffect(  () => {
      
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
           
       }, [])
    return (
        <div>
            <h3>The Countries are here:{countries.length}</h3>
            {
                countries.map(country => 
                <ShowProps 
                    name={country.name.common} 
                    population={country.population}
                    >
                </ShowProps>)
            }
        </div>
    );
};

export default Countries;