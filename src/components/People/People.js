import React from 'react';
import './People.css'
const People = (props) => {
     console.log(props.country);
     const {name,population,area,flags} = props.country
    return (
        <div className='people'>
            <h2> Country : {name.common} </h2>
            <img src={flags.png} alt="" />
            <h2>Pupolation : {population} </h2>
            <h3> Area: {area}</h3>
             
        </div>
    );
};

export default People;