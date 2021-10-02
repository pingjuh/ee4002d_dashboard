import React from 'react'
import Graph from '../graphs/Graph';
import GraphCard from '../graphs/GraphCard';

const Home = () => {
  let channelIDs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <div style={graphStyle}>
      {channelIDs.map(channelID => <GraphCard key={channelID} channelID={channelID}/>)}
    </div>
  );
}

const graphStyle = {
  display: 'inline-grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Home;
