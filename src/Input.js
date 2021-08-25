import React, {useState} from 'react'
import PropTypes from 'prop-types'




const Input = ({ secretWord }) => {

 const [inputText, setInputText] = useState('');
 

 return (
 
    <div data-test="component-input"> 
        {/* <input
        type="text"
        onChange={(e) => setInputText(e.target.value)} 
        value={inputText}
        >
        </input> */}
        test
    </div>
 )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input;

