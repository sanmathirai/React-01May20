import React from 'react';
import  './Person.css';
const person = (props) => {
    return (
    <div className="Person">
    <p onClick={props.click}> I am a {props.name} and i am {props.age } years Old!</p>
   {props.children}
   <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    );
    
};
export default person;