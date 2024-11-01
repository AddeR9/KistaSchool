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
		title: "PRAO åk 8, 24 mars till 4 april",		
		date: "24",
		month: "mars",
	},
	{ 
		title: "Studiedag - eleverna lediga",		
		date: "25",
		month: "Oktober",
	},
	{ 
		title: "Lovskola 28-31 Oktober",		
		date: "28",
		month: "Oktober",
	},
	{ 
		title: "Höstlov 28 oktober till 1 november",		
		date: "28",
		month: "Oktober",
	},
	{ 
		title: "Studiedag, dag för utvecklingssamtal men eleverna är lediga",		
		date: "13",
		month: "November",
	},
	{ 
		title: "Julavslutning",		
		date: "20",
		month: "December",
	},
	{ 
		title: "Jullov 21 december till 7 januari",		
		date: "21",
		month: "December",
	},
	{ 
		title: "Elevernas första dag 8 januari",		
		date: "8",
		month: "Januari",
	},
	{ 
		title: "Sportlov 24-28 februari",		
		date: "24",
		month: "Februari",
	},
	{ 
		title: "Lovskola 24-27 februari",		
		date: "24",
		month: "Februari",
	},
	{ 
		title: "Studiedag, dag för utvecklingssamtal men eleverna är lediga",		
		date: "19",
		month: "Mars",
	},
	{ 
		title: "Påsklov 14-21 april",		
		date: "14",
		month: "April",
	},
	{ 
		title: "Lovskola 14-17 april",		
		date: "14",
		month: "April",
	},
	/*{ 
		title: "Eid 31 mars ledigt (kan eventuellt ändras till annan dag)",		
		date: "31",
		month: "mars",
	},*/
	{ 
		title: "1-2 maj ledigt",		
		date: "1",
		month: "Maj",
	},
	{ 
		title: "30 maj ledigt",		
		date: "30",
		month: "Maj",
	},
	{ 
		title: "6 juni ledigt",		
		date: "6",
		month: "Juni",
	},
	{ 
		title: "Skolavslutning 12 juni",		
		date: "12",
		month: "Juni",
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
									<div className="flex">
										<div className="flex-column">
											<div className="event-date">{item.date}</div>
											<div className="">{item.month}</div>
										</div>
										<div className="text">
												<h4 className="">{item.title}</h4>
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