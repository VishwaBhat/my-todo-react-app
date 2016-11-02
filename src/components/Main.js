import React,{Component} from 'react';
//import Header from './Header';
import {Link} from 'react-router';

export default 
	class Main extends Component{

		constructor(){
			super();
			this.state = { message : "This is Home Page" };
		}

		navigate(evnt){
			let element = document.getElementById('home-btn');
			console.log(element.className)
			if(element.className && !element.className.includes('btn-primary')){
				element.className += ' btn-primary ';
			} 
			
			//
			this.props.router.replace("/");
		}

		render (){
			return ( 
				<div>
					{this.props.children}
					<Link to="archives" className="btn btn-default" activeClassName="btn-primary">Archives</Link>
					<Link to="settings" className="btn btn-default" activeClassName="btn-primary">Settings</Link>
					<button className="btn btn-default" id="home-btn" onClick={this.navigate.bind(this)} >Home</button>
				</div>
				) ;
		}

	}