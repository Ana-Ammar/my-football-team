import React from 'react';
import { NavLink } from 'react-router';

const PlayerCard = ({player}) => {

    const {image, name, position, description, nationality, club, id} = player

    return (
        <NavLink to={`/player-details/${id}`} className="card bg-base-100 shadow-sm cursor-pointer 
                        transform transition-transform duration-200 
                        active:scale-95">
        <figure className='h-6/12 object-cover'>
          <img className='h-full w-full'
            src={image}
            alt={name}
          /> 
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge bg-blue-800 text-white">{position}</div>
          </h2>
          <p>
            {description}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline font-semibold">{nationality}</div>
            <div className="badge badge-outline font-semibold">{club}</div>
          </div>
        </div>
      </NavLink>
    );
};

export default PlayerCard;