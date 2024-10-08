import React,{Component} from 'react';

// Elements
import Count from '../elements/counter/counter-sensor';

// Images
import bg1 from '../../images/bilder/fasad/kistachool2.jpg';

class TotalPeople extends Component{
	render(){
		return(
			<>
				<div className="section-area section-sp1 ovpr-dark bg-fix online-cours mt-5 mb-5" style={{backgroundImage:"url("+bg1+")"}}>
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center text-white">
							</div>
						</div>
						<div className="mw800 m-auto">
							<div className="row">
								<div className="col-md-4 col-sm-6 col-6">
									<div className="cours-search-bx m-b30">
										<div className="icon-box">
											<h3><i class="fa-sharp fa-solid fa-person-chalkboard"></i><Count counter={102}/></h3>
										</div>
										<span className="cours-search-text">Lärare och personal</span>
									</div>
								</div>
								<div className="col-md-4 col-sm-6 col-6">
									<div className="cours-search-bx m-b30">
										<div className="icon-box">
											<h3><i class="fa-solid fa-graduation-cap"></i><Count counter={700}/></h3>
										</div>
										<span className="cours-search-text">Elever</span>
									</div>
								</div>
								<div className="col-md-4 col-sm-6 col-6">
									<div className="cours-search-bx m-b30">
										<div className="icon-box">
											<h3><i class="fa-solid fa-graduation-cap"></i><Count counter={33}/></h3>
										</div>
										<span className="cours-search-text">Klasser F-9</span>
									</div>
								</div>
								<div className="col-md-4 col-sm-6 col-6">
									<div className="cours-search-bx m-b30">
										<div className="icon-box">
											<h3><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><Count counter={249}/></h3>
										</div>
										<span className="cours-search-text">Meritvärdet 2023/2024</span>
									</div>
								</div>
								<div className="col-md-4 col-sm-12 col-12">
									<div className="cours-search-bx m-b30">
										<div className="icon-box">
											<h3><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><Count counter={81}/></h3>
										</div>
										<span className="cours-search-text">Andel legitimerade lärare i procent</span>
									</div>
								</div>
                <div className="col-md-4 col-sm-12 col-12">
									<div className="cours-search-bx m-b30">
										<div className="icon-box">
										<h3><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><Count counter={91}/></h3>
										</div>
										<span className="cours-search-text">Gymnasiebehörighet i procent 2023/2024 </span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default TotalPeople;