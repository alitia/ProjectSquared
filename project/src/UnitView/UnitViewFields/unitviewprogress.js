import React, { Component } from 'react'

class UnitViewProgress extends Component {
	state ={
			progress: [
				{label: 'Progress',
				percentage: '65',
				position: 9,
				id: 345}
			]}

		drawProgress = (e) => {			

			if(e.target.className==="cardh1normalprog"){
				const value = e.target.parentElement.children[0].innerText
				e.target.parentElement.children[2].style.width = value

			}
			else if(e.target.className==="percentRegularCard"){
				const value = e.target.innerText
				e.target.parentElement.children[2].style.width = value

			}
			else if(e.target.className==="ProgBar"){
				const value = e.target.parentElement.children[0].innerText
				e.target.style.width = value
			}		
		}
		render() {
			return(
				<div className="UnitView_Progress" >
				{this.state.progress.map(prog =>
            		<div className="card" onClick={this.drawProgress} key={prog.id}>            			
                		<h1 className="percentRegularCard" >{prog.percentage}%</h1>
            			<h1 className="cardh1normalprog">{prog.label}</h1>
            			<div className="ProgBar" 
            			></div>
            		</div>)}
        		</div>
        		)
		}
}

export default UnitViewProgress;