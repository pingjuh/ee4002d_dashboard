import React from 'react'
import Graph from './Graph';

const GraphCard = ({ channelID }) => {
  return (
    <div className='card'>
      <h3>Channel {channelID}</h3>
      <Graph key={channelID} channelID={channelID} width={300} height={180}/>
    </div>
  );
}

export default GraphCard;
