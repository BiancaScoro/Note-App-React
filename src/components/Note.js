import React from 'react'

const Note = ({ content }) => {
  return (
    <div className='note'>
        <p>{content}</p>
    </div>
  )
}

export default Note;