import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
    render(){
        return (
            <div className='Navbar'>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/adopt'>Adopt</Link></li>
                    <li><Link href='/help'>Help</Link></li>
                </ul>
            </div>
        )
    }
}