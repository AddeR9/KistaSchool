import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Images
import aboutPic1 from './images/bilder/fasad/backgrund.jpg';
import huvudentre from './images/bilder/fasad/bakgrund_huvudentre1.jpeg';

class Start extends Component{
	
	constructor () {
		super()
		this.state = {
			isOpen: false,
			isFirstImage: true
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal () {
		this.setState({isOpen: true})
	}
	handleClick = () => {
		this.setState({ isFirstImage: !this.state.isFirstImage });
	  };
	
	  componentDidMount() {
		this.interval = setInterval(() => this.handleClick(), 2000);
	  }
	
	  componentWillUnmount() {
		clearInterval(this.interval);
	  }
	
	render(){
		const { isFirstImage } = this.state;
		return(
			<>
				<div className="section-area bg-primary section-sp1 our-story popp">
					<div className="container">
						<div className="row align-items-center d-flex">
							<div className="col-lg-5 col-md-12 text-white m-b30">
								<div className="heading-bx style1 mb-3">
									<h3 className="title-head">Kista International School</h3>
									<p className="text-white">Kista International School kan stoltsera sig med att tillhöra de skolor som uppnår goda kunskapsresultat varje år i Sverige med hänsyn taget till barnens socioekonomiska förutsättningar. Framgångsfaktorerna är flera; drivkraft och stabilitet i skolledningen, ett stort engagemang bland våra anställda, samt viljan att utveckla och förbättra de olika skolverksamheterna.</p>
								</div>
								<Link to={{ pathname: "https://infomentor.ledaco.net/kis/form.php" }} target="_blank" className="btn">Ansök</Link>
							</div>
							<div className="col-lg-7 col-md-12 p-lr">
								<div className="video-bx image-container">
								<img
          src={isFirstImage ? huvudentre: aboutPic1}
          alt={isFirstImage ? "Image 1" : "Image 2"}
		  style={{maxWidth:'960px',maxHeight:'960px'}}
		  width='960'
		  height='960'
        />								</div>
							</div>
						</div>
					</div>
				</div>

				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='F8vKDL4AjPE' onClose={() => this.setState({isOpen: false})} />
				
			</>
		);
	}
}

export default Start;