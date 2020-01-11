import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <section className='notFoundContainer'>
        <h1>
          <i className='fas fa-exclamation-triangle' /> Page Not Found
        </h1>
        <p className='large'>Sorry, this page does not exist</p>
        <p>
          Please go to this page <Link to='/'>Search</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default NotFound;
