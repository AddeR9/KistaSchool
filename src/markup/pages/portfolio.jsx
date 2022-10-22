import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements
import PortfolioContent from "../elements/portfolio-content";

// Images
import bannerImg from '../../images/banner/banner1.jpg';
import ContactInfoCard from '../elements/contact-info-card';

class Portfolio extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content">
					<div className="breadcrumb-row">
						<div className="container">
							<ul className="list-inline">
								<li><Link to="/">Om oss</Link></li>
								<li>Våra lokaler</li>
							</ul>
						</div>
					</div>
					
					<div className="content-block">
						<div className="section-area section-sp1 gallery-bx">
							<div className="container">
							<div className="col-md-12 heading-bx left">
								<h2 className="title-head">Våra <span>lokaler</span></h2>
							</div>
								<PortfolioContent />
							</div>
						</div>
						
					</div>
					
				</div>
				<ContactInfoCard/>				
			</>
		);
	}
}

export default Portfolio;