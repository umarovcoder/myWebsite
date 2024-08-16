import { FC } from 'react';

const Contact: FC = () => {
  return (
    <>
    <title>Contact - Alisher</title>
      <div className='container text-white flex justify-center'>
        <form>
          <div className='flex flex-col gap-4 w-[100%] pt-28'>
            <h1>Contact with me</h1>
            <input className='w-[500px] p-2 rounded-sm outline-none text-black' type="text" placeholder='Name' />
            <input className='w-[500px] p-2 rounded-sm outline-none text-black' type="email" placeholder='Email' />
            <input className='w-[500px] p-2 rounded-sm outline-none text-black' type="number" placeholder='Number' />
            <button>Send</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;