import React,{Component,useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import fasad1 from '../../images/bilder/fasad/fasad1.jpeg';
import fasad2 from '../../images/bilder/fasad/fasad2.jpeg';
import fasad3 from '../../images/bilder/fasad/fasad3.jpeg';
import fasad4 from '../../images/bilder/fasad/fasad4.jpeg';
import fasad5 from '../../images/bilder/fasad/fasad5.jpeg';
import fasad6 from '../../images/bilder/fasad/fasad6.jpeg';
import fasad7 from '../../images/bilder/fasad/fasad7.jpeg';
import fasad8 from '../../images/bilder/fasad/fasad8.jpeg';
import fasad9 from '../../images/bilder/fasad/fasad9.jpeg';
import fasad10 from '../../images/bilder/fasad/fasad10.jpeg';
import fasad11 from '../../images/bilder/fasad/fasad11.jpeg';
import fasad12 from '../../images/bilder/fasad/fasad12.jpeg';
import fasad13 from '../../images/bilder/fasad/fasad13.jpeg';
import fasad14 from '../../images/bilder/fasad/fasad14.jpeg';

import personal1 from '../../images/bilder/personal/personal1.jpeg';
import personal2 from '../../images/bilder/personal/personal2.jpeg';
import personal3 from '../../images/bilder/personal/personal3.jpeg';
import personal4 from '../../images/bilder/personal/personal4.jpeg';
import personal5 from '../../images/bilder/personal/personal5.jpeg';
import personal6 from '../../images/bilder/personal/personal6.jpeg';
import personal7 from '../../images/bilder/personal/personal7.jpeg';
import personal8 from '../../images/bilder/personal/personal8.jpeg';
import personal9 from '../../images/bilder/personal/personal9.jpeg';


import aula1 from '../../images/bilder/Aulan/Aula1.jpeg';
import aula2 from '../../images/bilder/Aulan/Aula2.jpeg';
import aula3 from '../../images/bilder/Aulan/Aula3.jpeg';
import aula4 from '../../images/bilder/Aulan/Aula4.jpeg';
import aula5 from '../../images/bilder/Aulan/Aula5.jpeg';

import datorsal1 from '../../images/bilder/Datorsal/Datorsal1.jpeg';
import datorsal2 from '../../images/bilder/Datorsal/Datorsal2.jpeg';
import datorsal3 from '../../images/bilder/Datorsal/Datorsal3.jpeg';
import datorsal4 from '../../images/bilder/Datorsal/Datorsal4.jpeg';
import datorsal5 from '../../images/bilder/Datorsal/Datorsal5.jpeg';
import datorsal6 from '../../images/bilder/Datorsal/Datorsal6.jpeg';
import datorsal7 from '../../images/bilder/Datorsal/Datorsal7.jpeg';
import datorsal8 from '../../images/bilder/Datorsal/Datorsal8.jpeg';
import datorsal9 from '../../images/bilder/Datorsal/Datorsal9.jpeg';

import hemkunskap1 from '../../images/bilder/Hemkunskap/Hemkunskap1.jpeg';
import hemkunskap2 from '../../images/bilder/Hemkunskap/Hemkunskap2.jpeg';
import hemkunskap3 from '../../images/bilder/Hemkunskap/Hemkunskap3.jpeg';
import hemkunskap4 from '../../images/bilder/Hemkunskap/Hemkunskap4.jpeg';
import hemkunskap5 from '../../images/bilder/Hemkunskap/Hemkunskap5.jpeg';
import hemkunskap6 from '../../images/bilder/Hemkunskap/Hemkunskap6.jpeg';
import hemkunskap7 from '../../images/bilder/Hemkunskap/Hemkunskap7.jpeg';
import hemkunskap8 from '../../images/bilder/Hemkunskap/Hemkunskap8.jpeg';
import hemkunskap9 from '../../images/bilder/Hemkunskap/Hemkunskap9.jpeg';
import hemkunskap10 from '../../images/bilder/Hemkunskap/Hemkunskap10.jpeg';


import traslojd1 from '../../images/bilder/Träslöjd/Träslöjd1.jpeg';
import traslojd2 from '../../images/bilder/Träslöjd/Träslöjd2.jpeg';
import traslojd3 from '../../images/bilder/Träslöjd/Träslöjd3.jpeg';
import traslojd4 from '../../images/bilder/Träslöjd/Träslöjd4.jpeg';
import traslojd5 from '../../images/bilder/Träslöjd/Träslöjd5.jpeg';
import traslojd6 from '../../images/bilder/Träslöjd/Träslöjd6.jpeg';
import traslojd7 from '../../images/bilder/Träslöjd/Träslöjd7.jpeg';

import textilslojd1 from '../../images/bilder/Textilslöjd/Textilslöjd1.jpeg';
import textilslojd2 from '../../images/bilder/Textilslöjd/Textilslöjd2.jpeg';
import textilslojd3 from '../../images/bilder/Textilslöjd/Textilslöjd3.jpeg';
import textilslojd4 from '../../images/bilder/Textilslöjd/Textilslöjd4.jpeg';
import textilslojd5 from '../../images/bilder/Textilslöjd/Textilslöjd5.jpeg';

import matsal1 from '../../images/bilder/Matsal/Matsal1.jpeg';
import matsal2 from '../../images/bilder/Matsal/Matsal2.jpeg';
import matsal3 from '../../images/bilder/Matsal/Matsal3.jpeg';
import matsal4 from '../../images/bilder/Matsal/Matsal4.jpeg';
import matsal5 from '../../images/bilder/Matsal/Matsal5.jpeg';
import matsal6 from '../../images/bilder/Matsal/Matsal6.jpeg';
import matsal7 from '../../images/bilder/Matsal/Matsal7.jpeg';









// Portfolio Content
const content = [
	{ 
		thumb: fasad1,
		LightImg: fasad1,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad2, 
		LightImg: fasad2,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad3, 
		LightImg: fasad3,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad4, 
		LightImg: fasad4,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad5, 
		LightImg: fasad5,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad6, 
		LightImg: fasad6,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad7, 
		LightImg: fasad7,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad8, 
		LightImg: fasad8,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad9, 
		LightImg: fasad9,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad10, 
		LightImg: fasad10,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad11, 
		LightImg: fasad11,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad12, 
		LightImg: fasad12,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad13, 
		LightImg: fasad13,
		tag: ['Fasad',],
	},
	{ 
		thumb: fasad14, 
		LightImg: fasad14,
		tag: ['Fasad',],
	},
	{ 
		thumb: personal1,
		LightImg: personal1,
		tag: ['Personalrum',],
	},
	{ 
		thumb: personal2, 
		LightImg: personal2,
		tag: ['Personalrum',],
	},
	{ 
		thumb: personal3, 
		LightImg: personal3,
		tag: ['Personalrum',],
	},
	{ 
		thumb: personal4, 
		LightImg: personal4,
		tag: ['Personalrum',],
	},
	{ 
		thumb: personal5, 
		LightImg: personal5,
		tag: ['Personalrum',],
	},
	{ 
		thumb: personal6, 
		LightImg: personal6,
		tag: ['Personalrum',],
	},
	{ 
		thumb: personal7, 
		LightImg: personal7,
		tag: ['Personalrum',],
	},
	{ 
		thumb: personal8, 
		LightImg: personal8,
		tag: ['Personalrum',],
	},
	{ 
		thumb: personal9, 
		LightImg: personal9,
		tag: ['Personalrum',],
	},
	{ 
		thumb: aula1, 
		LightImg: aula1,
		tag: ['Aula',],
	},
	{ 
		thumb: aula2, 
		LightImg: aula1,
		tag: ['Aula',],
	},
	{ 
		thumb: aula3, 
		LightImg: aula3,
		tag: ['Aula',],
	},
	{ 
		thumb: aula4, 
		LightImg: fasad14,
		tag: ['Aula',],
	},
	{ 
		thumb: aula5, 
		LightImg: aula5,
		tag: ['Aula',],
	},
	{ 
		thumb: datorsal1,
		LightImg: datorsal1,
		tag: ['Datorsal',],
	},
	{ 
		thumb: datorsal2, 
		LightImg: datorsal2,
		tag: ['Datorsal',],
	},
	{ 
		thumb: datorsal3, 
		LightImg: personal3,
		tag: ['Datorsal',],
	},
	{ 
		thumb: datorsal4, 
		LightImg: datorsal4,
		tag: ['Datorsal',],
	},
	{ 
		thumb: datorsal5, 
		LightImg: datorsal5,
		tag: ['Datorsal',],
	},
	{ 
		thumb: datorsal6, 
		LightImg: datorsal6,
		tag: ['Datorsal',],
	},
	{ 
		thumb: datorsal7, 
		LightImg: datorsal7,
		tag: ['Datorsal',],
	},
	{ 
		thumb: datorsal8, 
		LightImg: datorsal8,
		tag: ['Datorsal',],
	},
	{ 
		thumb: datorsal9, 
		LightImg: datorsal9,
		tag: ['Datorsal',],
	},
	{ 
		thumb: hemkunskap1,
		LightImg: hemkunskap1,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: hemkunskap2, 
		LightImg: hemkunskap2,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: hemkunskap3, 
		LightImg: hemkunskap3,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: hemkunskap4, 
		LightImg: hemkunskap4,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: hemkunskap5, 
		LightImg: hemkunskap5,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: hemkunskap6, 
		LightImg: hemkunskap6,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: hemkunskap7, 
		LightImg: hemkunskap7,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: hemkunskap8, 
		LightImg: hemkunskap8,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: hemkunskap9, 
		LightImg: hemkunskap9,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: hemkunskap10, 
		LightImg: hemkunskap10,
		tag: ['Hemkunskap',],
	},
	{ 
		thumb: traslojd1,
		LightImg: traslojd1,
		tag: ['Träslöjd',],
	},
	{ 
		thumb: traslojd2, 
		LightImg: traslojd2,
		tag: ['Träslöjd',],
	},
	{ 
		thumb: traslojd3, 
		LightImg: traslojd3,
		tag: ['Träslöjd',],
	},
	{ 
		thumb: traslojd4, 
		LightImg: traslojd4,
		tag: ['Träslöjd',],
	},
	{ 
		thumb: traslojd5, 
		LightImg: traslojd5,
		tag: ['Träslöjd',],
	},
	{ 
		thumb: traslojd6, 
		LightImg: traslojd6,
		tag: ['Träslöjd',],
	},
	{ 
		thumb: traslojd7, 
		LightImg: traslojd7,
		tag: ['Träslöjd',],
	},
	{ 
		thumb: textilslojd1,
		LightImg: textilslojd1,
		tag: ['Textilslöjd',],
	},
	{ 
		thumb: textilslojd2, 
		LightImg: textilslojd2,
		tag: ['Textilslöjd',],
	},
	{ 
		thumb: textilslojd3, 
		LightImg: textilslojd3,
		tag: ['Textilslöjd',],
	},
	{ 
		thumb: textilslojd4, 
		LightImg: textilslojd4,
		tag: ['Textilslöjd',],
	},
	{ 
		thumb: textilslojd5, 
		LightImg: textilslojd5,
		tag: ['Textilslöjd',],
	},
	{ 
		thumb: matsal1,
		LightImg: matsal1,
		tag: ['Matsal',],
	},
	{ 
		thumb: matsal2, 
		LightImg: matsal2,
		tag: ['Matsal',],
	},
	{ 
		thumb: matsal3, 
		LightImg: matsal3,
		tag: ['Matsal',],
	},
	{ 
		thumb: matsal4, 
		LightImg: matsal4,
		tag: ['Matsalen',],
	},
	{ 
		thumb: matsal5, 
		LightImg: matsal5,
		tag: ['Matsal',],
	},
	{ 
		thumb: matsal6, 
		LightImg: matsal6,
		tag: ['Matsal',],
	},
	{ 
		thumb: matsal7, 
		LightImg: matsal7,
		tag: ['Matsal',],
	},
]

// Magnific Anchor
const MagnificAnchor = props => {
	const { openLightbox } = useLightbox()

	return (
		<Link to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="magnific-anchor" >
			<i className="ti-search"></i>
		</Link>
	)
}

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#f7b205",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#f7b205",
		iconColor: "rgba(255, 255, 255, 1)",
		showAutoplayButton: false,
		showDownloadButton: false,
	},
	caption: {
		captionColor: "#a6cfa5",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};

