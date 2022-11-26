import React, {Component} from 'react';

// Layout
import Header from "../layout/header/header1";
import Footer from "../layout/footer/footer1";

// Elements

import ContactInfoCard from '../elements/contact-info-card';
import TotalPeople from '../pages/total-people'
import Start from '../../Start';


class Index2 extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
				
					<div className="content-block" id="content-area">
					<Start />
					<TotalPeople />
					<ContactInfoCard />
					</div>
					
				</div>				
			</>
		);
	}
}

export default Index2;