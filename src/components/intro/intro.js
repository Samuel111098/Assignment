import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './intro.css';
const intro = () => {
	return (
		<div>
			<Container>
				<Row className="introduction">
					<Col className="intro">
						<img className="main" src="/light_bulb_globe_400x400.jpg" />
					</Col>
					<Col className="intro">
						<h1 className="introtext">INTRODUCTION</h1>
						<p className="intropara">
							A career in accountancy is considered one of the most lucrative ones and is indeed so. There
							is no such universally appropriate course of accountancy for any student. Each course is
							equally difficult and calls for continuous practice and rigorous study sessions and thus
							students are in need of proper guidance. We are the top providers of CA classes in Mumbai,
							CS classes in Mumbai and ICWA classes in Mumbai.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default intro;
