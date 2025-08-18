import { FC } from 'react';
import me from '../../assets/Imgs/me.jpg';


const About: FC = () => {
  return (
    <>
      <title>About - Alisher</title>
      <div className='container pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 lg:gap-20'>
        <div className='flex-col w-full md:w-1/2'>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
            I'm a Alisher Umarov, a tech and programming enthusiast
          </h1>
          <p className='text-white text-sm md:text-base lg:text-lg py-3 md:py-4 lg:py-6'>I have a deep interest in open-source software, terminal commands, and automation. To me, Linux is more than just an operating system—it's a world of freedom and endless possibilities. <br /> <br/>
          On this blog, I share my experiences, projects, and useful insights about programming. If you're interested in frontend development, Linux, or the world of IT, you've come to the right place! 🚀 <br />
          </p>
        </div>
        <img className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl object-cover rotate-3' src={me} alt="text" />
      </div>
    </>
  )
}

export default About;