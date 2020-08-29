import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <div>
      <button className="btn" onClick={() => history.push('/todo-react-ts')}>To List</button>
    </div>
  )
}

export default AboutPage
