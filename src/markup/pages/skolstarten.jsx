import React, {Component} from 'react';

// Layout
import Header from "../layout/header/header1";
import ContactInfoCard from '../elements/contact-info-card';

class Öppethus extends Component{
	
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
								<h2 className="title-head">Öppet hus</h2>
							</div>
									<div className="col-lg-8 col-xl-8">
										<div className="recent-news blog-lg">
											<div className="info-bx">
												<h4>Hipp Hipp Hurra!!!</h4>
												<br/>
												<p>Snart fyller ert barn sex år och det är dags att börja förskolekklass</p>
												<p>Kista International School välkommar er till våra öppet hus-dagar</p>
												<h1>Onsdag den 14-01-2026. Kl. 17:00 - 19:30</h1>
												<br/>
												<h1>Torsdag den 29-01-2026. Kl 17:00 - 19:00</h1>
												<br/>
												
												<br/>
												<h1>Hjärtligt välkomna</h1>
												<br/>
												<h1>Vi ses snart!</h1>

						

                        <br/>
                        <br/>
                        
                        
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

export default Öppethus;