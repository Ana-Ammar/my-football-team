import React from "react";
import { useLoaderData, useParams } from "react-router";

const PlayerDetails = () => {
  const { id } = useParams();
  const players = useLoaderData();

  const clickedPlayer = players.find((player) => player.id == id);
  const {
    name,
    age,
    position,
    nationality,
    market_value,
    club,
    goals,
    assists,
    contract_until,
    height,
    preferred_foot,
    agent,
    image,
    description,
  } = clickedPlayer;

  return (
    <div>
      <div className="card px-8 my-20">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-4xl font-bold banner-font ">
            Personal Information
          </h2>

          <div className="rounded-box border border-base-content/5">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th className="w-0">Name</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th className="w-0">Age</th>
                  <td>{age} yrs</td>
                </tr>
                  <tr>
                  <th className="w-0">Height</th>
                  <td>{height}</td>
                </tr>
                  <tr>
                  <th className="w-0">Country</th>
                  <td>{nationality}</td>
                </tr>
                  <tr>
                  <th className="w-0">Description</th>
                  <td>{description}</td>
                </tr>
              </tbody>
            </table>
          </div>

          

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
