import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
											<p>Kista International School är en skola som har utbildning från förskoleklass ända upp till årskurs 9, en så kallad F-9 skola. Skolan har ökat konstant de senaste åren och är nu en stor skola med ca 750 elever. Visionen är att vi ska vara en skola i den här storleken med tre eller fyra klasser per årskurs och att skolan sammanlagt har runt 800 elever.</p>
                        <br/>
                        <p>Skolan värnar om en god värdegrund, professionell personal, god undervisning och tydliga ramar och strukturer. Därför lyckas också skolan väl med elevernas sociala utveckling och kunskapsutveckling där en hög andel av eleverna får gymnasiebehörighet, 54 av 55 elever läsåret 2025/2026, i synnerhet med tanke på elevernas förutsättningar och bakgrund. Skolverket gör varje år en så kallad SALSA-mätning där man tittar på elevernas förutsättningar när de börjar skolan och jämför det med resultaten som eleverna har när de slutar i årskurs 9. I den här mätningen för läsåret 2024/2025 så var skolan nummer två i Sverige när det gäller elevernas positiva utveckling. I januari/februari brukar Skolverket redovisa sin mätning för det föregående läsåret.</p>
                        <br/>
                        <p>För att ge eleverna så goda förutsättningar som möjligt så har skolan inför det här läsåret utökat med en kurator så att vi nu har två kuratorer och utökat med två speciallärare på lågstadiet så att vi nu har fyra speciallärare. 
På mellanstadiet är vi organiserade med fem lärare och två fritidspedagoger i varje årskurs. Vi eftersträvar att vara två vuxna på alla helklasslektioner; i svenska är det alltid två lärare i ett så kallat tvålärarskap och i övriga ämnen en lärare och en fritidspedagog.
På högstadiet så har vi tvålärarskap i svenska, matematik, bild och musik helt och hållet, samt att vi har tvålärarskap i vissa klasser/årskurser i So, No och engelska. Utöver det så har vi halvklass i slöjd, hemkunskap, teknik samt halvklass en lektion i veckan för årskurs 9 i No. 
Vi har en väl tilltagen elevhälsa med kompetenser som skolsköterskor, kuratorer, studie- och yrkesvägledare, specialpedagoger, speciallärare, logoped samt tillgång till skolläkare och skolpsykolog.</p>
                        <br/>
                        <p>Skolan har en stor och välorganiserad fritidsverksamhet där det finns organiserade rast- och fritidsaktiviteter för eleverna både på låg- mellan- och högstadiet. Våra duktiga fritidspedagoger arbetar även med vårt goda sociala klimat på skolan så att elever ska kunna känna sig lugna och trygga på rasterna, samt finns som stöd på lektioner på låg- och mellanstadiet.</p>
						<br/>
						<p></p>


						
						

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