import {useState} from 'react';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit('cars');
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    setTerm(e.target.value);

  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchBar;