import React, { Component } from "react";
import "./PokeCard.css";
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export class PokeCard extends Component {
   render() {
      let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
      return (
         <div className="PokeCard">
            <h2>{this.props.name}</h2>
            <img className='poke_image' src={imgSrc} alt={this.props.name} />
            <div className="PokeCard-Data">Type: {this.props.type}</div>
            <div className="PokeCard-Data">EXP: {this.props.exp}</div>
         </div>
      );
   }
}

export default PokeCard;
