import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { Redirect } from 'react-router-dom';

const Home = (props) => {


 




  return (
    <React.Fragment>
      { (
        <Redirect to="/dashboard" />
      ) }
    </React.Fragment>
  );
};

export default connect()(Home);
