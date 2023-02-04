import { FC } from 'react'
import me from '../../assets/Imgs/me2.jpg'


const About: FC = () => {
  return (
    <div>
      <img className='h-[412px] w-[412px] rounded-2xl object-cover rotate-3' src={me} alt="text" />
    </div>
  )
}

export default About