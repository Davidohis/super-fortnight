import React from "react";
import "tachyons";
import { Link } from 'react-router-dom';

const Card = ({ id, name, email }) => {
  return (
      <div className="overflow-x-hidden tc flex-wrap bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img className="robot" src={`https://robohash.org/${id}?set=set1`} alt="robot" />
        <div>
          <h2> {name} </h2> 
          <p> {email} </p>

          <Link to={`/shop/${id}`}> View more </Link>
        </div>
      </div>
  );
};

export default Card;