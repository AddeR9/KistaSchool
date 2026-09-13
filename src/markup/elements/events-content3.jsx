import React,{Component} from 'react'; 
import { Link } from 'react-router-dom';

// Images
import EventImg1 from '../../images/bilder/fasad/kistaschoolfirst.jpg';
import Header from '../layout/header/header1';
import ContactInfoCard from './contact-info-card';
// Portfolio Content
const content = [
	{ 
		title: "Lärarnas första dag",		
		date: 6,
		month: "Augusti",
	},
	{ 
		title: "Elevernas första dag",		
		date: 17,
		month: "Augusti",
	},
	{ 
		title: "Studiedag",		
		date: "23",
		month: "Oktober",
	},

	{ 
		title: "Lovskola 26-29 oktober",			
		month: "Oktober",
	},
	
	{ 
		title: "Vecka 44 - Läslov 26-30 oktober",		
		date: "26",
		month: "Oktober",
	},
	
	{ 
		title: "Studiedag, dag för utvecklingssamtal",		
		date: "11",
		month: "November",
	},
	{ 
		title: "Julavslutning och även sista dag för lärarna",		
		date: "18",
		month: "December",
	},
	{ 
		title: "Jullov 21 december till 7 januari",		
		date: "21",
		month: "December",
	},
	{ 
		title: "Lärarnas första dag 8 januari",		
		date: "8",
		month: "Januari",
	},
	{ 
		title: "Elevernas första dag 11 januari",		
		date: "11",
		month: "Januari",
	},
	
	{ 
		title: "Lovskola 1-4 mars åk 6-8",
		month: "Mars",
	},
	{ 
		title: "Lovskola 1-5 mars åk 9",		
		month: "Mars",
	},

	{ 
		title: "Sportlov 01-05 mars",		
		date: "01",
		month: "Mars",
	},
	{ 
		title: "Lovdag",		
		date: "10",
		month: "Mars",
	},
	{ 
		title: "Studiedag, dag för utvecklingssamtal",		
		date: "24",
		month: "Mars",
	},
	{ 
		title: "Påsklov 26 mars till 2 april ",		
		date: "26",
		month: "Mars",
	},
	{ 
		title: "Lovskola 30 mars till 2 april",
		date: "26",		
		month: "Mars",
	},
	{ 
		title: "Torsdag och fredag 6-7 maj - Lovdagar",		
		date: "6 - 7",
		month: "Maj",
	},
		
	{ 
		title: "Sommaravslutning",		
		date: "11",
		month: "Juni",
	},
	{ 
		title: "Lovskola 14-17 juni åk 6-8",
		date: "14",
		month: "Juni",
	},
	{ 
		title: "Lovskola 14-24 juni åk 9",		
		date: "14",
		month: "Juni",
	},
	{ 
		title: "Lärarnas sista dag",		
		date: "18",
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
								<h2 className="title-head">Läsåret <span> 2026/2027</span></h2>
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