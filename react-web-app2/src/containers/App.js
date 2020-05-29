import React, { Component } from 'react';

import './App.css';
import Person from '../components/Persons/Person/Person';
import classes from './App.css';



class App extends Component {

state= {
  person :[
    {id:1,name:'sanmathi',age:'85' },
    {id: 2,name:'Max',age:'95' },
    {id:3, name:'Manu',age:'15' }
  ],

  showPersons : false
};

/* switchNameHandler = (newName)=> {
  //console.log('was clicked')
 this.setState({
    person:[
      { name:newName,age:'85' },
      { name:'ioi',age:'95' },
      { name:'hghg',age:'18' }
    ]
});

 } 
*/

deletePersonHandler = (personIndex) =>{
const person = [...this.state.person] //this.state.person.slice;
person.splice(personIndex, 1);
this.setState({person: person})

}



nameChangeHandler=(event , id)=>{
  const personIndex = this.state.person.findIndex(p=>{
    return p.id === id;
  });
  const newPerson = { ...this.state.person[personIndex]};

  newPerson.name=event.target.value;

  const person = [...this.state.person]; //this.state.person.slice;

  person[personIndex] = newPerson;
  this.setState({person: person})

}

togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

   render(){ 
    

     let person = null;
     let btnclass = [classes.Button];
     if (this.state.showPersons) {
    person =( 
      <div>
        {this.state.person.map((oneperson,index)=>{
          
          return <Person 
          click ={() => {this.deletePersonHandler(index)}}
          name = {oneperson.name} age = {oneperson.age}
          key = {index}
          changed = {(event)=> this.nameChangeHandler(event,oneperson.id)} 
          />
        })
        }

      </div>

    )

btnclass.push(classes.Red);
     }

     //let classes = ['red' , 'bold'].join(' '); 
     let assignedClasses = [];
    if(this.state.person.length<=2){
      assignedClasses.push(classes.red); //classes = ['red' ]
    }
    if(this.state.person.length<=1){
      assignedClasses.push(classes.bold); //classes = ['red' , 'bold']
    }
    
      return (
     
      <div className={classes.App}>
        <h1>Hi , I Am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is worki
  
        </p>
        <button  className = {btnclass.join(' ')} 
        onClick={this.togglePersonsHandler}>Switch Name</button>
       
       {person}
       {/* { this.state.showPersons ? 
       <div >
          <Person name={this.state.person[0].name} age={this.state.person[0].age} />
       
          <Person name={this.state.person[1].name} age={this.state.person[1].age} 
                  click={this.switchNameHandler.bind(this,"maximila")}
                  changed={this.nameChangeHandler}>I am from Mangalore</Person>
       
          <Person name={this.state.person[2].name}  age={this.state.person[2].age} />
        </div> :null } */}
      </div>
    
      );
    } 
     
  }



export default App;

