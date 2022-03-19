import React, { useEffect, useState } from 'react';
import People from '../People/People';
import './Countries.css'

const Countries = () => {
    const [countries, SetCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>SetCountries(data))
    },[])

    return (
        <div>
            <h1>Hello Countries: {countries.length}</h1>
           <div className='container'>
           {
                countries.map(country=> <People country={country} 
                    key={country.cca3}
                ></People>)
            }
           </div>
        </div>
    );
};
  

export default Countries;