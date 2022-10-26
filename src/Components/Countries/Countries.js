import React, { useEffect, useState } from 'react';
import ShowProps from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([])

    useEffect(  () => {
      
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
           
       }, [])
    return (
        <div >
            <h3>The Countries are here:{countries.length}</h3>

            <div className='countries-container'>
            {
                countries.map(country => 
                <ShowProps 
                            // ! Important for sending all data to the country
                   country={country}
                   key={country.ccn3}
                            // ? Unique value for the country
                    >
                </ShowProps>)
            }
            </div>
            
        </div>
    );
};

export default Countries;