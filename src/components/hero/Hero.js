import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Hero.css';
const Hero = () => {
	return (
		<div>
			<Container fluid className="back">
				<Row>
					<Col>
						<h1 className="welcome">WELCOME TO WISDOM ACADEMY</h1>
						<h4 className="group">Group Tuitions for CA/CS/CMA</h4>
						<h6 className="course">Courses in Mumbai</h6>
						<Button id="btn">Register Now</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Hero;
