import React from 'react';
import HelloStateless from './HelloStateless';
import HelloStateful from './HelloStateful';
import HelloForm from './HelloForm';

import './App.css';

class App extends React.Component {
    exibirAlerta(texto) {
        alert('[App.js] ' + texto)
    }

    render() {
        return (
            <div className="App">
                <h1 className="meu-app">Meu App</h1>
                <HelloStateless nome="Jéssica"></HelloStateless>
                <HelloStateful nome="Jéssica"></HelloStateful>
                <HelloStateful nome="Joao"></HelloStateful>
                <HelloForm exibeAlerta={this.exibirAlerta}></HelloForm>
            </div>
        );
    }
}

export default App;