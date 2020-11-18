import React from 'react';
import HelloStateless from './HelloStateless';
import HelloStateful from './HelloStateful';


function App() {
  return (
    <div>
        <HelloStateless nome="Jéssica"></HelloStateless>
        <HelloStateful nome="seu nome"></HelloStateful>
        <HelloStateful nome="seu nome"></HelloStateful>

    </div>
  );
}

export default App;
