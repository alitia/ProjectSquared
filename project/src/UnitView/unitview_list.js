import React, { Component } from 'react';
import EmailField from './UnitViewFields/emailfield.js'
import CheckBoxGroupField from './UnitViewFields/checkboxgroupfield.js'
import LabelField from './UnitViewFields/labelfield.js'
import ShortField from './UnitViewFields/shortfield.js'
import LongField from './UnitViewFields/longfield.js'
import PhoneField from './UnitViewFields/phonefield.js'
import UnitViewTitle from './UnitViewFields/unitviewtitle.js'
import UnitViewProgress from './UnitViewFields/unitviewprogress.js';


class UnitViewList extends Component {

        state = {                
                unit_fields: [],
                unit_title: "",
                project_id: '',
                unit_id: '',
                progress: ''
        }
        componentDidMount(){
                
                var x = this.props.project_id
                var y = this.props.unit_id
                this.setState({project_id: x})
                this.setState({unit_id: y})

                if(this.state.unit_fields.length === 0){
                    this.setState({unit_fields: this.props.unit_fields})
                }
        }
        assign(field){

            var type = field.type
            var p_id = this.state.project_id
            var u_id = this.state.unit_id
            
                        if(type === 'title'){
                            return <UnitViewTitle title_field={field} key={field.id} project_id={p_id} unit_id={u_id}/>
                        }
                        else if(type === 'label'){
                            return <LabelField labels_field={field} key={field.id} project_id={p_id} unit_id={u_id}/>
                        }
                        else if(type === 'email'){
                            return <EmailField email_field={field} key={field.id} project_id={p_id} unit_id={u_id}/>
                        }
                        else if(type === 'phone'){
                            return <PhoneField phone_field={field} key={field.id} project_id={p_id} unit_id={u_id}/>
                        }
                        else if(type === 'short'){
                            return <ShortField short_field={field} key={field.id} project_id={p_id} unit_id={u_id}/>
                        }
                        else if(type === 'long'){
                            return <LongField long_field={field} key={field.id} project_id={p_id} unit_id={u_id}/>
                        }
                        else if(type === 'checkboxes'){
                            return <CheckBoxGroupField checkboxgroup_field={field} key={field.id} project_id={p_id} unit_id={u_id}/>
                        }
                        else{
                            console.log('error')
                        }
        }
	    render(){
        return(
                <div>
                    {this.props.unit_fields.map(this.assign.bind(this))}                
                <UnitViewProgress data={this.props.unit_progress}/>
                </div>
        )}
}
export default UnitViewList