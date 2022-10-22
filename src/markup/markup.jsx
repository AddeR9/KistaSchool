import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// Home Pages
import Index2 from './pages/index-2';
import Portfolio from './pages/portfolio';

// About Us
import Contact1 from './pages/contact-1';


// Events
import EventsContent2 from './elements/events-content2';

//Nyheter
import BlogDetails from './pages/blog-details';
  

// Faq
import Faq1 from './pages/faq-1';


// Other Pages


// Courses


// Blog Pages


// Contact Us


class Markup extends Component{
	render(){
		return(
			<>
				<BrowserRouter basename={'/'}>
					<Switch>
					
						{/* Home Pages */}
						<Route path='/' exact component={Index2} />						
						
						{/* About Us */}
						<Route path='/lokaler' exact component={Portfolio} />				
						<Route path='/kontaktaoss' exact component={Contact1} />						
		
						
						{/* Events */}
						<Route path='/datum' exact component={EventsContent2} />				
						
						{/* Events */}
						<Route path='/nyheter' exact component={BlogDetails} />						

						
						{/* Faq */}
						<Route path='/faq' exact component={Faq1} />

					
						
						{/* Other Pages */}
						
						
						{/* Courses */}
						
						
						{/* Blog Pages */}
					
						
					</Switch>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
			
		);
	}
}

export default Markup;