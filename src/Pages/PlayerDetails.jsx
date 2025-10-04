import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PlayerDetails = () => {
    
    const {id} = useParams()
    const players = useLoaderData()
    console.log(players , id)

    return (
        <div>
            Player Details
        </div>
    );
};

export default PlayerDetails;