import React from 'react'
import PropTypes from 'prop-types'

function Congrats(props) {

    const successMessage = (
        <div data-test="component-congrats" className='alert alert-success'>
            <span data-test="congrats-message">
                Congratulations! you guess the word
            </span>
        </div>
    )

    const failMessage = (
        <div data-test="component-congrats">

        </div>
    )

    return (
        <div>
            {props.success ? successMessage : failMessage}
        </div>
    )
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;