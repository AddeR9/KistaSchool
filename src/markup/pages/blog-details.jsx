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
import blogPic1 from '../../images/bilder/personal/mittistockholm.jpg';
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

class BlogDetails extends Component{
	
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
								<h2 className="title-head">Nyheter</h2>
							</div>
									<div className="col-lg-8 col-xl-8">
										<div className="recent-news blog-lg">
											<div className="action-box blog-lg">
												<img src={blogPic1} alt=""/>
											</div>
											<div className="info-bx">
												<ul className="media-post">
													<li><Link to="#"><i className="fa fa-calendar"></i>2021-03-13</Link></li>
													<li><Link to="#"><i className="fa fa-camera"></i>Mitt i Stockholm</Link></li>
												</ul>
												<h2 className="post-title">Skolresultaten lyfte när föräldrarna fick makten</h2>
												<br>
												</br>
												<h4>Om det blir stökigt i en klass sitter föräldrarna med på lektionerna tills det lugnar sig. ”Det känns bra att de får veta vad deras barn gör”, säger Yusuf Omar, elev i Sveriges mest framgångsrika, föräldradrivna skola.</h4>
												<br>
												</br>
												<p>Av de 520 eleverna är det bara en som har svenska som modersmål.</p>
												<p>94 procent har somalisk familjebakgrund, vilket gör Kista International School i Akalla till en av Stockholms mest etniskt segregerade skolor.</p>
												<p>Den är samtidigt en av de mest framgångsrika.</p>
												<p>I hela Sverige finns bara en annan skola som presterar bättre meritvärden, i förhållande till det socioekonomiska utgångsläget.</p>		
												<p>– Förra året var det tyvärr tre elever som inte nådde gymnasiebehörighet. Vi hade klarat 100 procent om det inte varit för coronan, säger Johan Segerfeldt, rektor sedan fem år tillbaka.</p>	
												
																		
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-xl-4">
										<BlogAside />
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

export default BlogDetails;