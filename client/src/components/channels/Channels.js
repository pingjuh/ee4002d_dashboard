import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import Channel from './Channel'


const Channels = () => {
  // Generate 16 channels
  let channels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  let channelList = [];
  channels.forEach((channel)=>{
    channelList.push( <Route key={channel} exact path={`/graph/ch${channel}`} render={props => (
      <Channel { ...props} channel={channel}/>
    )} />)
    console.log(channelList);
  })
  return (
    <Fragment>
      {channelList}
    </Fragment>
  )
}

export default Channels;
