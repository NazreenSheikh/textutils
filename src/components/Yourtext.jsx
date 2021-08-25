import React, { useState } from 'react'

const Yourtext = (props) => {
  const [text, setText] = useState('')

  const onTextChange = (e) => {
    setText(e.target.value)
  }
  const ToUpperCase = () => {
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  const ToLowerCase = () => {
    let newtext = text.toLowerCase()
    setText(newtext)
  }

  return (
    <>
      <div className="container">
        <button
          className="btn btn-warning my-2"
          onClick={(text) => setText('')}
        >
          Reset
        </button>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode}  my-3`}
            value={text}
            placeholder="Enter text"
            onChange={onTextChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-warning " onClick={ToUpperCase}>
            convert to UpperCase
          </button>
          <button className="btn btn-warning mx-4" onClick={ToLowerCase}>
            convert to lowercase
          </button>
        </div>
      </div>
      <div className="container">
        <h4>Summary of your Text</h4>
        <p>
          {text.split(' ').length - 1} words and {text.length} characters
        </p>
        <p className="text-muted">
          {Math.round(0.008 * (text.split(' ').length - 1))}m read time
        </p>
        <h5>Preview</h5>
        <p className="text-capitalise">{text}</p>
      </div>
    </>
  )
}

export default Yourtext
