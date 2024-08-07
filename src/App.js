import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


// Plugins Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Modal Video
import 'react-modal-video/css/modal-video.min.css';

// StyleSheet
import './css/typography.css';
import './css/shortcodes/shortcodes.css';
import './css/style.css';
import './css/color/color-1.css';

// Fonts
import './vendors/fontawesome/css/font-awesome.min.css';
import './vendors/flaticon/flaticon.css';
import './vendors/line-awesome/css/line-awesome.min.css';
import './vendors/themify/themify-icons.css';

// Elements
import BackToTop from './markup/elements/back-top';
import PageScrollTop from './markup/elements/page-scroll-top';

// Home Pages
import Index2 from './markup/pages/index-2';
import Portfolio from './markup/pages/portfolio';

// About Us
import Contact1 from './markup/pages/contact-1';


// Events

//Nyheter
import BlogDetails from './markup/pages/blog-details';
  

// Faq
import Faq1 from './markup/pages/faq-1';
import kortfakta from './markup/pages/kortfakta';

// test

import TestPage from './markup/pages/testpage';

// Ledningen
import Ledningen from './markup/pages/ledningen'
import skolanshistoria from './markup/pages/skolans-historia';
import Öppethus from './markup/pages/skolstarten';
import Laxhjalp from './markup/pages/laxhjalp';
import skolansverksamheter from './markup/pages/skolans-verksameter';
import Skolanskaraktar from './markup/pages/Skolans-Karaktar';
import EventsContent2 from './markup/elements/events-content2';
import EventsContent3 from './markup/elements/events-content3';



function App() {
  return (
    <>
    <BrowserRouter basename={'/'}>
					<Switch>
					
						{/* Home Pages */}
						<Route path='/' exact component={Index2} />						
						
						{/* About Us */}
						<Route path='/lokaler' exact component={Portfolio} />				
						<Route path='/kontaktaoss' exact component={Contact1} />
						<Route path='/kortfakta' exact component={kortfakta} />
						<Route path='/skolans-historia' exact component={skolanshistoria} />
						<Route path='/skolans-verksamheter' exact component={skolansverksamheter} />
						<Route path='/skolans-karaktar' exact component={Skolanskaraktar} />
						<Route path='/skolstarten' exact component={Öppethus} />
						<Route path='/laxhjalp' exact component={Laxhjalp} />
						
		
						
						{/* Events */}									
						<Route path='/lasar2425' exact component={EventsContent3} />
						<Route path='/lasar2526' exact component={EventsContent2} />
						{/* Events */}
						<Route path='/nyheter' exact component={BlogDetails} />						

						
						{/* Faq */}
						<Route path='/faq' exact component={Faq1} />

					
						
						{/* Ledningen */}
						<Route path='/ledningen' exact component={Ledningen} />
						
						{/* Courses */}
						
						
						{/* Blog Pages */}

						{/* test */}
						<Route path='/api/News' exact component={TestPage} />
						
					</Switch>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
        </>
  );
}

export default App;
