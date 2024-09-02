import React, {Component} from 'react';

// Layout
import Header from "../layout/header/header1";
import ContactInfoCard from '../elements/contact-info-card';

class Laxhjalp extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content">					
					<div className="content-block">
						<div className="section-area section-sp2">
							<div className="container">
								<div className="row">
								<div className="col-md-12 heading-bx left">
								<h2 className="title-head">Al-Kowneyn Utbildning Centrum erbjuder läxhjälp på flera platser och tider!</h2>
							</div>
									<div className="col-lg-8 col-xl-8">
										<div className="recent-news blog-lg">
											<div className="info-bx">
											<h4>Rinkeby folkets hus:</h4>
												
												<p>Lördagar och söndagar kl. 15.00-17.00</p>
											
                        <br/>
                        <br/>
                        <p>Tillsammans hjälper vi eleverna att lyckas! </p>
                       
						<br/>
						<p>Varmt välkomna!</p>
                      </div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
				
				<ContactInfoCard/>
				
			</>
		);
	}
}

export default Laxhjalp;