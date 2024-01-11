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
												<p>Öppet hus för föräldrar som är intresserade av att ansöka om plats till förskoleklass nästa läsår. Det finns möjlighet att komma vid två tillfällen. Onsdag den 17 januari klockan 17.00-19.30 och torsdag 1 februari klockan 17.00-19.00.</p>
                        <br/>
                        <br/>
                        <p> Välkomna!</p>
                        
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