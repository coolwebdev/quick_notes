import React from 'react'

import Note from 'components/note'
import Masonry from 'components/masonry'
import Responsive from 'components/responsive'

const NotesGrid = ({notes, onNoteDelete}) => {
  return (
    <Responsive>
      <Masonry>
        {notes.map((note) => {
          return (
            <Note
              key={note.id}
              onDelete={() => onNoteDelete(note)}
            >
              {note.text}
            </Note>
          )
        })}
      </Masonry>
    </Responsive>
  )
}

export default NotesGrid
