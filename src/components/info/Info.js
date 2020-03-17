import React from 'react';
import './info.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Info = () => {
	return (
		<Container fluid>
			<Row className="back1">
				<Col className="one">
					<h4>ICAI</h4>
					<p>Chartered Accountant</p>
				</Col>
				<Col className="one">
					<h4>ICSI</h4>
					<p>Company Secretary</p>
				</Col>
				<Col className="one">
					<h4>CMA</h4>
					<p>Cost Accountant</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Info;
