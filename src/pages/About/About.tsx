import { FC } from 'react';
import me from '../../assets/Imgs/me.jpg';


const About: FC = () => {
  return (
    <>
      <title>About - Alisher</title>
      <div className='container flex justify-between pt-32 gap-[10rem]'>
        <div className='flex-col w-2/4'>
          <h1 className='text-white text-5xl'>
            I'm a Alisher Umarov, a tech and programming enthusiast
          </h1>
          <p className='text-white text-1xl py-3'>I have a deep interest in open-source software, terminal commands, and automation. To me, Linux is more than just an operating system—it's a world of freedom and endless possibilities. <br /> <br/>
          On this blog, I share my experiences, projects, and useful insights about programming. If you're interested in frontend development, Linux, or the world of IT, you've come to the right place! 🚀 <br />
          </p>
        </div>
        <img className='h-[412px] w-[412px] rounded-2xl object-cover rotate-3' src={me} alt="text" />
      </div>
    </>
  )
}

export default About;