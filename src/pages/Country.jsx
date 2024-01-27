import { useLoaderData } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CountryPage';
import { useQuery } from '@tanstack/react-query';

const singleCountryUrl = 'https://restcountries.com/v3.1/name/';
const singleCountryAppendix = '?fulltext=true';

const singleCountryQuery = (name) => {
  return {
    queryKey: ['country', name],
    queryFn: async () => {
      const { data } = await axios.get(
        `${singleCountryUrl}${name}${singleCountryAppendix}`
      );
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { name } = params;
    await queryClient.ensureQueryData(singleCountryQuery(name));
    return { name };
  };
const Country = ({}) => {
  const { name: commonName } = useLoaderData();
  const { data } = useQuery(singleCountryQuery(commonName));
  const { name, flags, altSpellings, capital } = data[0];
  // console.log(flags.png);
  if (!data) return <Navigate to='/' />;
  console.log(name);
  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          Back Home
        </Link>
        <h1>{name.common}</h1>
      </header>
      <div className='country'>
        <img src={flags.svg} alt={flags.alt} className='img' />
        <div className='country-info'>
          <p>
            <span className='country-data'>name:</span>
            {name.official}
          </p>
          {altSpellings.map((altspelling) => {
            return (
              <p key={altspelling}>
                <span className='country-data'>Alternative name:</span>
                {altspelling}
              </p>
            );
          })}

          <p>
            <span className='country-data'>capital:</span>
            {capital}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Country;
