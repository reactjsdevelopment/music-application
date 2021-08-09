import React from 'react';
import Player from '../Player/Player';
const SongDetail = (props) => {

  const {isDataSet} = props;
  return (
  <div>
 <h1 className="main-heading">Song Details</h1>
  <p>
      {isDataSet.track.title}
  </p>

  <p>
      song lyrics
  </p>

<Player url = {isDataSet.track.hub.actions[1].uri}/>
  </div>
 
  
  );
};

export default SongDetail;
