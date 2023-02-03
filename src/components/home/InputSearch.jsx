import React from 'react'

const InputSearch = ({setInputText, inputText}) => {

    const handleChange = e => {
        setInputText(e.target.value)
    }

  return (
    <div className='input_container'>
    <input className='input' value={inputText} onChange={handleChange} type="text" placeholder='what are you looking for?'/>
    </div>
  )
}

export default InputSearch

