import React, { Component } from 'react';
import './estilo.css'

import biscoito from './assets/biscoito.png';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

     this.frases = ['Siga os bons e aprenda com eles.', 
'O riso é a menor distância entre duas pessoas.', 
'Realize o óbvio, pense no improvável e conquiste o impossível.',
'Acredite em milagres, mas não dependa deles.',
'A maior barreira para o sucesso é o medo do fracasso.',
'Amar é doloroso, mas vale o esforço',
'As vezes, o que você precisa é apenas de um bom descanso'];
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
        this.setState(state);

    }

    render(){
        return(
            <div className="container">
                <img src={biscoito} className="img" />
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>         
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
            </div>
        );
    }
}



export default App;
