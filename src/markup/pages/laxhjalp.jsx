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
								<h2 className="title-head">Läxhjälp för årskurs 8 och 9</h2>
							</div>
									<div className="col-lg-8 col-xl-8">
										<div className="recent-news blog-lg">
											<div className="info-bx">
												<p>Al-Kowneyn Utbildning Centrum erbjuder läxhjälp för årskurs 8 och 9 i Rinkeby folkets hus</p>
                        <br/>
                        <br/>
                        <p>❖ Du kan gå dit alla lördagar och söndagar 15.00-17.00. </p>
                       
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