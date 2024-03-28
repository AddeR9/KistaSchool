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
		title: "Studiedag 15 november, dag för utvecklingssamtal",		
		date: "",
		month: "Studiedag",
	},
	{ 
		title: "fritids stängt (studiedag)",		
		date: "15",
		month: "November",
	},
	{ 
		title: "Julavslutning, men fritids öppet för elever som stannar längre än avslutningen",		
		date: 22,
		month: "December",
	},
	{ 
		title: "Jullov 23 december till 8 januari",		
		date: "",
		month: "Jullov",
	},

	{ 
		title: "fritids stängt (helgdag)",		
		date: "25-26",
		month: "December",
	},
	{ 
		title: "fritids stängt (helgdag)",		
		date: "01",
		month: "Januari",
	},
	{ 
		title: "fritids stängt (studiedag)",		
		date: "08",
		month: "Januari",
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
		title: "fritids stängt (studiedag)",		
		date: "26",
		month: "Februari",
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
		title: "fritids stängt (helgdag)",		
		date: "29",
		month: "Mars",
	},
	{ 
		title: "fritids stängt (helgdag)",		
		date: "01",
		month: "April",
	},
	{ 
		title: "Lovskola 2-5 april",		
		date: "",
		month: "Lovskola",
	},
	{ 
		title: "fritids stängt (studiedag)",		
		date: "05",
		month: "April",
	},
	{ 
		title: "Eid 10 april (lovdag)",		
		date: "10",
		month: "April",
	},
	{ 
		title: "Ledigt, fritids stängt (helgdag)",		
		date: "1",
		month: "Maj",
	},
	{ 
		title: "Ledigt",		
		date: "9-10",
		month: "Maj",
	},
	{ 
		title: "fritids stängt (helgdag)",		
		date: "9",
		month: "Maj",
	},
	{ 
		title: "Ledigt",		
		date: "6-7",
		month: "Juni",
	},
	{ 
		title: "fritids stängt (helgdag)",		
		date: "6",
		month: "Juni",
	},
	{ 
		title: "Skolavslutning, men fritids öppet för elever som stannar längre än avslutningen",		
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