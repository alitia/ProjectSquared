import React from 'react'
import PropTypes from 'prop-types'
import EmailField from './UnitViewFields/emailfield.js'
import CheckBoxGroupField from './UnitViewFields/checkboxgroupfield.js'
import LabelField from './UnitViewFields/labelfield.js'
import ShortField from './UnitViewFields/shortfield.js'
import LongField from './UnitViewFields/longfield.js'
import PhoneField from './UnitViewFields/phonefield.js'
import UnitViewTitle from './UnitViewFields/unitviewtitle.js'

export const UnitViewList = (props) => {

	return(
        <div>
        <UnitViewTitle />
        <LabelField />
        <CheckBoxGroupField />
        <EmailField />
        <ShortField />
        <LongField />
        <PhoneField />
		</div>
		)
}