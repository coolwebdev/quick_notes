import React, {useState, useEffect, useRef} from 'react'

import GlobalStyles from '../../global-styles'
import Wrapper from './Wrapper'
import AppHeader from './AppHeader'
import NoteEditor from 'components/noteEditor'
import NotesGrid from 'components/notesGrid'

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem('notes'))
    if (localNotes) {
      setNotes(localNotes)
    }
  }, [])

  const mounted = useRef(true)

  useEffect(() => {
    if (mounted.current) {
      mounted.current = false
      return
    }
    const allNotes = JSON.stringify(notes)
    localStorage.setItem('notes', allNotes)
    // console.log(localStorage.getItem('notes'))
  })

  const handleNoteAdd = (newNote) => {
    const newNotes = notes.slice()
    newNotes.unshift(newNote)
    setNotes(newNotes)
  }

  const handleNoteDelete = (note) => {
    const noteId = note.id
    const newNotes = notes.filter((note) => {
      return note.id !== noteId
    })
    setNotes(newNotes)
  }

  return (
    <Wrapper>
      <AppHeader>Notes App</AppHeader>
      <NoteEditor onNoteAdd={handleNoteAdd} />
      <NotesGrid notes={notes} onNoteDelete={handleNoteDelete} />
      <GlobalStyles />
    </Wrapper>
  )
}

export default App
