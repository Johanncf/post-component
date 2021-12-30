import './App.css';
import Post from './Post';
import { useState, useEffect } from "react"

const user1 = {
  name: 'Jane Doe',
  photo: 'https://images.unsplash.com/photo-1640453998519-956952bbc616?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
}

const date = new Date()

function App() {

  const [currentTime, setCurrentTime] = useState(new Date())
  const [dateProp, setDateProp] = useState()

  setInterval(() => {
    setCurrentTime(new Date())
  }, 60000)

  let years = currentTime.getFullYear() - date.getFullYear()
  let months = currentTime.getMonth() - date.getMonth()
  let days = currentTime.getDate() - date.getDate()
  let minutes = currentTime.getMinutes() - date.getMinutes()

  useEffect(() => {
    if (years === 0 && months === 0 && days === 0 && minutes === 0) {
      
      setDateProp('Seconds ago')

    } else if (years === 0 && months === 0 && days === 0) {
      
      setDateProp(`${minutes} min`)

    } else if (years === 0 && months === 0) {
      
      setDateProp(`${days} days`)

    } else if (years === 0) {
      
      setDateProp(`${days} months`)

    } else {
      
      setDateProp(`${years} years`)

    }
    
  }, [currentTime])


  return (
    <Post user={user1} photo={'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} date={dateProp} > Texto de teste pra meu componente de postagem </ Post>
  );
}

export default App;
