import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
    return (
        <div className='container flex justify-between py-5'>
            <h2 className="text-3xl font-bold cursor-pointer text-white">
                <Link to={'/'}>Alisher <br /> Umarov.</Link>
            </h2>

            <ul className='flex flex-row items-center gap-10 text-white'>
                <li
                    className='text-xl cursor-pointer hover:underline underline-offset-4'
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
                    <Link to={'/works'}>Works</Link>
                </li>
                <li 
                    className='text-xl cursor-pointer hover:underline underline-offset-4'
                >
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header