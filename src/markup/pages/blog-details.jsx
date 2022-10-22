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
													<li><Link to="#"><i className="fa fa-calendar"></i>11 Nov 2021</Link></li>
													<li><Link to="#"><i className="fa fa-camera"></i>Ann-Sofie</Link></li>
												</ul>
												<h3 className="post-title">Lågstadieelevers föreställningar om stora tal och positionssystemet (åk1).</h3>
												<p>Vem av er har besökt en möbelaffär förut? Vad såg ni? Berätta! 
Vi hade mycket intressanta diskussioner i klass Lärbro (åk 1) kring ovanstående frågor. Eleverna fick var sin stencil med olika soffor och prislappar. De klippte ut dessa och klistrade i dessa i sina matteböcker. Vad kan sofforna kosta? Sedan fick de i par diskutera med varandra hur de tänkte kring prissättningen innan de presenterade för hela klassen. Det bästa med uppgiften var att det inte fanns något rätt eller fel. Alla tankar och sätt är förhandlingsbara. T.ex den största soffan kan både vara dyrast och billigast beroende på många omständigheter såsom om den är helt ny eller begagnad. Vi fick även in nya begrepp såsom billig och dyr. Idén hämtad från matematikdidaktikern Ulla Öbergs bok ”sluta räkna -börja se” :)</p>
												
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