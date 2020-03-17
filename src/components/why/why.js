import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './why.css';
const why = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col className="why">
						<h1 className="whytext">Why Wisdom Academy?</h1>
						<p className="whypara">
							We at Wisdom Academy are in the education field for the past 15 years, and, with the
							experience, perseverance and dedication of an esteemed panel of teachers, we are proud to
							have produced many top ranking students. We aspire to be a one-stop shop for all students
							needs. Courses such as CA / CS / CMA are tough require tremendous preparation and
							commitment. Most students therefore, in order to get that extra edge, seek professional
							guidance by way of by way of experts of Wisdom Academy.
						</p>
					</Col>
					<Col className="why">
						<img className="main" src="/oil-refineries-in-urban-neighborhoods-oil_1.jpg" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default why;
