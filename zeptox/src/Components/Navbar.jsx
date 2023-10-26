import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <h1 className="navbar-brand">zeptoX</h1>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                </ul>
                <div className="navbar-right">
                    <Link to='/SignUp' ><button className='btn btn-outline-primary'>SignUp</button></Link>
                    <Link to={'/LogIn'} ><button className='btn btn-outline-success'>LogIn</button></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;