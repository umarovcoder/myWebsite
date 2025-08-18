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
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleClick = (name: string) => {
        setActive(name);
    };


    return (
        <header className='sticky py-4 md:py-5 opacity-80'>
            <div className='flex justify-between items-center w-full max-w-[1200px] mx-auto px-4 navbar'>
                <h2 className="text-2xl md:text-3xl font-bold cursor-pointer text-white dark:text-white">
                    <Link to={'/'}>Alisher <br className='hidden md:block' /> Umarov.</Link>
                </h2>

                <button
                    aria-label="Toggle menu"
                    className='md:hidden text-white p-2'
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <CgClose size={24} /> : <RiMenu4Line size={24} />}
                </button>

                <ul className='hidden md:flex flex-row items-center gap-6 lg:gap-10 text-white navbar-nav'>
                    <li
                        onClick={() => handleClick('home')}
                        className='text-base md:text-lg lg:text-xl cursor-pointer hover:text-[#2AB7A6]'
                    >
                        <Link to={'/'} className={active === 'home' ? 'active' : ''}>Home</Link>
                    </li>
                    <li
                        onClick={() => handleClick('about')}
                        className='text-base md:text-lg lg:text-xl cursor-pointer hover:text-[#2AB7A6]'
                    >
                        <Link className={active === 'about' ? 'active' : ''} to={'/about'}>About</Link>
                    </li>
                    <li
                        onClick={() => handleClick('articles')}
                        className='text-base md:text-lg lg:text-xl cursor-pointer hover:text-[#2AB7A6]'
                    >
                        <Link className={active === 'articles' ? 'active' : ''} to={'/articles'}>Articles</Link>
                    </li>
                    <li
                        onClick={() => handleClick('projects')}
                        className='text-base md:text-lg lg:text-xl cursor-pointer hover:text-[#2AB7A6]'
                    >
                        <Link className={active === 'projects' ? 'active' : ''} to={'/projects'}>Projects</Link>
                    </li>
                    <li
                        onClick={() => handleClick('contact')}
                        className='text-base md:text-lg lg:text-xl cursor-pointer hover:text-[#2AB7A6]'
                    >
                        <Link className={active === 'contact' ? 'active' : ''} to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>

            {menuOpen && (
                <div className='md:hidden w-full bg-[#18181B]'>
                    <ul className='flex flex-col gap-4 text-white px-6 pb-6 pt-2 max-w-[1200px] mx-auto'>
                        <li onClick={() => { handleClick('home'); setMenuOpen(false); }} className='text-base cursor-pointer hover:text-[#2AB7A6]'>
                            <Link to={'/'} className={active === 'home' ? 'active' : ''}>Home</Link>
                        </li>
                        <li onClick={() => { handleClick('about'); setMenuOpen(false); }} className='text-base cursor-pointer hover:text-[#2AB7A6]'>
                            <Link className={active === 'about' ? 'active' : ''} to={'/about'}>About</Link>
                        </li>
                        <li onClick={() => { handleClick('articles'); setMenuOpen(false); }} className='text-base cursor-pointer hover:text-[#2AB7A6]'>
                            <Link className={active === 'articles' ? 'active' : ''} to={'/articles'}>Articles</Link>
                        </li>
                        <li onClick={() => { handleClick('projects'); setMenuOpen(false); }} className='text-base cursor-pointer hover:text-[#2AB7A6]'>
                            <Link className={active === 'projects' ? 'active' : ''} to={'/projects'}>Projects</Link>
                        </li>
                        <li onClick={() => { handleClick('contact'); setMenuOpen(false); }} className='text-base cursor-pointer hover:text-[#2AB7A6]'>
                            <Link className={active === 'contact' ? 'active' : ''} to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </header >
    )
}

export default Header;