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
									<h2 className='headertekst'>Ledning</h2>
										<div className="row">
											<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
														<h4>Kenny Fredholm</h4>
														<span>Rektor</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">kenny.fredholm@kistaschool.se</a>
													<li><i className="ti-mobile"></i>+46722320004</li>
													</div>
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Nasser Husein </h4>
														<span>Biträdande rektor</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">nasser.husein@kistaschool.se</a>
													<li><i className="ti-mobile"></i>+46704252190</li>
													</div>										
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Helen Törnqvist</h4>
														<span>Lärare i sv/sva, studierektor</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">helen.tornqvist@kistaschool.se</a>
													<li><i className="ti-mobile"></i>+46769498193</li>
													</div>										
												</div>
											</div>
										</div>
										<h2 className='mt-5 headertekst'>Administrativ personal</h2>
										<div className="row">
											<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
														<h4>Abdi Ali Warsame</h4>
														<span>Ekonomiansvarig</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">abdi.ali@kistaschool.se</a>
													<li><i className="ti-mobile"></i>+46736757029</li>
													</div>
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Dahir Jeite </h4>
														<span>Intedent</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">dahir.jeite@kistaschool.se</a>
													<li><i className="ti-mobile"></i>+46762423100</li>
													</div>										
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Mahamed Abdulle</h4>
														<span>Fritidsansvarig</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">mohamed.abdulle@kistaschool.se</a>
													<li><i className="ti-mobile">+46762155875</i></li>
													</div>										
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Sharif Abdi</h4>
														<span>Ansvarig för ansökan till förskoleklass</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">sharif.abdi@kistaschool.se</a>
													<li><i className="ti-mobile"></i>+46739845738</li>
													</div>										
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
														<h4>Zeinab Abukar</h4>
														<span>Studievägledare</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">zeinab.abukar@kistaschool.se</a>
													<li><i className="ti-mobile"></i>+46720850963</li>
													</div>
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Saron Zeru</h4>
														<span>Skoladministratör</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">saron.zeru@kistaschool.se</a>
													<li><i className="ti-mobile"></i>+46707291433</li>
													</div>										
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
														<h4>Yerosalim Asgodom</h4>
														<span>Kurator</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">yerosalim.asgodom@kistaschool.se</a>
													<li><i className="ti-mobile">+46704256884</i></li>
													</div>
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Olivia Kaminska</h4>
														<span>Skolsköterska 4-9</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">olivia.kaminska@kistaschool.se</a>
													<li><i className="ti-mobile">+46768511118</i></li>
													</div>										
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Fariba Reihanchi</h4>
														<span>Skolsköterska F-3</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">fariba.reihanchi@kistaschool.se</a>
													<li><i className="ti-mobile">+46736266578</i></li>
													</div>										
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
														<h4>Ahmed Omer Abdi</h4>
														<span>IT - Samordnare</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">ahmed.omer@kistaschool.se</a>
													<li><i className="ti-mobile">+46790661792</i></li>
													</div>
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Hiwa Zangana</h4>
														<span>Vaktmästare</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">hiwa.zangana@kistaschool.se</a>
													<li><i className="ti-mobile">+46737644757</i></li>
													</div>										
												</div>
											</div>
                      <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Andres Lagunas</h4>
														<span>Skolvärd</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">andres.lagunas@kistaschool.se</a>
													<li><i className="ti-mobile">+46765335011</i></li>
													</div>										
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
												<div className="profile-bx text-center">
													<div className="user-profile-thumb">
														<img src={profilePic1} alt=""/>
													</div>
													<div className="profile-info">
                          <h4>Abdulkadir Adan</h4>
														<span>Skolvärd</span>
													</div>
													<div className="profile-social">
													<i className="fa fa-envelope"></i> <a to="#">kadir.adan@kistaschool.se</a>
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