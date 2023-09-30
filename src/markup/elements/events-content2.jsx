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
		date: 21,
		month: "Augusti",
	},
	{ 
		title: "Höstlov 30 oktober till 3 november",		
		date: "",
		month: "Höstlov",
	},
	{ 
		title: "Lovskola 31 oktober till 3 november",		
		date: "",
		month: "Lovskola",
	},
	{ 
		title: "Studiedag 15 november, dag för utvecklingssamtal men eleverna är lediga",		
		date: "",
		month: "Studiedag",
	},
	{ 
		title: "Julavslutning",		
		date: 22,
		month: "December",
	},
	{ 
		title: "Jullov 23 december till 8 januari",		
		date: "",
		month: "Jullov",
	},
	{ 
		title: "Elevernas första dag",		
		date: "9",
		month: "Januari",
	},
	{ 
		title: "Sportlov 26 februari till 1 mars",		
		date: "",
		month: "Sportlov",
	},
	{ 
		title: "Lovskola 26 februari till 29 februari",		
		date: "",
		month: "Lovskola",
	},
	{ 
		title: "Dag för utvecklingssamtal men eleverna är lediga",		
		date: 20,
		month: "Mars",
	},
	{ 
		title: "Påsklov 29 mars till 5 april",		
		date: "",
		month: "Påsklov ",
	},
	{ 
		title: "Lovskola 2-5 april",		
		date: "",
		month: "Lovskola",
	},
	{ 
		title: "Ledigt",		
		date: "1",
		month: "Maj",
	},
	{ 
		title: "Ledigt",		
		date: "9-10",
		month: "Maj",
	},
	{ 
		title: "Ledigt",		
		date: "6-7",
		month: "Juni",
	},
	{ 
		title: "Skolavslutning",		
		date: "12",
		month: "Juni",
	},
	{ 
		title: "Lovskola 17-20 juni",		
		date: "",
		month: "Lovskola",
	}
]

class EventsContent2 extends Component{
	render(){
		return(
			<>
			<Header/>
				<div className='mb-5'>
					<div className="container">
					<div className="row">
							<div className="col-md-12 heading-bx left mt-5">
								<h2 className="title-head">Läsåret <span> 2023/2024</span></h2>
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

export default EventsContent2;