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
											<li><a href="https://www.facebook.com/KistaSchool" target="_blank" className="btn-link"><i className="fa fa-facebook"></i></a></li>
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
												<li><Link to="/">Ledning</Link></li>
												{/* <li><Link to="/kortfakta">Kort fakta</Link></li> */}
												<li><Link to="/">Personal</Link></li>
												<li><Link to="/">Elever</Link></li>
												<li><Link to="/">Klasser</Link></li>
												<li><Link to="/kontaktaoss">Kontakta oss</Link></li>
											</ul>
										</li>
										<li><Link to="#">Elev & F??r??ldrar  <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
											<li><Link to={{ pathname: "https://infomentor.ledaco.net/kis/form.php" }} target="_blank">Ans??k till v??r skola</Link></li>
											<li><Link to={{ pathname: "https://journal.prorenata.se/contactform/kista-interna/kis-klagomal-och-synpunkter/" }} target="_blank">Klagom??l</Link></li>					
											</ul>
										</li>

										<li><Link to="/">??vriga tj??nster <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to="/">Blanketter</Link></li>
											</ul>
										</li> 
										
										<li><Link to="/">Nyheter <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to="/">Viktiga datum</Link></li>
											</ul>
										</li> 				
										
									</ul>
									<Link to={{ pathname: "https://infomentor.ledaco.net/kis/form.php" }} target="_blank" className="btn">Ans??k</Link>										

									
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</Sticky>
					{/* <!-- Search Box ==== --> */}
					<div className="nav-search-bar">
						<form action="#">
							<input name="search" type="text" className="form-control" placeholder="S??k"/>
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
