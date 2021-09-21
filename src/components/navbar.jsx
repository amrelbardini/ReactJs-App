import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {  
    let NavClasses="";
    props.NavState? NavClasses="show collapse navbar-collapse":NavClasses="collapse navbar-collapse";
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home">
                         <i className="fab fa-react" style={{color:"#00d8ff",fill:"#00d8ff"}}></i>
                        <span className="badge bg-danger m-2">
                            {props.productsCount}
                        </span>        
                    </NavLink>
                    <button  onClick={props.handleNavbar}  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div  className={NavClasses} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                 <NavLink className="nav-link" to="/cart" >ShoppingCart</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                 <NavLink className="nav-link"  to="/contact">Contact us</NavLink>
                            </li>
                            <li className="nav-item">
                                 <NavLink className="nav-link"  to="/login">login</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
    </React.Fragment>
    );
}
 
export default Navbar;
