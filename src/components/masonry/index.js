import PropTypes from 'prop-types'
import React from 'react'

import Wrapper from './Wrapper'
import DivColumn from './DivColumn'

const Masonry = ({children, columnsCount}) => {
  const getColumns = () => {
    const columns = Array.from({length: columnsCount}, () => [])

    React.Children.forEach(children, (child, index) => {
      columns[index % columnsCount].push(child)
    })

    return columns
  }

  const renderColumn = (column) => {
    return column.map((item, i) => (
      <div key={i}>
        {item}
      </div>
    ))
  }

  const renderColumns = () => {
    return getColumns().map((column, i) => {
      return (
        <DivColumn
          key={i}
        >
          {renderColumn(column)}
        </DivColumn>
      )
    })
  }

  return (
    <Wrapper>
      {renderColumns()}
    </Wrapper>
  )
}

Masonry.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  columnsCount: PropTypes.number,
  // style: PropTypes.object
}

Masonry.defaultProps = {
  columnsCount: 3
}

export default Masonry