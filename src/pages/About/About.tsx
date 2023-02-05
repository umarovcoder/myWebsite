import { FC } from 'react'
import me from '../../assets/Imgs/me2.jpg'


const About: FC = () => {
  return (
    <>
    <title>About - Alisher</title>
      <div>
        <img className='h-[412px] w-[412px] rounded-2xl object-cover rotate-3' src={me} alt="text" />
        <h1>Hey, I’m Alisher, a frontend developer not much experience</h1>
      </div>
    </>
  )
}

export default About