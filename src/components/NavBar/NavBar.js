import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
    render(){
        return (
            <div className='Navbar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/adopt'>Adopt</Link></li>
                    <li><Link to='/help'>Help</Link></li>
                </ul>
            </div>
        )
    }
}