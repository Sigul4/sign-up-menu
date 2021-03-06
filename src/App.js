import './App.css';
import {useState} from 'react';

const Inputs = ({onLogin}) => {

    const [login, loginChecker] = useState('Логина')
    const [pass, passChecker] = useState('Пароля')

    return (
        <>
            <input type="text" 
                        value={login} 
                        onChange={(e) => loginChecker(e.target.value)}/>
            <p>{/^([a-z || 0-9]{7,}$)/.test(login) ? 'true' : 'Набубень латиницы или цифр'} </p>
            
            <input type="text" 
                        value={pass} 
                        onChange={(e) => passChecker(e.target.value)}/>
            <p>{/.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/.test(pass) ? 'true' : 'Нада буковы, цифры + не забываем про верхний регистр :D'} </p>
            
            <button disabled={/([a-z || 0-9]{7,})/.test(login) && /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/.test(pass) ? false : true} onClick={() => onLogin({login, pass})}> Sign up</button>

        </>
    )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Inputs  onLogin={({login, pass}) => {console.log(login, pass)}}></Inputs>
      </header>
    </div>
  );
}

export default App;
