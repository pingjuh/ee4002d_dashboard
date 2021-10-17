import React, { Fragment, useEffect }from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Graph from '../graphs/Graph';


const Channel = () => {  
  const { channelID } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (channelID < 0 || channelID > 15 || isNaN(channelID)) {
      history.push('/not-found');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h1>Sensor reading: Channel {channelID}</h1>
      <Graph channelID={parseInt(channelID)}/>
    </Fragment>
    
  );
}

export default Channel;
