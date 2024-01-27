import React from 'react';
import Wrapper from '../assets/wrappers/CountryList';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
  if (!countries) {
    return <h4 style={{ textAlign: 'center' }}>No countries found.</h4>;
  }
  const formattedCountries = countries.map((country) => {
    const {
      capital,
      continents,
      fifa,
      flags,
      independent,
      name,
      population,
      region,
      unMember,
    } = country;
    // console.log(name.nativeName);
    return {
      capital: capital,
      continents: continents,
      fifa: fifa,
      flags: flags,
      independent: independent,
      official: name.official,
      name: name.common,
      population: population,
      region: region,
      unMember: unMember,
    };
  });
  return (
    <Wrapper>
      {formattedCountries.map((country) => {
        // console.log(typeof country);
        return <CountryCard key={country.name} {...country} />;
      })}
    </Wrapper>
  );
};

export default CountryList;
