import { FC } from 'react';

const Contact: FC = () => {
  
  document.querySelector('.telegram-form')?.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    const token: string = "7483502595:AAGi6HGAfqRZa6vnRT1ylnOOkINdB_62flU";
    const chat_id: string = "-4552570818";
    
    const name = (document.querySelector('input[name="name"]') as HTMLInputElement)?.value;
    const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement)?.value;
    const email = (document.querySelector('input[name="email"]') as HTMLInputElement)?.value;
    const text = (document.querySelector('textarea[name="text"]') as HTMLTextAreaElement)?.value;

    const message: string = `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Description: ${text}
    `;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('Success!');
            window.location.reload();
        } else {
            console.error('Telegram API error:', data);
        }
    })
    .catch(error => console.error('Error:', error));
});


  return (
    <>
    <title>Contact - Alisher</title>
      <div className='container text-white flex justify-center'>
        <form className='telegram-form'>
          <div className='flex flex-col gap-4 w-[100%] pt-28'>
            <h1>Contact with me</h1>
            <input className='w-[500px] p-2 rounded-sm outline-none text-black' type="text" placeholder='Name' name='name' />
            <input className='w-[500px] p-2 rounded-sm outline-none text-black' type="email" placeholder='Email' name='email' />
            <input className='w-[500px] p-2 rounded-sm outline-none text-black' type="number" placeholder='Number' name='phone' />
            <textarea className='w-[500px] p-2 rounded-sm outline-none text-black'  placeholder='Description' name="text"></textarea>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;