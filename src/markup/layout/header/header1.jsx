import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../../images/logo/kistalogo.png';
import adv from '../../../images/adv/adv.jpg';

class Header extends Component{
	
	componentDidMount() {
		
		// Search Form Popup

		
       

       
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
									<Link to={{ pathname: "https://infomentor.ledaco.net/kis/form.php" }} target="_blank" className="btn">Ansök</Link>											
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
												<li><Link to="/skolans-historia">Skolans historia</Link></li>
												{/* <li><Link to="/kortfakta">Kort fakta</Link></li> */}
												<li><Link to="/skolans-verksamheter">Skolans verksamheter</Link></li>
											</ul>
										</li>
										<li><Link to="#">Kontakta oss<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
											<li><Link to="/kontaktaoss">Kontakta skolan</Link></li>
											<li><Link to="/ledningen">Kontakta personal</Link></li>
											<li><Link to={{ pathname: "https://journal.prorenata.se/contactform/kista-interna/kis-klagomal-och-synpunkter/" }} target="_blank">Klagomål och synpunkter</Link></li>	
											<li><Link to={{ pathname: "https://infomentor.ledaco.net/kis/form.php" }} target="_blank">Ansök till vår skola</Link></li>				
											</ul>
										</li>

										<li><Link to="#">Information<i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
										<li><Link to={{ pathname: "https://www.infomentor.se" }} target="_blank">Infomentor</Link></li>
										<li><Link to={{ pathname: "https://utbildningsguiden.skolverket.se/skolenhet?schoolUnitID=37556682" }} target="_blank">Skolverkets jämförelsesida</Link></li>
										<li><Link to={{ pathname: "https://www.skolverket.se/" }} target="_blank">Skolverkets hemsida</Link></li>
										<li><Link to="/datum">Läsårstider</Link></li>
											</ul>
										</li> 
									</ul>
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
