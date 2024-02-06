import { useState } from 'react'
import Auth from './components/Auth'
import Content from './components/Content';
import './App.css'

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('token')));

  const toggleIsAuth = () => {
    setIsAuth(!isAuth)
  }

  return (
    !isAuth
      ? <Auth toggleIsAuth={toggleIsAuth} />
      : <Content toggleIsAuth={toggleIsAuth} />
  )
}

export default App
