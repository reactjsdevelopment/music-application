import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import PropTypes from "prop-types";
import music from '../../images/music.jpeg';
const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.hits.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target="_blank"
                    href='#'
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
              
                         {!_.isEmpty(artist.artist.avatar) ? (
                      <Card.Img
                        variant="top"
                        src={artist.artist.avatar}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{artist.artist.name}</Card.Title>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

ArtistsList.propTypes = {
  artists: PropTypes.object
};


export default ArtistsList;
