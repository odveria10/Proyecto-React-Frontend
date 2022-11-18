import "../Estilos/form.css";


import React, { Component } from 'react';


export default class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            img: "#",
            types:""
        };

    }
    
    fetchapi = async () => {
        let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await resp.json();

        console.log(data);
        this.setState({
        img: data.sprites.other.dream_world.front_default
        });
    };

    handlerName = event => {
        this.setState({
            name: event.target.value
        });
    };

    handlerSubmit = event => {
        let aux = this.state.name;
        console.log(aux);
        event.preventDefault();
        this.fetchapi();
    };



    render() {
        return (
            <>
                 <div className="card" style={{width: '25rem'}}>
                    <div className="card-body text-black">
                    <div className="card-title text-black">Este es tu Pokemon?</div>
                    

                        <form
                        onSubmit={this.handlerSubmit}>
                                <input
                                    type="text"
                                    placeholder="Ingrese el nombre de su pokemon"
                                    value={this.state.name}
                                    onChange={this.handlerName}
                                ></input>
                               
                                <br/>
                                 <button type="submit" className="btn btn-primary">Busca tu Pokemon</button>
                                 <div className="card-body text-black"></div><h3>Tipo de Pokemon:{this.state.type}</h3>
                                 <br/>
                        </form>
                        </div>
                         <div className='contenedor-cards'>
                    <img src={this.state.img} alt=""></img>
                    </div>
                    </div>
            </>

        );
    }
}