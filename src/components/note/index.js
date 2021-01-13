import React from 'react'

import Wrapper from 'components/note/Wrapper'

const Note = ({children, style, onDelete}) => {
  return (
    <Wrapper style={style}>
      <span onClick={onDelete}>×</span>
      {children}
    </Wrapper>
  )
}

export default Note
