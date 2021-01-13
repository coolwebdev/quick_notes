import React, {useState} from 'react'
import Wrapper from './Wrapper'
import Textarea from './Textarea'
import Button from './Button'

const NoteEditor = ({onNoteAdd}) => {
  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    event.preventDefault()
    setText(event.target.value)
  }

  const handleNoteAdd = () => {
    const newNote = {
      text: text,
      id: Date.now()
    }

    onNoteAdd(newNote)
    setText('')
  }

  return (
    <Wrapper>
      <Textarea
        placeholder="Enter your note here..."
        rows={5}
        value={text}
        onChange={handleTextChange}
      />
      <Button onClick={handleNoteAdd}>Add</Button>
    </Wrapper>
  )
}

export default NoteEditor
