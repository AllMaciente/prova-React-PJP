import './styles.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header className='cabecalho'>
        <h1>PJPook</h1>
        <nav>
            <ol>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
                <Link to="/api">
                    <li>Api</li>
                </Link>
            </ol>
        </nav>
    </header>
        
    )
}