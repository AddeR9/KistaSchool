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
												<p>Måndagar kl. 17.00 - 19.00 för elever i åk 4-7.</p>
												<p>Lördagar och söndagar kl. 15.00-17.00 för elever i åk 8 och 9.</p>
											<h4>Husby (Folkets Husby):</h4>
												<p>Måndagar och onsdagar kl. 17.00 - 19.00.</p>
											<h4>Järfälla (Huset på höjden):</h4>
												<p>Måndagar och onsdagar kl. 17.30 -19.30.</p>
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