import React, {useState} from 'react'
import NoteInput from './NoteInput';
import NoteList from './NoteList';

const NoteManager = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    };

  return (
    <div>
        <NoteInput onAddNote={addNote} />
        <NoteList notes={notes} />
    </div>
  )
}

export default NoteManager;