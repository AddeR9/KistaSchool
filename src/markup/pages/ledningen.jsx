import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Tab} from 'react-bootstrap'

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements
import Courses from "../elements/profile-content/courses";
import QuizResults from "../elements/profile-content/quiz-results";
import EditProfile from "../elements/profile-content/edit-profile";
import ChangePassword from "../elements/profile-content/change-password";

// Images
import profilePic1 from '../../images/bilder/avatar.png';

class Ledningen extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content">				
					<div className="content-block">
						
						<div className="section-area section-sp1">
							<div className="container">
								<Tab.Container defaultActiveKey="tabOne">
									<Tab.Content>
										<div className="row">
											<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
														<h4>Namn</h4>
														<span>Rektor</span>
													</div>
													<div className="profile-social">
														<ul className="list-inline m-a0">
															<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
														</ul>
													</div>
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Namn</h4>
														<span>Biträdande rektor</span>
													</div>
													<div className="profile-social">
														<ul className="list-inline m-a0">
															<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
														</ul>
													</div>													
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Namn</h4>
														<span>Rektor</span>
													</div>
													<div className="profile-social">
														<ul className="list-inline m-a0">
															<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
														</ul>
													</div>													
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Namn</h4>
														<span>Rektor</span>
													</div>
													<div className="profile-social">
														<ul className="list-inline m-a0">
															<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
														</ul>
													</div>													
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Namn</h4>
														<span>Rektor</span>
													</div>
													<div className="profile-social">
														<ul className="list-inline m-a0">
															<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
														</ul>
													</div>													
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Namn</h4>
														<span>Rektor</span>
													</div>
													<div className="profile-social">
														<ul className="list-inline m-a0">
															<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
														</ul>
													</div>													
												</div>
											</div>
										</div>
									</Tab.Content>
								</Tab.Container>
							</div>
						</div>
						
					</div>
					
				</div>
				
				<Footer/>
				
			</>
		);
	}
}

export default Ledningen;