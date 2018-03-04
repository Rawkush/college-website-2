import React from 'react';


export default({ name,dateOfBirth,  gender, currentPosition, } = {}) => 
 (
    <div>
    <p>  {name} </p>
    <p> { dateOfBirth } </p>
    <p> { gender } </p>
    <p> {currentPosition} </p>
     </div>
)
