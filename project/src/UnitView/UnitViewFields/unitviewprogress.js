import React, { Component } from 'react'
import ProgressBar from './progressbar.js'

class UnitViewProgress extends Component {
		state = {
            id: '',
            type: 'progress',
            label: '',            
            data: ''
        }
        componentDidMount() {
        this.setState({id: this.props.id})
        this.setState({data: this.props.data})
        this.setState({label: this.props.label})
    	}	
		render() {
			return(
				<div className="UnitView_Progress" >
					<div className="card" onClick={this.drawProgress} key={this.state.id}>            			
                		<h1 className="percentRegularCard">{this.props.data}%</h1>
            			<h2 className="cardh1normalprog">Progress{this.state.label}</h2>
            			<ProgressBar progress={this.props.data}/>
            		</div>
        		</div>
        		)
		}
}

export default UnitViewProgress;