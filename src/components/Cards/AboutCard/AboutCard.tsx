import { FC } from 'react'

const AboutCard: FC = () => {
  return (
    <div className='flex text-center items-center'>
      <div
        className='container py-1 px-12 w-2/5'
        style={{ border: '1px solid #27272C', marginTop: '80px' }}
      >
        <h1
          className='text-white text-5xl'
        >
          Hey, I’m Alisher, a frontend developer not much experience
        </h1>
      </div>

      <div
        className='container py-1 px-12 w-2/5'
        style={{ marginTop: '80px' }}
      >
        
      </div>
    </div>
  )
}

export default AboutCard