import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './styles.css';

export function Navigation(){
    return (
        <header>
            <nav>
                <ul>
                    <div className='nav left'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </div>
                    <div className='nav right'>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/cart'><AiOutlineShoppingCart size={24}/></Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}