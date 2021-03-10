import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

const Field = () => {
  return (
    <LanguageContext.Consumer>
      {({ label }) =>
        <div className="ui field">
          <label>{ label }</label>
          <input type="text" />
        </div>
      }
    </LanguageContext.Consumer>
  )
}

export default Field