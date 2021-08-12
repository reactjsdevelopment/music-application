import React, { useState }  from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import SongDetail from '../SongDetail/SongDetail';
import PropTypes from "prop-types";


const PlayList = ({ playlist }) => {
 
  const [isShow, setIsShow] = useState(false);
  const [isDataSet, setData] = useState([]);


  const setM = (e) => {
    setData(e);
    setIsShow(true);
  };

  return (
    <div>

{isShow && <SongDetail  isDataSet={isDataSet}/>}

      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.hits.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                    {(
                      <Card.Img variant="top" src={item.track.images.background} alt=""  onClick={() => setM(item)}/>
                    ) }
                  <Card.Body>
                    <Card.Title>{item.track.title}</Card.Title>
                    <Card.Text>
                      <small>By {item.track.hub.displayname}</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

PlayList.propTypes = {
  playlist: PropTypes.object
};

export default PlayList;
