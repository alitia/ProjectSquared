import React, { Component } from 'react'

class UnitViewTitle extends Component {
	state = {
            title_field: [
                {id: 384, position: 1, label: 'Project X Title', fieldname: 'UnitName', fieldtype: 'text_title'}
            ]
        }
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()
        }
        else if(str.length > 36){
                event.preventDefault()
        }

    }
    update = (e) => {

        const title_field = this.state.title_field
        const str = e.target.innerHTML

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            title_field.fieldname = str
        }
        
        this.setState({title_field})

    }
    render() {
    	return(
			<div className="UnitView_Title">
				{this.state.title_field.map(title =>
					<div className="titleField" key={title.id}>
                		<div className="card">
                    		<div className="cardLeftImgWhite">
                    		</div>
                    			<h1 className="cardh1bold">{title.fieldname}</h1>
                    	</div>
                    </div>)}
            </div>
		);
    }	
}

export default UnitViewTitle;
