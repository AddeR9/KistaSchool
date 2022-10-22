import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from "../layout/header/header1";
import ContactInfoCard from '../elements/contact-info-card';

// Elements
import BlogAside from "../elements/blog-aside";


// Images
import bannerImg from '../../images/banner/banner2.jpg';
import testiPic1 from '../../images/testimonials/pic1.jpg';

// Images
import blogPic1 from '../../images/bilder/matematik.jpeg';
import blogPic2 from '../../images/bilder/aik.jpeg';
import blogPic3 from '../../images/bilder/svamp.jpg';

const content = [
	{ 
		thumb: blogPic1,
		title: "Matematik",
		text: "Lågstadieelevers föreställningar om stora tal och positionssystemet. (åk1) Många elever har en ganska god taluppfattning redan innan de börjar skolan.  ",
		date: "8 Nov 2021",
		by: "Ann-Sofie"
	},
	{ 
		thumb: blogPic2,
		title: "Grattis Amar!",
		text: "Idag känner vi extra stolthet över våra tidigare elever Amar Abdirahman Ahmed som gjorde sin allsvenska debut för AIK idag. ",
		date: "7 Nov 2021",
		by: "Admin"
	},
	{ 
		thumb: blogPic3,
		title: "Klass lärdbo (åk1)",
		text: "Idag avslutade vi temat höst i klass Lärbro (åk1). Under de senaste veckorna har vi tränat på att skriva enkla faktatexter om våra vanligare svampar, pysslat med både höstlöv och fantassvampar, haft Kahoot-frågesport och sett på höstfilmer med tillhörande diskussionsfrågor. Efter lovet påbörjar vi temat  Kropp och hälsa.",
		date: "29 Oct 2021",
		by: "Ann-Sofie"
	},
]

class kortfakta extends Component{
	
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
								<h2 className="title-head">Kort fakta</h2>
							</div>
									<div className="col-lg-8 col-xl-8">
										<div className="recent-news blog-lg">
											<div className="info-bx">
												<p>Kista International School är en fristående grundskola i nordvästra Stockholm. Huvudman för skolan är Stiftelsen för bildning i Sverige som är en icke-vinstdrivande organisation. I Kista International School arbetar vi aktivt med skapande av en skola där barn får rätta förutsättningar att inhämta kunskaper och utvecklas så långt som möjligt. Vår skola är en mångkulturell skola med barn vars föräldrar kommer från alla olika delar av världen. Vi strävar mot att tillgodose alla barns behov genom socialt inkluderande möten och välkomnande miljö i arbetet mot en skola för alla. </p>
                        <br/>
                        <p>Vårt motto är att barn ska känna sig trygga i relationen med vuxna, trygga i och utanför klassrummet och ha ett inflytande över sin utbildning. Kista International School kan stoltsera sig med att tillhöra de skolor som uppnår goda kunskapsresultat varje år i Sverige med hänsyn taget till barnens socioekonomiska förutsättningar. Framgångsfaktorerna är flera; drivkraft och stabilitet i skolledningen, ett stort engagemang bland våra anställda, samt viljan att utveckla och förbättra de olika skolverksamheterna.</p>
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

export default kortfakta;