const FilterList = ({dataFilter, defaultTag, activeFilter}) => {                                                               
	return (	
		<li className={`${activeFilter ? 'btn active' : 'btn'}` } onClick={() => defaultTag(dataFilter)} >
			<Link to={"#"}>{dataFilter}</Link>
		</li> 
	);
};

function MasonryContent(){
	const [tag, setTag] = useState('All');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All' ? setFilterdImages(content) : setFilterdImages(content.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
			
			<>
			
			<div className="feature-filters clearfix center m-b40">
				<ul className="filters" data-toggle="buttons">
					<FilterList 
						dataFilter="Alla" 
						defaultTag={setTag} 
						activeFilter={ tag === 'All' ? true : false }	
					/>
					<FilterList 
						dataFilter="Fasad" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Fasad' ? true : false }
					/>
					<FilterList 
						dataFilter="Personalrum" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Personalrum' ? true : false }
					/>
					<FilterList 
						dataFilter="Aula"
						defaultTag={setTag} 
						activeFilter={ tag === 'Aula' ? true : false }	
					/>
					<FilterList 
						dataFilter="Datorsal"
						defaultTag={setTag} 
						activeFilter={ tag === 'Datorsal' ? true : false }	
					/>
					<FilterList 
						dataFilter="Hemkunskap"
						defaultTag={setTag} 
						activeFilter={ tag === 'Hemkunskap' ? true : false }	
					/>
					<FilterList 
						dataFilter="Träslöjd"
						defaultTag={setTag} 
						activeFilter={ tag === 'Träslöjd' ? true : false }	
					/>
					<FilterList 
						dataFilter="Textilslöjd"
						defaultTag={setTag} 
						activeFilter={ tag === 'Textilslöjd' ? true : false }	
					/>
					<FilterList 
						dataFilter="Matsal"
						defaultTag={setTag} 
						activeFilter={ tag === 'Matsal' ? true : false }	
					/>
				</ul>
			</div>
			
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<Masonry className="ttr-gallery-listing">
						{filteredImages.map((item, index)=>(	
							<div className="action-card col-lg-3 col-md-4 col-sm-6" key={index}>
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<img src={item.thumb}  alt="" />
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<MagnificAnchor />
											</div>
											<div className="portfolio-info-bx">
												<h4>{item.title}</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}	
					</Masonry>
				</SRLWrapper>
			</SimpleReactLightbox>
		</>
		
	);
}

class PortfolioContent extends Component{
	render(){
		return(
			<>
				<MasonryContent />
			</>
		);
	}
}

export default PortfolioContent;