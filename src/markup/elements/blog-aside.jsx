import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';

// Images
import galleryPic1 from '../../images/gallery/pic1.jpg';
import galleryPic2 from '../../images/gallery/pic2.jpg';
import galleryPic3 from '../../images/gallery/pic3.jpg';
import galleryPic4 from '../../images/gallery/pic4.jpg';
import galleryPic5 from '../../images/gallery/pic5.jpg';
import galleryPic7 from '../../images/gallery/pic7.jpg';
import galleryPic8 from '../../images/gallery/pic8.jpg';
import galleryPic9 from '../../images/gallery/pic9.jpg';
import blogPic1 from '../../images/bilder/grillochfotboll.jpeg';
import blogPic2 from '../../images/bilder/poesi.jpeg';
import blogPic3 from '../../images/bilder/skoljoggen.jpeg';

const content = [
	{
		thumb: galleryPic2,
	},
	{
		thumb: galleryPic1,
	},
	{
		thumb: galleryPic5,
	},
	{
		thumb: galleryPic7,
	},
	{
		thumb: galleryPic8,
	},
	{
		thumb: galleryPic9,
	},
	{
		thumb: galleryPic3,
	},
	{
		thumb: galleryPic4,
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

function GalleryImg(){
	return(
		<>
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<ul className="magnific-image">
						{content.map((item) => (
							<li><img src={item.thumb} alt=""/></li>
						))}
					</ul>
				</SRLWrapper>
			</SimpleReactLightbox>	
		</>
	);
}

class BlogAside extends Component{
	render(){
		return(
			<>
				<aside className="side-bar sticky-top">
					<div className="widget recent-posts-entry">
						<h6 className="widget-title">Nya inlägg</h6>
						<div className="widget-post-bx">
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={blogPic1} width="200" height="143" alt=""/> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="/blog-details">Niornas grill och fotbollseftermiddag</Link></h6>
									</div>
									<ul className="media-post">
										<li><Link to="/blog-details"><i className="fa fa-calendar"></i>23 Sep 2021</Link></li>
									</ul>
								</div>
							</div>
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={blogPic2} width="200" height="160" alt=""/> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="/blog-details">Poesitävling för högstadiet</Link></h6>
									</div>
									<ul className="media-post">
										<li><Link to="/blog-details"><i className="fa fa-calendar"></i>14 Aug 2021</Link></li>
									</ul>
								</div>
							</div>
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={blogPic3} width="200" height="160" alt=""/> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="/blog-details">Skoljoggen 2021</Link></h6>
									</div>
									<ul className="media-post">
										<li><Link to="/blog-details"><i className="fa fa-calendar"></i>2 Juni 2021</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</aside>
				
			</>
		);
	}
}

export default BlogAside;