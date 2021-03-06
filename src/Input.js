import React from 'react'
import PropTypes from 'prop-types'




const Input = ({ secretWord }) => {

 const [currentGuess, setCurrentGuess] = React.useState('');
 

 return (
 
    <div data-test="component-input"> 
       <form className='form-inline'>
         <input 
           className='mb-2 mx-sm-3'
           data-test="input-box"
           type="text"
           placeholder="enter guess"
           value={currentGuess}
           onChange={(e) => setCurrentGuess(e.target.value)}
         />
        <button
         className='btn btn-primary mb-2'
         data-test="submit-button"
         >
         Submit
        </button>
       </form>
        
    </div>
 )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input;

