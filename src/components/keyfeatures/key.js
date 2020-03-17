import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './key.css';
const key = () => {
	return (
		<div>
			<Container>
				<Row className="key">
					<Col className="k">
						<img className="main" src="/teach.jpg" />
					</Col>
					<Col className="k">
						<h1 className="keytext">KEY FEATURES</h1>
						<p className="keypara">
							<ul>
								<li>Optimum number of students in group tuitions (10-12).</li>
								<li>Experienced Professionals.</li>
								<li>Rigorous practice sessions to improve performance under pressure.</li>
								<li>Adequate individual attention.</li>
								<li>
									Planned approach towards completing the syllabus beforehand and focus on revision
									and tests.
								</li>
							</ul>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default key;
