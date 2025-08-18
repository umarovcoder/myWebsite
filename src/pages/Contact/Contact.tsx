import { FC } from 'react';
import './Contact.scss'
import CommentsComponent from '../../components/comments';

const Contact: FC = () => {

  return (
    <>
      <title>Contact - Alisher</title>
      <div className='container text-white px-4 sm:px-6 md:px-8'>
        <form className='telegram-form'>
           <div className='flex flex-col gap-6 w-full pt-20 md:pt-24 lg:pt-28'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center'>Contact with me</h1>

            <div className='w-full max-w-2xl md:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input className='w-full p-2 md:p-3 rounded-sm outline-none text-black text-sm md:text-base lg:text-lg' type="text" placeholder='Name' name='name' />
              <input className='w-full p-2 md:p-3 rounded-sm outline-none text-black text-sm md:text-base lg:text-lg' type="email" placeholder='Email' name='email' />
              <input className='w-full p-2 md:p-3 rounded-sm outline-none text-black text-sm md:text-base lg:text-lg' type="number" placeholder='Number' name='phone' />
              <textarea className='w-full md:col-span-2 p-2 md:p-3 rounded-sm outline-none text-black text-sm md:text-base lg:text-lg h-32 md:h-40' placeholder='Description' name="text"></textarea>
              <div className='md:col-span-2 flex justify-center md:justify-start'>
                <button className='button1 text-black font-medium rounded-sm px-6 py-2 md:px-8 md:py-3 lg:px-10' type='submit'>Send</button>
              </div>
            </div>

            <div className='w-full max-w-4xl mx-auto'>
              <CommentsComponent />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;