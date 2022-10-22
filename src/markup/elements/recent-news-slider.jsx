import React,{Component} from 'react'; 
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Images
import blogPic1 from '../../images/bilder/matematik.jpeg';
import blogPic2 from '../../images/bilder/aik.jpeg';
import blogPic3 from '../../images/bilder/svamp.jpg';

// Content
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

class RecentNewsSlider extends Component{
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				<div className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-md-12 heading-bx left">
								<h2 className="title-head">Senaste <span>nytt</span></h2>
							</div>
						</div>
						<Slider {...settings} className="recent-news-carousel slick-slider owl-btn-1">
							{content.map((item)=>(
								<div className="slider-item">
									<div className="recent-news">
										<div className="action-box">
											<img src={item.thumb} alt=""/>
										</div>
										<div className="info-bx">
											<ul className="media-post">
												<li><Link to="/blog-details"><i className="fa fa-calendar"></i>{item.date}</Link></li>
												<li><Link to="/blog-details"><i className="fa fa-user"></i>{item.by}</Link></li>
											</ul>
											<h5 className="post-title"><Link to="/blog-details">{item.title}</Link></h5>
											<p>{item.text}</p>
											<div className="post-extra">
												<Link to="/blog-details" className="btn-link">Läs mer</Link>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</>
		);
	}
}

export default RecentNewsSlider;