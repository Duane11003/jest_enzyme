import React from 'react'

function Congrats(props) {

    const successMessage = (
        <div data-test="component-congrats">
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

export default Congrats;