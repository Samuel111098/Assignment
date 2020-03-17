import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './mission.css';
const mission = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col className="mission">
						<h1 className="mtext">OUR MISSION</h1>
						<p className="mpara">
							We at Wisdom Academy aspire to be the best CMA / CA / CS classes in Mumbai and exceed
							expectations by providing quality instruction to students that would help them to achieve
							their potential for their own future success.
						</p>
					</Col>
					<Col className="mission">
						<img className="main" src="/bulb1.jpg" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default mission;
