import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements
import ContactInfoCard from '../elements/contact-info-card';

// Images
import bannerImg from '../../images/banner/banner2.jpg';

class Contact1 extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content">
					<div className="breadcrumb-row">
						<div className="container">
							<ul className="list-inline">
								<li><Link to="/">Tillbaka</Link></li>
							</ul>
						</div>
					</div>
					
					<div className="content-block">
						
						<div className="page-banner contact-page section-sp1">
							<div className="container">
								<div className="row">
									<div className="fullwidth" style={{width:"100%"}}> 
										<ContactInfoCard />
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
								
			</>
		);
	}
}

export default Contact1;