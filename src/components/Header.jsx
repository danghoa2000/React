import React from 'react';
import logo from '../img/logo.png'
import cart from '../img/emptyCart.svg'
import avatar from '../img/avatar.png'
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/stateProvider';
import { activeType } from '../context/reducers';
const Header = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{user}, dispatch] = useStateValue();
    const login = async () => {
        if (!user) {
            const  {user: {refreshToken, providerData}} = await signInWithPopup(auth, provider)
            dispatch({
                type: activeType.SET_USER,
                user: providerData[0],
            })
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand font-weight-bold" to={'/'}>
                    <img src={logo} alt="" width="30" height="24"></img>
                    City
                </Link>
                
                <div className="collapse navbar-collapse flex-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="d-flex justify-content-center align-items-center position-relative">
                        <img src={cart} width="30" alt="cart" />
                            <span style={{ display: 'flex', width: 15, justifyContent:'center', alignItems:'center', top:-5, right:-5, color:'white', height: 15, fontSize: 7, background: 'red', borderRadius: '50%', position:'absolute' }}>2</span>
                        </div>
                    </div>
                    <img src={user ? user.photoURL : avatar} alt="avatar" style={{ marginLeft:10 }} width="24px" onClick={login} />
            </div>
        </nav>
    );
};


export default Header;