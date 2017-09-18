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
                unit_title: "",
                unit_fields: []
        }
        assign(){


        }
	render(){
                return(
                 

        <div>
        <UnitViewTitle />
        <LabelField />
        <CheckBoxGroupField />
        <EmailField />
        <ShortField />
        <LongField />
        <PhoneField />
		</div>)
		}
}
export default UnitViewList