import { FC } from 'react'
import me from '../../assets/Imgs/me2.jpg'


const About: FC = () => {
  return (
    <>
      <title>About - Alisher</title>
      <div className='container flex justify-between pt-32 gap-[10rem]'>
        <div className='flex-col'>
          <h1 className='text-white text-5xl pb-7'>
          Hi, I'm a Alisher Umarov, a tech and programming enthusiast
          </h1>
          <p className='text-white text-1xl'>I was born in 2004 in Tashkent. It's been more than 1 year since I entered the world of programming. <br />
            Currently Programming has become an integral part of my life. <br />
          </p>
        </div>
        <img className='h-[412px] w-[412px] rounded-2xl object-cover rotate-3' src={me} alt="text" />
      </div>
    </>
  )
}

export default About