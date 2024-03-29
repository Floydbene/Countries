import React from 'react';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Sorry</h3>
          <p>We could not find the page you are looking for</p>
          <Link to='/'>To homepage</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h1>Something went wrong...</h1>
      </div>
    </Wrapper>
  );
};

export default Error;
