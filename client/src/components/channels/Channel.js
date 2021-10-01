import React, { useEffect }from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Graph from '../graphs/Graph';


const Channel = () => {  
  const { channelID } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (channelID < 0 || channelID > 15 || isNaN(channelID)) {
      history.push('/not-found');
    }
  }, []);

  return (
    <Graph channel={parseInt(channelID)}/>
  );
}

export default Channel;