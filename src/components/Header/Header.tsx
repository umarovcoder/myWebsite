import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu4Line } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import './Header.scss';

const Header: FC = () => {

    window.addEventListener('scroll', function () {
        const header: any = this.document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY >= 0)
    });

    const [active, setActive] = useState<string>('home');
    // const [click, setClick] = useState<boolean>(false);

    const handleClick = (name: string) => {
        setActive(name);
    };


    return (
        <header className='sticky py-5 opacity-80 truncate'>
            <div className='flex justify-between items-center w-full max-w-[1200px] mx-auto navbar'>
                <h2 className="text-3xl font-bold cursor-pointer text-white dark:text-white">
                    <Link to={'/'}>Alisher <br /> Umarov.</Link>
                </h2>

                <ul className='flex flex-row items-center gap-10 text-white navbar-nav'>
                    <li
                        onClick={() => handleClick('home')}
                        className='text-xl cursor-pointer hover:text-[#2AB7A6]'
                    >
                        <Link to={'/'} className={active === 'home' ? 'active' : ''}>Home</Link>
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
            </div>
        </header >
    )
}

export default Header;