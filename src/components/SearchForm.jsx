import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ searchTerm }) => {
  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          placeholder='Type a country...'
          defaultValue={searchTerm}
        />
        <button type='submit' className='btn btn-block'>
          Search
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
