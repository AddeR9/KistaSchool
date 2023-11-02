import React,{Component} from 'react'; 
import { Link } from 'react-router-dom';

// Images
import EventImg1 from '../../images/bilder/fasad/kistaschoolfirst.jpg';
import Header from '../layout/header/header1';
import ContactInfoCard from './contact-info-card';
// Portfolio Content
const content = [
	{ 
		title: "Elevernas första dag",		
		date: 19,
		month: "Augusti",
	},
	{ 
		title: "Studiedag - eleverna lediga",		
		date: "25",
		month: "oktober",
	},
	{ 
		title: "Höstlov 28 oktober till 1 november",		
		date: "28",
		month: "oktober",
	},
	{ 
		title: "Studiedag, dag för utvecklingssamtal men eleverna är lediga",		
		date: "13",
		month: "november",
	},
	{ 
		title: "Julavslutning",		
		date: "20",
		month: "december",
	},
	{ 
		title: "Jullov 21 december till 7 januari",		
		date: "21",
		month: "december",
	},
	{ 
		title: "Elevernas första dag 8 januari",		
		date: "8",
		month: "januari",
	},
	{ 
		title: "Sportlov 24-28 februari",		
		date: "24",
		month: "februari",
	},
	{ 
		title: "Lovskola 24-27 februari",		
		date: "24",
		month: "februari",
	},
	{ 
		title: "Studiedag, dag för utvecklingssamtal men eleverna är lediga",		
		date: "19",
		month: "mars",
	},
	{ 
		title: "Påsklov 14-21 april",		
		date: "14",
		month: "april",
	},
	{ 
		title: "Lovskola 14-17 april",		
		date: "14",
		month: "april",
	},
	{ 
		title: "Eid 25 april ledigt (kan eventuellt ändras till annan dag)",		
		date: "25",
		month: "april",
	},
	{ 
		title: "1-2 maj ledigt",		
		date: "1",
		month: "maj",
	},
	{ 
		title: "30 maj ledigt",		
		date: "30",
		month: "maj",
	},
	{ 
		title: "6 juni ledigt",		
		date: "6",
		month: "juni",
	},
	{ 
		title: "Skolavslutning 12 juni",		
		date: "12",
		month: "juni",
	},
	
]

class EventsContent3 extends Component{
	render(){
		return(
			<>
			<Header/>
				<div className='mb-5'>
					<div className="container">
					<div className="row">
							<div className="col-md-12 heading-bx left mt-5">
								<h2 className="title-head">Läsåret <span> 2024/2025</span></h2>
							</div>
						</div>
						<div className="row">
							{content.map((item) =>(
								<div className="col-md-12">
									<div className="event-bx style1">
										<div className="action-box">
										
										</div>
										<div className="info-bx">
												<h4 className="event-title float-right">{item.title}</h4>
										</div>
										<div className="event-time">
											<div className="event-date">{item.date}</div>
											<div className="event-month">{item.month}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<ContactInfoCard />
			</>
		);
	}
}

export default EventsContent3;