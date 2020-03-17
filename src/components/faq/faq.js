import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './faq.css';
const faq = () => {
	return (
		<div className="accordion">
			<h1 className="faq">Frequently Asked Questions</h1>
			<Accordion defaultActiveKey="0">
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="0" className="head">
						What are the benefits of CA / CS Home Tuitions?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body className="body">
							Chartered Accountancy (CA)/Company Secretary (CS) is one of the most enviable and dignified
							professions and hence, comes under the category of the most difficult examinations.
							Attending CA Home Tuitions and CS Home Tuitions will make you confident in having a clear
							understanding of each subject. Also, you need not study a lot if you are already taking
							proper assistance from an efficient tutor. All you have to do is just focus on your classes
							and give attention to what is taught during the session.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="1" className="head">
						Why CA classes / CS classes is important?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body className="body">
							One of the major reasons why most of the students prefer to join CA classes / CS classes in
							Mumbai is because the examination papers that are designed by them ensure the fact that
							aspirants become prepared to handle their time and make use of their knowledge. This way,
							the students gain self-confidence as it gives them the fighting chance for fulfilling their
							dreams.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="2" className="head">
						How often the test is conducted?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="2">
						<Card.Body className="body">
							Making a career in accountancy is not an easy thing to do, considering the tough competition
							and limited seats. To crack any accountancy exam be it CA(Chartered Accountant), CS(Company
							Secretary) or CMA(Cost Accountant), it requires continuous practice and sheers hard work. We
							provide CA classes in Mumbai, CS classes in Mumbai and ICWA classes in Mumbai. Our highly
							skilled faculty offers guidance, support, and result-oriented training to help students
							clear the exam. The batches consist of a limited number of students so that every student
							gets adequate attention. Continous and meticulous study sessions and practice sessions are
							conducted to improve performance under pressure.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="3" className="head">
						What is the average fee of CA / CS classes in Mumbai?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="3">
						<Card.Body className="body">
							Wisdom Academy is the top provider for CA classes in Mumbai, CS classes in Mumbai and ICWA
							classes in Mumbai. CA(Chartered Accountant), CS(Company Secretary) and CMA(Cost Accountant)
							exams are conducted to pick the right candidates for various positions in the financial
							sector. Clearing these exams are no cakewalk, and requires continuous practice and studying.
							The syllabus is comprehensive and extensively rich and hard work determines the fate of
							every aspirant. Now you can find CA, ICWA, and CS classes in Andheri, Borivali, Mumbai
							easily. Our faculty consists of od trained and experienced teachers who are devoted to
							providing excellent education t our students. With result-centric teaching, students are
							given essential tips and tricks for the exam. Mock tests and regular tests are conducted to
							prepare the students for the actual exam and instill them with confidence.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};

export default faq;
