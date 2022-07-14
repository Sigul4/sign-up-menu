import './App.css';
import {useState} from 'react';

const Inputs = ({onLogin}) => {

    const [login, loginChecker] = useState('Логина')
    const [pass, passChecker] = useState('Пароль')

    return (
        <>
            <input type="text" 
                        value={login} 
                        onChange={(e) => loginChecker(e.target.value)}/>
            <p>{/([a-z || 0-9]{7,})/.test(login) ? 'true' : 'Набубень латиницы или цифр'} </p>
            
            <input type="text" 
                        value={pass} 
                        onChange={(e) => passChecker(e.target.value)}/>
            <p>{/.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/.test(pass) ? 'true' : 'Нада буковы, цифры + не забываем про верхний регистр :D'} </p>
            
            <button onClick={() => onLogin({login, pass})}> Sign up</button>
        
        </>
    )
}



export default Inputs
