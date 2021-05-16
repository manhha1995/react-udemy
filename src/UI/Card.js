import React from 'react'

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const classes = 'card ' + props.classname
  return (
      // eslint-disable-next-line react/prop-types
      <div className={classes}>{props.children}</div>
  )
}

export default Card
