import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import ServicePic1 from '../../images/bilder/fasad/fasad12.jpeg';
import ServicePic3 from '../../images/bilder/lokaler.jpeg';

class ServicesContent2 extends Component{
	render(){
		return(
			<>
				<div className="section-area section-sp1 service-info-bx">
					<div className="container">
						<div className="row">
							<div className="col-md-12 heading-bx left">
								<h2 className="title-head">Om <span> oss</span></h2>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="service-bx m-b30">
									<div className="action-box">
										<img src={ServicePic1} alt=""/>
									</div>
									<div className="info-bx">
										<h4 className="m-b10"><Link to="/kortfakta">Kort fakta</Link></h4>
										<p className="m-b20">Kista International School är en fristående grundskola i nordvästra Stockholm. Huvudman för skolan är Stiftelsen för bildning i Sverige.....</p>
										<Link to="/kortfakta" className="btn radius-xl">Läs mer</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="service-bx m-b30">
									<div className="action-box">
										<img src={ServicePic3} alt=""/>
									</div>
									<div className="info-bx">
										<h4 className="m-b10"><Link to="/courses-details">Våra lokaler</Link></h4>
										<p className="m-b20">Ta en titt på alla våra lokaler vi har i skolan...</p>
										<br/>
										<Link to="/lokaler" className="btn radius-xl">Läs mer</Link>
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

export default ServicesContent2;