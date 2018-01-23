import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import uuid from 'uuid'

const Hashtag = (props) => {
  const hashtag = props.string
    .split(' ')
    .map((string) => {
      const str = string
      return str.startsWith('#')
        ? (<span key={uuid.v4()}><Link to={`${props.url}/${str.split('#')[1]}`}>{str}</Link></span>)
        : (<span key={uuid.v4()}>{str}</span>)
    })
    .reduce((prev, curr) => [prev, ' ', curr])

  return hashtag
}

Hashtag.propTypes = {
  string: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Hashtag
