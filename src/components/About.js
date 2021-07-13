import React from 'react'
import { useHistory } from 'react-router'

const About = () => {
  let history = useHistory()
  const handleHistory = () => {
    history.push("/users")
  }
  
  console.log(history)
  return (
    <div>
      <h2>I am from About Component</h2>
      <button type="button" onClick={handleHistory}>Go Users</button>
    </div>
  )
}

export default About
