import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

const Button = () => {
  return (
    <LanguageContext.Consumer>
      {({ button }) => <button className="ui button primary">{ button }</button>}
    </LanguageContext.Consumer>
  )
}

export default Button