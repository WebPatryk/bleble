import React, { useContext } from 'react';
import '../style/Navbar.css';
import { Link, useHistory } from "react-router-dom";
import { ProductsContext } from '../context/context';
import { store } from 'react-notifications-component';


export default function Navbar() {

    const [valueState, setValueState] = useContext(ProductsContext);

    const history = useHistory();

    function logOut() {

        store.addNotification({
            title: "You are logged out",
            message: "welcome again :)",
            type: "info",
            insert: "bottom",

            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                onScreen: true,
                showIcon: true,
                pauseOnHover: true,
            },
        });

        localStorage.removeItem('username');
        history.replace('/');
        localStorage.removeItem('photoUser');
    }




    return (
        <nav className="nav">
            <ul className="nav__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
            </ul>
            <div className="nav__right">
                <div className="user__menu">
                    {localStorage.getItem('username') ?
                        <Link className="nav__user-btn" to="/user">
                            <img src={localStorage.getItem('photoUser') ? localStorage.getItem('photoUser') : "http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png"} alt="User logo" className="nav__userPhoto-icon" title="Account" />
                        </Link> :
                        null}

                    {localStorage.getItem('username') ? <Link onClick={logOut} className="login-btn">Logout</Link> : <Link to="/sign-in" className="login-btn">Login</Link>}


                </div>

                <Link to="/basket"><div className="basket">
                    <i className="fas fa-shopping-basket"></i>
                    <div className="circle">
                        <span>{valueState.length}</span>
                    </div>
                </div>
                </Link>
            </div>
        </nav>
    );
}
