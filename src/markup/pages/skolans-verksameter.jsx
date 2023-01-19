import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from "../layout/header/header1";
import ContactInfoCard from '../elements/contact-info-card';

class skolansverksamheter extends Component{
	
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
								<h2 className="title-head">Skolans verksamheter</h2>
							</div>
									<div className="col-lg-8 col-xl-8">
										<div className="recent-news blog-lg">
											<div className="info-bx">
												<p>Kista International School är en skola som har utbildning från förskoleklass ända upp till årskurs 9, en så kallad F-9 skola. Skolan har läsåret 2022/2023 ca 610 elever och ökar i storlek för varje år. Idag är det mellan två till fem klasser per årskurs men skolan går emot att vara fyra klasser per årskurs och hösten 2023 så startas fyra klasser i förskoleklass. Skola är mycket populär så om du är intresserad av plats så vänta inte med att ansöka.</p>
                        <br/>
                        <p>Skolan värnar om en god värdegrund, professionell personal, god undervisning och tydliga ramar och strukturer. Därför lyckas också skolan väl med elevernas social utveckling och kunskapsutveckling och har höga meritvärde, i synnerhet med tanke på elevernas förutsättningar och bakgrund.</p>
                        <br/>
                        <p>För att ge eleverna så goda förutsättningar som möjligt så prioriterar skolan kärnämnena svenska, matematik och engelska där skolan ger mer undervisningstid än vad Läroplanen kräver. Skolan har dessutom så kallat tvålärarskap i matematik på högstadiet och från och med läsåret 2023/2024 även tvålärarskap i svenska på högstadiet.</p>
                        <br/>
                        <p>Skolan har också en stor och välorganiserad fritidsverksamhet där det finns organiserade rast- och fritidsaktiviteter för eleverna både på låg- och mellanstadiet. Våra duktiga fritidspedagoger arbetar också som klassassistenter på låg- och mellanstadiet vilket innebär att vi alltid har minst två personal i varje klass.</p>
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

export default skolansverksamheter;