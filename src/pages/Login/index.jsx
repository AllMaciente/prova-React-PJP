import './styles.css'
import { Link } from 'react-router-dom'
export default function Login(){
    return(
        <>
        <div className='title'>
            Login
        </div>
        <form>
        <div className='formulario'>
        Nome de usuário: 
            <input type="text" placeholder='Nome de usuário' required />
            Senha: 
            <input type="password" placeholder='Senha' required/>
            <Link to="/api"><button type='submit'>Entrar</button></Link>
            
        </div>
        </form>
        </>

    )
}

