import React, { useState } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import { languages } from '../utils'

const App = () => {
  const [language, setLanguage] = useState({
    button: 'Button',
    label: 'Name',
  })

  const onLanguageChange = lang => {
    setLanguage(languages[lang])
  }

  return (
    <div className="ui container">
      <div>
        <p>Select a language:</p>
        <i className="flag us" onClick={() => onLanguageChange('english')} />
        <i className="flag ar" onClick={() => onLanguageChange('spanish')} />
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    </div>
  )
}

export default App