import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <title>Alisher Umarov</title>
      <div className='container pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8'>
        <h1
          className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full md:w-1/2 select-none'
        >
          Hey, I’m Alisher, a frontend developer
        </h1>
        <p className='text-white text-sm md:text-base lg:text-lg py-3 md:py-4 lg:py-6 w-full md:w-3/5'>I am passionate about programming and love Linux. I am always eager to learn new technologies, write clean code, and build perfect user interfaces. For me, frontend development is not just a job but a true passion.

        </p>
      </div>
    </>
  )
}

export default Home;