import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Scrape from './components/Scrape';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ユーザー登録とログイン</h1>
      </header>
      <main>
        <RegisterForm />
        <LoginForm />
        <Scrape />
        
      </main>
    </div>
    
  );
}

export default App;
