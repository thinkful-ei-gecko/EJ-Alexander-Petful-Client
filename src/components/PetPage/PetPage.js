import React, { Component } from 'react'
import './PetPage.css'
import history from '../../history'

export default class PetPage extends Component{
    
    state = {
        petId: this.props.match.params.id,
        pet: {gender: 'Male', name: 'Cpt. Roger', age: 3, breed: 'German Shephard', imageUrl: 'https://images.unsplash.com/photo-1508717080561-0030acd438cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'Lived in the streets'}
    }

    componentDidMount(){
        
        // fetch call then filter by id

    }

    goBack = () => {
        history.push('/adopt')
    }


    render(){
        return (
            <div className='petPage'>
                <button onClick={this.goBack}>Back</button>
                <div className='petDesc'>
                    <img src={this.state.pet.imageUrl} alt={this.state.pet.story}/>
                    <div className='innerPetDesc'>
                        <h2>{this.state.pet.name}</h2>
                        <p>Gender: {this.state.pet.gender}</p>
                        <p>Age: {this.state.pet.age}</p>
                        <p>Story: {this.state.pet.story}</p>
                        <button>Adopt</button>
                    </div>
                </div>
            </div>
        )
    }
}