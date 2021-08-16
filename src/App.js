import logo from './logo.svg';
import React, { useEffect} from 'react';
import { io } from 'socket.io-client';
import './App.css';

function App() {

	useEffect(() => {
   const socket = io('https://dev-api-brella.wlcmapps.com', {
     transports: ['websocket'],
     reconnection: true,
     // reconnectionDelayMax: 1000,
     auth: {
       token: '123',
     },
     query: {
       'my-key': 'my-value',
     },
   });
  console.log(socket);
  setTimeout(() => {
   console.log('Connected', socket.connected);
  }, 3000);
  socket.emit('joinLocationUpdates', '123');
  socket.onAny(console.log)
 }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
