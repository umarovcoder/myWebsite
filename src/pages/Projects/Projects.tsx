import { FC, useState } from 'react'

const Projects: FC = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <title>Projects - ALisher</title>
      <div style={{
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#333',
        padding: '20px'
      }} className='container'>
        <h1>{darkMode ? 'Dark mode' : 'loght mode'}</h1>

        <button onClick={() => setDarkMode(!darkMode)}>toggle mode</button>
      </div>
    </>
  )
}

export default Projects;