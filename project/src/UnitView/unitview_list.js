import React, { Component } from 'react';
import PropTypes from 'prop-types'
import EmailField from './UnitViewFields/emailfield.js'
import CheckBoxGroupField from './UnitViewFields/checkboxgroupfield.js'
import LabelField from './UnitViewFields/labelfield.js'
import ShortField from './UnitViewFields/shortfield.js'
import LongField from './UnitViewFields/longfield.js'
import PhoneField from './UnitViewFields/phonefield.js'
import UnitViewTitle from './UnitViewFields/unitviewtitle.js'

class UnitViewList extends Component {
        state = {                
                unit_fields: [],
                unit_title: ""
        }
        componentDidMount(){
                this.setState({unit_fields: this.props.unit_fields})
        }
	    render(){
        return(
                <div>
                    {this.props.unit_fields.map(function(field){
                        var i = field.type

                        if(i == 'title'){
                            return <UnitViewTitle title_field={field} key={field.id}/>
                        }
                        else if(i == 'label'){
                            return <LabelField labels_field={field} key={field.id}/>
                        }
                        else if(i == 'email'){
                            return <EmailField email_field={field} key={field.id}/>
                        }
                        else if(i == 'phone'){
                            return <PhoneField phone_field={field} key={field.id}/>
                        }
                        else if(i == 'short'){
                            return <ShortField short_field={field} key={field.id}/>
                        }
                        else if(i == 'long'){
                            return <LongField long_field={field} key={field.id}/>
                        }
                        else if(i == 'checkboxes'){
                            return <CheckBoxGroupField checkboxgroup_field={field} key={field.id}/>
                        }
                        else{
                            console.log('error')
                        }

                    })}
                </div>
        )}
}
export default UnitViewList