import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CountryList from '../components/CountryList';
import SearchForm from '../components/SearchForm';

const countrySearchUrl = 'https://restcountries.com/v3.1/name/';

const searchCountriesQuery = (searchTerm) => {
  let corr = ' ';
  if (searchTerm == ' ') {
    corr = 'e';
  } else {
    corr = searchTerm;
  }
  // console.log(corr);
  return {
    queryKey: ['search', corr],
    queryFn: async () => {
      try {
        const response = await axios(`${countrySearchUrl}${corr}`);
        // console.log(response);
        return response.data;
      } catch (error) {
        return null;
      }
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || ' ';
    try {
      await queryClient.ensureQueryData(searchCountriesQuery(searchTerm));
    } catch (error) {
      console.log(error.response.status);
    }
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: countries } = useQuery(searchCountriesQuery(searchTerm));

  // console.log(countries);
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CountryList countries={countries} />
    </>
  );
};

export default Landing;
