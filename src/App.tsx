import React from 'react';
import logo from './logo.svg';
import './App.css';
import useServiceWorker from './useServiceWorker';

function App() {
  const { showWarning } = useServiceWorker()

  return (
    <div className="App">
      <header className="App-header">
        {!!showWarning && 
          <button onClick={() => {
            window.location.reload( )
          }}>
            Clique aqui para atualizar
          </button>
        }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
