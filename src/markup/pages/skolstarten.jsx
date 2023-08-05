import React, {Component} from 'react';

// Layout
import Header from "../layout/header/header1";
import ContactInfoCard from '../elements/contact-info-card';

class SkolStarten extends Component{
	
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
								<h2 className="title-head">Välkomna till ett nytt läsår!</h2>
							</div>
									<div className="col-lg-8 col-xl-8">
										<div className="recent-news blog-lg">
											<div className="info-bx">
												<p>Vi välkomnar både gamla och nya elever och föräldrar till ett nytt läsår. Vi ser fram emot ett fortsatt gott samarbete för elevernas framgång. Den 21 augusti är första skoldagen för årskurserna 1-9. Första dagens tider ser ut så här och eleverna kan äta lunch i skolan.</p>
                        <br/>
                        <br/>
                        <p>❖ Åk 1-3 Gamla elever åker buss till skolan och börjar 8.00 i sina hemklassrum. Nya elever börjar 9.00 och lärarna möter elever och föräldrar i aulan. Eleverna tillbringar hela dagen i skolan som en vanlig dag och åker buss hem.</p>
                        <p>❖ Åk 4-6 Gamla elever börjar 9.30 i sina hemklassrum. Nya elever börjar 9.00 och lärarna möter eleverna i aulan. Dagen avslutas i och med lunchen vid cirka 12.00-12.30.</p>
                        <p>❖ Åk 7-9 Gamla elever börjar 9.30, information om sal finns vid entrén. Nya elever börjar 9.00 och lärarna möter eleverna i aulan. Dagen avslutas i och med lunchen vid cirka 12.00-12.30.</p>
						<br/>
						<p>Skolledningen välkomnar också nya föräldrar att komma på informationsmöte torsdagen den 17 augusti klockan 15.00 i skolans aula. Det är mycket nytt när man börjar ny skola, både för elever och föräldrar, och det här mötet hjälper er att vara mer förberedda inför</p>
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

export default SkolStarten;