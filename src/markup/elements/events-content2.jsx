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
		date: 18,
		month: "Augusti",
	},
/*	{ 
		title: "PRAO åk 8, 6-17 Oktober",		
		date: 6,
		month: "Oktober",
	},*/
	{ 
		title: "Studiedag - eleverna lediga",		
		date: 24,
		month: "Oktober",
	},
	{ 
		title: "Höstlov 27-31 oktober",		
		date: "27",
		month: "Höstlov",
	},
	{ 
		title: "Lovskola 27-30 oktober",		
		date: "",
		month: "Lovskola",
	},
	{ 
		title: "Dag för utvecklingssamtal, men eleverna är lediga",		
		date: "12",
		month: "November",
	},
	{ 
		title: "Julavslutning",		
		date: 19,
		month: "December",
	},
	{ 
		title: "Jullov 22 december till 7 januari",		
		date: "",
		month: "Jullov",
	},

	
	{ 
		title: "Elevernas första dag",		
		date: "8",
		month: "Januari",
	},
	{ 
		title: "Sportlov 23-27 februari",		
		date: "",
		month: "Sportlov",
	},
	{ 
		title: "Lovskola 23-26 februari",		
		date: "",
		month: "Lovskola",
	},
	
	{ 
		title: "Dag för utvecklingssamtal, men eleverna är lediga",		
		date: 18,
		month: "Mars",
	},
	{ 
		title: "20 mars Eid ledigt (Kan eventuellt ändras till annan dag) ",		
		date: "20",
		month: "Mars",
	},

	{ 
		title: "Påsklov 3-10 april",		
		date: "",
		month: "Påsklov ",
	},
	
	{ 
		title: "Lovskola 7-10 april",		
		date: "",
		month: "Lovskola",
	},
	
	{ 
		title: "Ledigt, fritids stängt (helgdag)",		
		date: "1",
		month: "Maj",
	},
	{ 
		title: "Ledigt",		
		date: "14 - 15",
		month: "Maj",
	},
	
	{ 
		title: "Skolavslutning",		
		date: "11",
		month: "Juni",
	},
	
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
								<h2 className="title-head">Läsåret <span> 2025/2026</span></h2>
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

export default EventsContent2;