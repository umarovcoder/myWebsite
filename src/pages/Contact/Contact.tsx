import { FC } from 'react';
import './Contact.scss'
import CommentsComponent from '../../components/comments';

const Contact: FC = () => {

  return (
    <>
      <title>Contact - Alisher</title>
      <div className='container text-white'>
        <form className='telegram-form'>
           <div className='flex flex-col gap-4 w-[100%] pt-28'>
            <h1>Contact with me</h1>
            <input className='w-[500px] p-2 rounded-sm outline-none text-black' type="text" placeholder='Name' name='name' />
            <input className='w-[500px] p-2 rounded-sm outline-none text-black' type="email" placeholder='Email' name='email' />
            <input className='w-[500px] p-2 rounded-sm outline-none text-black' type="number" placeholder='Number' name='phone' />
            <textarea className='w-[500px] p-2 rounded-sm outline-none text-black' placeholder='Description' name="text"></textarea>
            <button type='submit'>Send</button>
          </div> 
          <CommentsComponent />
        </form>
      </div>
    </>
  )
}

export default Contact;