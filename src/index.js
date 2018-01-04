import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

const Hashtag = (props) => {
  const hashtag = props.string
    .split(' ')
    .map((string) => {
      const str = string
      return str.startsWith('#')
        ? (<Link to={`${props.url}/${str.split('#')[1]}`}>{str}</Link>)
        : str
    })
    .reduce((prev, curr) => [prev, ' ', curr])

  return (
    <span>
      {hashtag}
    </span>
  )
}

Hashtag.propTypes = {
  string: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Hashtag
