import React from 'react';
import HelloStateless from './HelloStateless';
import HelloStateful from './HelloStateful';
import HelloForm from './HelloForm';


function App() {
  return (
    <div>
        <HelloStateless nome="Jéssica"></HelloStateless>
        <HelloStateful nome="seu nome"></HelloStateful>
        <HelloStateful nome="seu nome"></HelloStateful>
        <HelloForm></HelloForm>

    </div>
  );
}

export default App;
