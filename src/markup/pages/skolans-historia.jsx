import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from "../layout/header/header1";
import ContactInfoCard from '../elements/contact-info-card';

class skolanshistoria extends Component{
	
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
								<h2 className="title-head">Skolans historia</h2>
							</div>
									<div className="col-lg-8 col-xl-8">
										<div className="recent-news blog-lg">
											<div className="info-bx">
												<p>Al-kowneyn Utbildning Centrum A-KUC är en icke vinstdrivande förening som bildades år 1999 av en grupp föräldrar som bor i Rinkeby i Stockholm. A-KUC består av 30 medlemmar. Styrelsens medlemmar är högsta beslutande organ. Al-Kowneyn Utbildning Centrum är en partipolitiskt och religiöst obunden ideell förening med säte i Stockholms kommun. Föreningen har bedrivit skola sedan 2010. Föreningens syfte är att bedriva högkvalitativ utbildning för barn och ungdomar från Västra Järva och därigenom ge dessa förutsättningar för en bättre framtid. </p>
                        <br/>
                        <p>Föreningen bedriver tre verksamheter som hänger samman. Först och främst är föreningen huvudman för Kista International School. Föreningen bedriver också läxhjälp i tre olika kommuner, tre stadsdelar i stockholms stad (Tensta, Husby och Rinkeby) samt i kommunerna Sigtuna och Järfälla.</p>
                        <br/>
                        <h4>Syftet med Al Kowneyns verksamhet</h4>
                        <p>❖ Att investera i den yngre generationen i form av god uppfostran, utbildning ocharbetstillfällen.</p>
                        <p>❖ Att hjälpa föräldrar kunna hjälpa sina barn i form av läxhjälp, föräldrautbildning ocharbetstillfällen.</p>
                        <p>❖ Att tillsammans med andra goda krafter i vårt samhälle bekämpa utanförskap och socialaorättvisor.</p>
                        <p>❖ Att förstärka och bevara våra ungas och vuxnas identitet genom utbildning, kultur ochtradition.</p>
                        <p>❖ Att verka för humanistiska värden så som demokrati, mänskliga rättigheter, global solidaritetoch rättvisa.</p>
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

export default skolanshistoria;