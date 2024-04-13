import React from 'react'
import Note from './Note'

const NoteList = ({ notes }) => {
  return (
    <div className="noteList">
        {notes.map((note, i) => {
             return <Note key={i} content={note} />
        })}
    </div>
  )
}

export default NoteList;