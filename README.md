# react-hashtags
a simple React component that checks # on a sentence and build a Link on it

## Installation

with npm

	npm install react-hashtags

or with yarn

	yarn add react-hashtags

## Usage

In your component

	...
	import React from 'react'
	import PropTypes from 'prop-types'

	import Hashtag from 'react-hashtags'

	const Caption = (props) => (
	  <div>
	    <Hashtag string={props.description} url={'/search/tags'} />
	  </div>
	)

	Caption.propTypes = {
	  description: PropTypes.string.isRequired,
	}

	export default Caption

	// description = "Let's create a #hashtag"
	// result = Let's create a <Link to="/search/tags/hashtag">#hashtag</Link>

you can then point `/search/tags/<hashtags>` to a search result page with `hashtag` as `req.params`
