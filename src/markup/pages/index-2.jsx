import React, {Component} from 'react';

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements
import ServicesContent2 from '../elements/services-content-2';
import EventsContent2 from '../elements/events-content2';
import RecentNewsSlider from '../elements/recent-news-slider';
import Testimonial3 from '../elements/testimonial3';
import ContactInfoCard from '../elements/contact-info-card';
import TotalPeople from '../pages/total-people'
import Start from '../../Start';


class Index2 extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
				
					<div className="content-block" id="content-area">
					<Start />
					<ServicesContent2 />
					<RecentNewsSlider />
					<TotalPeople />
					<Testimonial3 />
					<ContactInfoCard />
	
					</div>
					
				</div>				
			</>
		);
	}
}

export default Index2;