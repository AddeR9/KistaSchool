import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../../../images/logo/logo_transparent_background.png';
import galleryPic1 from '../../../images/gallery/pic1.jpg';
import galleryPic2 from '../../../images/gallery/pic2.jpg';
import galleryPic3 from '../../../images/gallery/pic3.jpg';
import galleryPic4 from '../../../images/gallery/pic4.jpg';
import galleryPic5 from '../../../images/gallery/pic5.jpg';
import galleryPic6 from '../../../images/gallery/pic6.jpg';
import galleryPic7 from '../../../images/gallery/pic7.jpg';
import galleryPic8 from '../../../images/gallery/pic8.jpg';

const content = [
	{
		thumb: galleryPic1,
	},
	{
		thumb: galleryPic2,
	},
	{
		thumb: galleryPic3,
	},
	{
		thumb: galleryPic4,
	},
	{
		thumb: galleryPic5,
	},
	{
		thumb: galleryPic6,
	},
	{
		thumb: galleryPic7,
	},
	{
		thumb: galleryPic8,
	},
]

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#FDC716",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#f7b205",
		iconColor: "rgba(255, 255, 255, 1)",
		showDownloadButton: false,
		showAutoplayButton: false,
		showThumbnailsButton: false,
	},
	caption: {
		captionColor: "#232eff",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};



class Footer1 extends Component{
	render(){
		return(
			<>
								<div className="bg-primary text-white contact-info-bx">
					<div className="heading-bx left mb-4">
						<h3 className="m-b10 title-head">Kontakt <span> Info</span></h3>
					</div>
					<div className="widget widget_getintuch">	
						<ul>
							<li><i className="ti-location-pin"></i>Sibeliusgången 11, 164 77 Kista</li>
							<li><i className="ti-mobile"></i>08-510 602 90</li>
							<li><i className="ti-email"></i>info@kistaschool.se</li>
						</ul>
					</div>
					<h5 className="m-t0 m-b20">Följ oss</h5>
					<ul className="list-inline contact-social-bx m-b0">
						<li><Link to="#" className="btn outline radius-xl"><i className="fa fa-facebook"></i></Link></li>
						<li><Link to="#" className="btn outline radius-xl"><i className="fa fa-instagram"></i></Link></li>
					</ul>
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 mt-4"> © 2022 <span className="text-white">Kista International School</span>  All Rights Reserved.</div>
					</div>
				</div>
				
			</>
		);
	}
}

export default Footer1;
