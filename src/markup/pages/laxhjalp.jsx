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
								<h2 className="title-head">Al-Kowneyn Utbildning Centrum anordnar läxhjälp!</h2>
							</div>
									<div className="col-lg-8 col-xl-8">
										<div className="recent-news blog-lg">
											<div className="info-bx">
											<h4>Rinkeby folkets hus:</h4>
												
												<p>Åk 4–7: Måndagar kl. 17.00–19.00 </p>
												<p>Åk 8–9: Lördagar och söndagar kl. 14.00–16.00 </p>
												
											
                        <br/>
                        <br/>
											<h4>Tensta (Järva Gymnasium): </h4>
											<p>Måndagar och onsdagar kl. 17.00–19.00  </p>
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