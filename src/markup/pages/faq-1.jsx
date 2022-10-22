import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Card} from 'react-bootstrap';

// Layout
import Header from "../layout/header/header1";
import ContactInfoCard from '../elements/contact-info-card';

// Elements
import Counter2 from '../elements/counter/counter2';
import Testimonial2 from '../elements/testimonial1';

// Images
import bannerImg from '../../images/banner/banner1.jpg';

class Faq1 extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content">
					<div className="breadcrumb-row">
						<div className="container">
							<ul className="list-inline">
								<li><Link to="/">Elev & Föräldrar</Link></li>
								<li>FAQ</li>
							</ul>
						</div>
					</div>
					
					<div className="content-block">
						
						<div className="section-area section-sp1">
							<div className="container">
								<div className="row">
									<div className="col-12 m-b30">
										<h3 className="m-b15">Frågor och svar</h3>
										<p className="m-b0">Här hittar du dom vanligaste frågor och svar hos oss.</p>
									</div>
									<div className="col-lg-6 col-md-12">
										<Accordion className="ttr-accordion m-b30 faq-bx">
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="0">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body>
														sdfdfsdfdssdfdsfsdf aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="1">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="1">
													<Card.Body>
														blabalads aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="2">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="3">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="3">
													<Card.Body>
														sdffsddfsfds aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="4">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="4">
													<Card.Body>
														Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="5">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="5">
													<Card.Body>
														Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
										</Accordion>
									</div>
									<div className="col-lg-6 col-md-12">
										<Accordion className="ttr-accordion m-b30 faq-bx">
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="0">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body>
														Web design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="1">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="1">
													<Card.Body>
														Graphic design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="2">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="3">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="3">
													<Card.Body>
														Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="4">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="4">
													<Card.Body>
														Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="5">
													<Link to="#" className="acod-title">Vad är fritidsklubb och hur ansöker jag dit?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="5">
													<Card.Body>
														Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
										</Accordion>
									
									</div>
									
								</div>
								
								
							</div>
						</div>
						
						
						
					</div>
					
				</div>
				
				<ContactInfoCard/>
				
			</>
		);
	}
}

export default Faq1;