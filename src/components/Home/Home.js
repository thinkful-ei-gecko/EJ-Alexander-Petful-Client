import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render(){
        return(
            <div className='Home'>

                <h1>Welcome to United Puppers</h1>

                <img alt= 'kitten locked away' src='https://images.unsplash.com/photo-1558618047-f4b511aae74d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />

                <div className='getStarted'>
                    <h2>Get Started</h2>
                    <p>This site is dedicated to saving pets without the judgement. Every pet
                    is looking for a loving family and another chance!</p>
                    <Link to='/adopt'>Get Started</Link>
                </div>
            </div>
        )
    }
}