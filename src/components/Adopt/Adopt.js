import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Adopt.css'
import NavBar from '../NavBar/NavBar'

export default class Adopt extends Component {

    state = {
        general: [
            {id: 1, gender: 'Male', name: 'Cpt. Roger', age: 3, breed: 'German Shephard', imageUrl: 'https://images.unsplash.com/photo-1508717080561-0030acd438cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'Lived in the streets'},
            {id: 2, gender: 'Female', name: 'Fluffy', age: 1, breed: 'Poodle', imageUrl: 'https://images.unsplash.com/photo-1553718804-35d244cc51c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'My owners lost me 1 year ago'},
            {id: 3, gender: 'Male', name: 'Blue', age: 3, breed: 'Pitbull', imageUrl: 'https://images.unsplash.com/uploads/1412433710756bfa9ec14/d568362b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'Always been looked at as a mean dog but i promise im nice'},
            {id: 4, gender: 'Female', name: 'Luna', age: 2, breed: 'Munchkin', imageUrl: 'https://images.unsplash.com/photo-1570018143038-6f4c428f6e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'Found underneath a car eating scraps'},
            {id: 5, gender: 'Male', name: 'Panther', age: 1, breed: 'Bombay', imageUrl: 'https://images.unsplash.com/photo-1570018143038-6f4c428f6e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'Likes to play a lot and very energetic'}
        ],

        dogs: [{id: 1, gender: 'Male', name: 'Cpt. Roger', age: 3, breed: 'German Shephard', imageUrl: 'https://images.unsplash.com/photo-1508717080561-0030acd438cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'Lived in the streets'},
               {id: 2, gender: 'Female', name: 'Fluffy', age: 1, breed: 'Poodle', imageUrl: 'https://images.unsplash.com/photo-1553718804-35d244cc51c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'My owners lost me 1 year ago'},
               {id: 3, gender: 'Male', name: 'Blue', age: 3, breed: 'Pitbull', imageUrl: 'https://images.unsplash.com/uploads/1412433710756bfa9ec14/d568362b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'Always been looked at as a mean dog but i promise im nice'},],

        cats: [{id: 4, gender: 'Female', name: 'Luna', age: 2, breed: 'Munchkin', imageUrl: 'https://images.unsplash.com/photo-1570018143038-6f4c428f6e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'Found underneath a car eating scraps'},
               {id: 5, gender: 'Male', name: 'Panther', age: 1, breed: 'Bombay', imageUrl: 'https://images.unsplash.com/photo-1570018143038-6f4c428f6e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', story: 'Likes to play a lot and very energetic'}],

        people: ['John', 'Becca', 'Nick', 'Alissa', 'Robert']
    }

    render(){
        return(
            <div>

                <NavBar />

                <div className='adopt'>
                    <div className='peopleQue'>
                        <h2>Queue</h2>
                        <ul>
                            {this.state.people.map(person => <li>Name: {person}</li>)}
                        </ul>
                    </div>

                    <div className='animalQue'>
                        <h2>Adopt</h2>
                        <div className='generalQue'>
                        <p>General</p>
                        <ul>
                            {this.state.general.map(animal => 
                                    <li className='animalCard'>
                                        <Link to={`/adopt/` + animal.id}>
                                            <h2>{animal.name}</h2>
                                            <p><img alt={animal.story} src={animal.imageUrl}></img></p>
                                            <p>{animal.gender}</p>
                                            <p>Age: {animal.age}</p>
                                        </Link>
                                    </li>
                                )}
                        </ul>
                        </div>

                        <div className='dogQue'>
                        <p>Dogs</p>
                        <ul>
                            {this.state.dogs.map(animal => 
                                <li className='animalCard'>
                                    <Link to={`/adopt/` + animal.id}>
                                        <h2>{animal.name}</h2>
                                        <p><img alt={animal.story} src={animal.imageUrl}></img></p>
                                        <p>{animal.gender}</p>
                                        <p>Age: {animal.age}</p>
                                    </Link>
                                </li>
                            )}
                        </ul>
                        </div>

                        <div className='catQue'>
                        <p>Cats</p>
                        <ul>
                            {this.state.cats.map(animal => 
                                <li className='animalCard'>
                                    <Link to={`/adopt/` + animal.id}>
                                        <h2>{animal.name}</h2>
                                        <p><img alt={animal.story} src={animal.imageUrl}></img></p>
                                        <p>{animal.gender}</p>
                                        <p>Age: {animal.age}</p>
                                    </Link>
                                </li>
                            )}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}