import React,{Component} from 'react'; 
import { Link } from 'react-router-dom';

// Images
import EventImg1 from '../../images/bilder/fasad/kistaschoolfirst.jpg';
import Header from '../layout/header/header1';
import ContactInfoCard from './contact-info-card';
// Portfolio Content
const content = [
	{ 
		thumb: EventImg1,
		tag: ['Happening',],
		place: "Kista International School",
		title: "Elevernas första dag",		
		date: 21,
		month: "augusti",
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
								<h2 className="title-head">Läsåret <span> 2022/2023</span></h2>
							</div>
						</div>
						<div className="row">
							{content.map((item) =>(
								<div className="col-md-12">
									<div className="event-bx style1">
										<div className="action-box">
										
										</div>
										<div className="info-bx d-flex">
											<div className="event-info">
												<ul className="media-post">
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