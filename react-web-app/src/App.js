import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {

state= {
  person :[
    { name:'sanmathi',age:'85' },
    { name:'Max',age:'95' },
    { name:'Manu',age:'15' }
  ],

};


 switchNameHandler = (newName)=> {
  //console.log('was clicked')
 this.setState({
    person:[
      { name:newName,age:'85' },
      { name:'ioi',age:'95' },
      { name:'hghg',age:'18' }
    ]
});

 }
nameChangeHandler=(event)=>{
  this.setState({
    person:[
      { name:'Srinivas',age:'85' },
      { name:event.target.value,age:'95' },
      { name:'hghg',age:'18' }
    ]
});
}
   render(){ 
     const style= {
       backgroundColor: 'white',
       font: 'inherit',
       border:'1px solid blue',
       padding: '8px',
       cursor: 'pointer'

     };
      return (
        <div>
        <h1>Hi , I Am a React App</h1>
        <button 
        style={style}
        onClick={()=>{this.switchNameHandler("max")}}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} 
        click={this.switchNameHandler.bind(this,"maximila")}
        changed={this.nameChangeHandler}>I am from Mangalore</Person>
        <Person name={this.state.person[2].name}  age={this.state.person[2].age} />
        </div>
      );
    } 
     
  }



export default App;

