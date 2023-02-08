import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header: FC = () => {

    // window.addEventListener('scroll', function () {
    //     const header: any = this.document.querySelector('header');
    //     header.classList.toggle('sticky', window.scrollY >= 0)
    // });

    const [active, setActive] = useState<string>('home')

    const handleClick = (name: string) => {
        setActive(name);
    };

    return (
        <header className='container flex justify-between items-center max-w-4xl w-full py-8 my-0 md:my-8 mx-auto opacity-80'>
            <h2 className="text-3xl font-bold cursor-pointer text-white dark:text-white">
                <Link to={'/'}>Alisher <br /> Umarov.</Link>
            </h2>

            <ul className='flex flex-row items-center gap-10 text-white'>
                <li
                    onClick={() => handleClick('home')}
                    className='text-xl cursor-pointer hover:text-[#2AB7A6]'
                >
                    <Link className={active === 'home' ? 'active' : ''} to={'/'}>Home</Link>
                </li>
                <li
                    onClick={() => handleClick('about')}
                    className='text-xl cursor-pointer hover:text-[#2AB7A6]'
                >
                    <Link className={active === 'about' ? 'active' : ''} to={'/about'}>About</Link>
                </li>
                <li
                    onClick={() => handleClick('articles')}
                    className='text-xl cursor-pointer hover:text-[#2AB7A6]'
                >
                    <Link className={active === 'articles' ? 'active' : ''} to={'/articles'}>Articles</Link>
                </li>
                <li
                    onClick={() => handleClick('projects')}
                    className='text-xl cursor-pointer hover:text-[#2AB7A6]'
                >
                    <Link className={active === 'projects' ? 'active' : ''} to={'/projects'}>Projects</Link>
                </li>
                <li
                    onClick={() => handleClick('contact')}
                    className='text-xl cursor-pointer hover:text-[#2AB7A6]'
                >
                    <Link className={active === 'contact' ? 'active' : ''} to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </header >
    )
}

export default Header