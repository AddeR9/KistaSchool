import React,{Component} from 'react'; 
import { Link } from 'react-router-dom';

class ContactInfoCard extends Component{
	render(){
		return(
			<>
				<div className="bg-primary text-white contact-info-bx">
					<div className="heading-bx left mb-4">
						<h3 className="m-b10 title-head">Kontakt <span> Info</span></h3>
					</div>
					<div className="widget widget_getintuch">	
						<ul>
							<li><i className="ti-location-pin"></i>Sibeliusgången 11, 164 77 Kista</li>
							<li><i className="ti-mobile"></i>08-510 602 90</li>
							<li><i className="ti-email"></i>info@kistaschool.se</li>
						</ul>
					</div>
					<h5 className="m-t0 m-b20">Följ oss</h5>
					<ul className="list-inline contact-social-bx m-b0">
						<li><Link to="#" className="btn outline radius-xl"><i className="fa fa-facebook"></i></Link></li>
						<li><Link to="#" className="btn outline radius-xl"><i className="fa fa-instagram"></i></Link></li>
					</ul>
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 mt-4"> © 2022 <span className="text-white">Kista International School</span>  All Rights Reserved.</div>
					</div>
				</div>
			</>
		);
	}
}

export default ContactInfoCard;