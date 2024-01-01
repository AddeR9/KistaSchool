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
											<p>Kista International School är en skola som har utbildning från förskoleklass ända upp till årskurs 9, en så kallad F-9 skola. Skolan har ökat konstant de senaste åren och läsåret 2023/2024 är det ca 660 elever, vilket är en ökning med ca 60 elever i jämförelse med föregående läsår. Det är fyra klasser per årskurs på lågstadiet, tre klasser per årskurs på mellanstadiet och två eller tre klasser per årskurs på högstadiet. Inom ett par år kommer skolan att vara tre till fyra klasser per årskurs fullt ut. Skolan är med det sagt mycket populär så om du är intresserad av plats så vänta inte med att ansöka.</p>
                        <br/>
                        <p>Skolan värnar om en god värdegrund, professionell personal, god undervisning och tydliga ramar och strukturer. Därför lyckas också skolan väl med elevernas social utveckling och kunskapsutveckling där eleverna har höga meritvärden, i synnerhet med tanke på elevernas förutsättningar och bakgrund.</p>
                        <br/>
                        <p>För att ge eleverna så goda förutsättningar som möjligt så prioriterar skolan kärnämnena svenska, matematik och engelska där skolan ger mer undervisningstid än vad Läroplanen kräver. Skolan har dessutom så kallat tvålärarskap i matematik och svenska på högstadiet samt en välutvecklad elevhälsa med kompetenser som skolsköterskor, kurator, studie- och yrkesvägledare, specialpedagoger, speciallärare, logoped och tillgång till skolläkare och psykolog.</p>
                        <br/>
                        <p>Skolan har också en stor och välorganiserad fritidsverksamhet där det finns organiserade rast- och fritidsaktiviteter för eleverna både på låg- och mellanstadiet. Våra duktiga fritidspedagoger arbetar också som klassassistenter på låg- och mellanstadiet vilket innebär att vi på de allra flesta lektioner har minst två personal, alternativt att det är halvklass.</p>
						<br/>
						<p>För att värna om elevernas trivsel och trygghet så har vi två skolvärdar på skolan som arbetar för att eleverna skall trivas och känna sig trygga men också som stöd för all personal i arbetet utanför lektionssalarna.</p>


						
						

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