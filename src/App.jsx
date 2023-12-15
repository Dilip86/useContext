import './App.css'
import LoginComponent from './Components/LoginComponent'
import ProfileComponent from './Components/ProfileComponent'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and Share is Important</h1>
      <LoginComponent />
      <ProfileComponent />
    </UserContextProvider>
  )
}

export default App
