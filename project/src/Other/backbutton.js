import React, { Component } from 'react';

class BackButton extends Component{
	static contextTypes = {
    router: () => true
  	}
  	render(){
  		return(
			<div className="backButton">
	            <div className="backIcon">
	                <div className="backButtonIcon" onClick={this.context.router.history.goBack}>
	                	<div className="back"></div>
	                </div>	
	            </div>
	        </div>
		)
  	}
	
}
export default BackButton;