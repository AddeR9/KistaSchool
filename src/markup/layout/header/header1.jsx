import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../../images/logo/kistalogo.png';
import adv from '../../../images/adv/adv.jpg';

class Header extends Component{
	
	componentDidMount() {
		
		// Search Form Popup
		var searchBtn = document.getElementById("quik-search-btn")
        var searchForm = document.querySelector(".nav-search-bar")
        var closeBtn = document.getElementById("search-remove")
		
        searchBtn.addEventListener('click',function(){
            searchForm.classList.add("show")
        })

        closeBtn.addEventListener('click',function(){
            searchForm.classList.remove("show")
        })

        // Mobile Menu sidebar function
        var btn = document.querySelector('.menuicon');
        var nav = document.querySelector('.menu-links');
       
        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);

        // Mobile Submenu open close function
        var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
        for (var y = 0; y < navMenu.length; y++) {
            navMenu[y].addEventListener('click', function () { menuClick(this) });
        }

        function menuClick(current) {
            const active = current.classList.contains("open")
            navMenu.forEach(el => el.classList.remove('open'));
            
            if(active){
                current.classList.remove('open') 
                console.log("active")
            } else{
                current.classList.add('open');
                console.log("close")
            }
        }
		
    }
	
	render(){
		return(
			<>
				<header className="header rs-nav header-transp arent">
					<div>
						<div className="container">
							
						</div>
					</div>
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo">
									<Link to="/"><img src={logo} alt=""/></Link>
								</div>
								{/* <!-- Mobile Nav Button ==== --> */}
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/* <!-- Author Nav ==== --> */}
								<div className="secondary-menu">
									<div className="secondary-inner">
										<ul>
											<li><Link to="#" className="btn-link"><i className="fa fa-facebook"></i></Link></li>
											<li><Link to="#" className="btn-link"><i className="fa fa-instagram"></i></Link></li>
											{/* <!-- Search Button ==== --> */}
											<li className="search-btn"><button id="quik-search-btn" type="button" className="btn-link"><i className="fa fa-search"></i></button></li>
										</ul>
									</div>
								</div>
								{/* <!-- Navigation Menu ==== --> */}
								<div className="menu-links navbar-collapse collapse justify-content-start" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logo} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li className="active"><Link to="#">Om oss <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to="/">Kista International School - Ett tryggt val!</Link></li>
												{/* <li><Link to="/kortfakta">Kort fakta</Link></li> */}
												<li><Link to="/">Lika behandlingsplan</Link></li>
				


											</ul>
										</li>
										<li><Link to="#">Elev & Föräldrar  <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
											<li><Link to="/">Ansök till vår skola</Link></li>
											<li><Link to="/">Klagomål</Link></li>
											<li><Link to="/">Lika behandlingsplan - Elevversion</Link></li>
											</ul>
										</li>
										
										{/* <li><Link to="/nyheter">Nyheter <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to="/datum">Viktiga datum</Link></li>
											</ul>
										</li> 
										
											<li><Link to="/ledningen">Ledningen</Link>
										</li>
										*/}
									
										<li className="add-mega-menu"><Link to="/kontaktaoss">Kontakta oss</Link>
											
										</li>										
										
									</ul>
									<div className="nav-social-link">
										<Link to="https://www.facebook.com/KistaSchool"><i className="fa fa-facebook"></i></Link>
										<Link to="#"><i className="fa fa-instagram"></i></Link>
									</div>
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</Sticky>
					{/* <!-- Search Box ==== --> */}
					<div className="nav-search-bar">
						<form action="#">
							<input name="search" type="text" className="form-control" placeholder="Sök"/>
							<span><i className="ti-search"></i></span>
						</form>
						<span id="search-remove"><i className="ti-close"></i></span>
					</div>
				</header>
			</>
		);
	}
}

export default Header;
