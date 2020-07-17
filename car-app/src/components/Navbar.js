import React, { useContext, useState } from 'react';
import '../style/Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { ProductsContext } from '../context/context';
import { store } from 'react-notifications-component';

export default function Navbar(props) {
	const [valueState, setValueState] = useContext(ProductsContext);

	const [active, setActive] = useState(false);

	const history = useHistory();

	function logOut() {
		store.addNotification({
			title: 'You are logged out',
			message: 'welcome again :)',
			type: 'info',
			insert: 'bottom',

			container: 'bottom-right',
			animationIn: ['animated', 'fadeIn'],
			animationOut: ['animated', 'fadeOut'],
			dismiss: {
				duration: 3000,
				onScreen: true,
				showIcon: true,
				pauseOnHover: true
			}
		});

		localStorage.removeItem('username');
		history.replace('/');
		localStorage.removeItem('photoUser');
	}
	const path = history.location.pathname;

	return (
		<nav className="nav">
			<button className="nav__hamburger" onClick={() => setActive(!active)}>
				<span className="nav__bar"></span>
				<span className="nav__bar"></span>
				<span className="nav__bar"></span>
			</button>
			<ul className="nav__links">
				<li className={active ? 'nav__link active' : 'nav__link'}>
					<Link to="/" className={path === '/' ? 'activeLink' : ''}>
						Home
					</Link>
				</li>
				<li className={active ? 'nav__link active' : 'nav__link'}>
					<Link to="/products" className={path === '/products' ? 'activeLink' : ''}>
						Products
					</Link>
				</li>
				<li className={active ? 'nav__link active' : 'nav__link'}>
					<Link to="/contacts" className={path === '/contacts' ? 'activeLink' : ''}>
						Contact
					</Link>
				</li>
			</ul>
			<div className={active ? 'nav__right active' : 'nav__right'}>
				<div className="user__menu">
					{localStorage.getItem('username') ? (
						<Link className="nav__user-btn" to="/user">
							<img
								src={
									localStorage.getItem('photoUser')
										? localStorage.getItem('photoUser')
										: 'http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png'
								}
								alt="User logo"
								className="nav__userPhoto-icon"
								title="Account"
							/>
						</Link>
					) : null}

					{localStorage.getItem('username') ? (
						<button onClick={logOut} className="login-btn">
							Logout
						</button>
					) : (
						<Link to="/sign-in" className="login-btn">
							Login
						</Link>
					)}
				</div>

				<Link to="/basket">
					<div className="basket">
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
