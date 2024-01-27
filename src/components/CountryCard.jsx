import React from 'react';
import {
  FaFlag,
  FaRegFlag,
  FaHandshakeAltSlash,
  FaRegHandshake,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CountryCard';
import CountryList from './CountryList';

const CountryCard = ({
  capital,
  continents,
  fifa,
  flags,
  independent,
  official,
  name,
  population,
  region,
  unMember,
}) => {
  // console.log(independent);
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={flags.svg} alt={flags.alt} className='img' />
        <div className='footer'>
          <div className='row'>
            <h4>{name}</h4>
            <h4 className='flags'>
              {independent ? (
                <FaFlag className='flag' />
              ) : (
                <FaRegFlag className='flag' />
              )}
              {unMember ? (
                <FaRegHandshake className='flag' />
              ) : (
                <FaHandshakeAltSlash className='flag' />
              )}
            </h4>
          </div>
          <h5>{official}</h5>
          <p>{continents}</p>
          <Link to={`/country/${name}`} className='btn'>
            <details></details>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default CountryCard;
