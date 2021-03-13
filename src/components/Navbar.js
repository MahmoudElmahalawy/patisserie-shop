import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm px-4 px-sm-5">
                <Link to="/" className="logo text-gradient">متجر الحلويات</Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ms-3 ms-sm-5">
                        <Link to="/" className="text-bright nav-link d-sm-block d-none">منتجاتنا</Link>
                    </li>
                    <li className="nav-item ms-2 ms-sm-2">
                        <Link to="/about" className="text-bright nav-link d-sm-block d-none">من نحن؟</Link>
                    </li>
                </ul>
                <Link to="/cart" className="cart ms-auto">
                    <svg className="w-6 h-6" width="36px" fill="none" stroke="currentcolor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                </Link>
            </nav>
        )
    }
}
