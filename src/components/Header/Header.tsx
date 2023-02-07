import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header: FC = () => {

    window.addEventListener('scroll', function () {
        const header: any = this.document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY >= 0)
    });

    return (
        <header className='container flex justify-between py-5'>
            <h2 className="text-3xl font-bold cursor-pointer text-white dark:text-white">
                <Link to={'/'}>Alisher <br /> Umarov.</Link>
            </h2>

            <ul className='flex flex-row items-center gap-10 text-white z-20'>
                <li
                    className='text-xl cursor-pointer hover:underline underline-offset-4 z-20'
                >
                    <Link to={'/'}>Home</Link>
                </li>
                <li
                    className='text-xl cursor-pointer hover:underline underline-offset-4'
                >
                    <Link to={'/about'}>About</Link>
                </li>
                <li
                    className='text-xl cursor-pointer hover:underline underline-offset-4'
                >
                    <Link to={'/articles'}>Articles</Link>
                </li>
                <li
                    className='text-xl cursor-pointer hover:underline underline-offset-4'
                >
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li
                    className='text-xl cursor-pointer hover:underline underline-offset-4'
                >
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </header >
    )
}

export default Header