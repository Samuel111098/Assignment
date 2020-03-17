import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';
const footer = () => {
	return (
		<div>
			<Container fluid className="r">
				<Row>
					<Col className="tour">
						<h4>Tour</h4>
						<a href="#">Home</a>
						<a href="#">About US</a>
						<a href="#">Courses</a>
						<a href="#">Chartered Accountant</a>
						<a href="#">Company Secretary</a>
						<a href="#">ICWA</a>
						<a href="#">Testimonials</a>
						<a href="#">Contact US</a>
					</Col>
					<Col className="contact">
						<h4>Contact US</h4>
						<p>
							Mobile No.: 932-447-5566 / 981-949-5082
							<br />
							Email: prashant@wisdomacademy.co.in
						</p>
						<br />
						<p>
							Wisdom Academy, 6th Floor,619 Pearl Palza Near To McDonald Opposite Andheri Railway Station
							Andheri West, Mumbai-400058
						</p>
					</Col>
				</Row>
			</Container>
			<h1 className="copy">Wisdom Academy © 2014 | All Rights Reserved</h1>
		</div>
	);
};

export default footer;
