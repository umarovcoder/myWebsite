import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu4Line } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import './Header.scss';
import { useLanguage } from '../../context/LanguageContext';

const Header: FC = () => {
    const [active, setActive] = useState<string>('home');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            header?.classList.toggle('sticky', window.scrollY >= 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const labels = language === 'uz'
        ? { home: 'Bosh sahifa', about: 'Men haqimda', articles: 'Blog', projects: 'Loyihalar', contact: 'Aloqa' }
        : { home: 'Home', about: 'About', articles: 'Articles', projects: 'Projects', contact: 'Contact' };

    const handleClick = (name: string) => setActive(name);

    const changeLanguage = (next: 'uz' | 'en') => {
        setLanguage(next);
    };

    return (
        <header className='sticky py-4 md:py-5 opacity-80'>
            <div className='flex justify-between items-center w-full max-w-[1200px] mx-auto px-4 navbar'>
                <h2 className="text-2xl md:text-3xl font-bold cursor-pointer text-white">
                    <Link to={'/'}>Alisher <br className='hidden md:block' /> Umarov.</Link>
                </h2>

                <div className='flex items-center gap-3 md:gap-6'>
                    <div className='flex items-center border border-[#3A3A40] rounded-full p-1 text-xs md:text-sm'>
                        <button
                            type='button'
                            onClick={() => changeLanguage('uz')}
                            className={`px-2.5 py-1 rounded-full transition ${language === 'uz' ? 'bg-[#2AB7A6] text-black' : 'text-white'}`}
                        >
                            UZ
                        </button>
                        <button
                            type='button'
                            onClick={() => changeLanguage('en')}
                            className={`px-2.5 py-1 rounded-full transition ${language === 'en' ? 'bg-[#2AB7A6] text-black' : 'text-white'}`}
                        >
                            EN
                        </button>
                    </div>

                    <button
                        aria-label="Toggle menu"
                        className='md:hidden text-white p-2'
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <CgClose size={24} /> : <RiMenu4Line size={24} />}
                    </button>
                </div>

                <ul className='hidden md:flex flex-row items-center gap-6 lg:gap-10 text-white navbar-nav'>
                    {[
                        ['home', '/', labels.home],
                        ['about', '/about', labels.about],
                        ['articles', '/articles', labels.articles],
                        ['projects', '/projects', labels.projects],
                        ['contact', '/contact', labels.contact],
                    ].map(([key, path, label]) => (
                        <li key={key} onClick={() => handleClick(key)} className='text-base md:text-lg lg:text-xl cursor-pointer hover:text-[#2AB7A6]'>
                            <Link to={path} className={active === key ? 'active' : ''}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {menuOpen && (
                <div className='md:hidden w-full bg-[#18181B]'>
                    <ul className='flex flex-col gap-4 text-white px-6 pb-6 pt-2 max-w-[1200px] mx-auto'>
                        {[
                            ['home', '/', labels.home],
                            ['about', '/about', labels.about],
                            ['articles', '/articles', labels.articles],
                            ['projects', '/projects', labels.projects],
                            ['contact', '/contact', labels.contact],
                        ].map(([key, path, label]) => (
                            <li key={key} onClick={() => { handleClick(key); setMenuOpen(false); }} className='text-base cursor-pointer hover:text-[#2AB7A6]'>
                                <Link to={path} className={active === key ? 'active' : ''}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header;