import React,{Component} from 'react'; 
import { Link } from 'react-router-dom';

// Images
import bg4 from '../../images/background/bg4.jpg';
import EventImg10 from '../../images/bilder/Personal utbildning.jpeg';
import EventImg12 from '../../images/bilder/skolavslutning.jpeg';
import EventImg13 from '../../images/bilder/skolstart2019.jpeg';
import Header from '../layout/header/header1';
import ContactInfoCard from './contact-info-card';
// Portfolio Content
const content = [
	{ 
		thumb: EventImg10,
		tag: ['Happening',],
		place: "Jacobiskolan, Stora Aulan",
		title: "Föräldrarmöte",		
		text: "sdfsdffsdsdm is simply dummy text of the printing and typeset. Lorem Ipsum has been the industry's standard dummy text ever since the..",		
		time: "17:00 - 19:00",
		date: 24,
		month: "Mars",
	},
	{ 
		thumb: EventImg13,
		tag: ['Upcoming',],
		place: "Fritidshemmet Solrosen",
		title: "Solrosen har öppet under påsklovet",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..",
		time: "08:00 - 16:00",
		date: 6,
		month: "April",
	},
	{ 
		thumb: EventImg12,
		tag: ['Expired',],
		place: "Jacobiskolan",
		title: "Skolavslutning",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..",
		time: "11:00 - 14:00",
		date: 10,
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
								<h2 className="title-head">Viktiga <span> datum</span></h2>
							</div>
						</div>
						<div className="row">
							{content.map((item) =>(
								<div className="col-md-12">
									<div className="event-bx style1">
										<div className="action-box">
											<img src={item.thumb} alt=""/>
										</div>
										<div className="info-bx d-flex">
											<div className="event-info">
												<ul className="media-post">
													<li><Link to="/events-details"><i className="fa fa-clock-o"></i> {item.time}</Link></li>
													<li><Link to="/events-details"><i className="fa fa-map-marker"></i> {item.place}</Link></li>
												</ul>
												<h4 className="event-title"><Link to="/events-details">{item.title}</Link></h4>
												<p>{item.text}</p>
											</div>
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