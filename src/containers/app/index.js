import React, {useState, useEffect, useRef} from 'react'

import GlobalStyles from '../../global-styles'
import Wrapper from 'containers/app/Wrapper'
import AppHeader from 'containers/app/AppHeader'
import NoteEditor from 'components/noteEditor'
import NotesGrid from 'components/notesGrid'
import Footer from 'components/footer'
import MainSection from 'containers/app/MainSection'

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
      <AppHeader>Quick Notes</AppHeader>
      <MainSection>
        <NoteEditor onNoteAdd={handleNoteAdd} />
        <NotesGrid notes={notes} onNoteDelete={handleNoteDelete} />
      </MainSection>
      <Footer />
      <GlobalStyles />
    </Wrapper>
  )
}

export default App
