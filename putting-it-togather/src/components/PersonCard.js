import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            increaseAge: this.props.age,
        }
      }
      
      
      render(){
          const {firstName, lastName, hair} = this.props
        
        return( 
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.increaseAge}</p>
                <p>Hair color: {hair}</p>
                <button onClick={ () => this.setState({increaseAge: this.state.increaseAge + 1})}>Birthday button for {firstName} {lastName}</button>
            </div>
            )
        }
}

export default PersonCard;