import { FC } from 'react';
import './Contact.scss'
import CommentsComponent from '../../components/comments';

const Contact: FC = () => {

  return (
    <>
      <title>Contact - Alisher</title>
      <div className='container text-white px-4 sm:px-6 md:px-8'>
        <div className='w-full max-w-4xl mx-auto'>
          <CommentsComponent />
        </div>
      </div>
    </>
  )
}

export default Contact;