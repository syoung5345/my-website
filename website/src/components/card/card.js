import React from 'react'
import PropTypes from 'prop-types'

import './card.css'
import Image from '../image'

const Card = props => (
    <div className="container">
        <h1>{props.name}</h1>
        <p>{props.info}</p>
        
    </div>
)

export default Card;