import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return (
        <>
        <div className="cards" >
            <img src={props.imgscr} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/about" className="btn btn-outline-primary">Buy Now</NavLink>
            </div>
        </div>
        </>)
}
export default Card;