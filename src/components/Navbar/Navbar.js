import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
const navbar = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="sm" className="nav">
				<Navbar.Brand href="#home" className="brand">
					<img
						alt=""
						src="/WisdomAcademy-Logo-300x149.png"
						width="auto"
						height="70"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
				<Nav className="auto">
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav.Link className="link" href="#">
							About Us
						</Nav.Link>
						<Nav.Link className="link" href="#">
							Courses
						</Nav.Link>
						<Nav.Link className="link" href="#">
							Testimonials
						</Nav.Link>
						<Nav.Link className="link" href="#">
							Contact Us
						</Nav.Link>
					</Navbar.Collapse>
				</Nav>
			</Navbar>
		</div>
	);
};

export default navbar;
