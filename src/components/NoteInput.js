import React, {useState} from 'react'

const NoteInput = ({ onAddNote }) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (value.trim()) {
                onAddNote(value);
                setValue('');
            }
        }
    };
  return (
    <div className="note-input">
        <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} className='input-text' placeholder='Enter your note here...'/>
    </div>
  )
}

export default NoteInput;