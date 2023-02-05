//import 'bulma/css/bulma.css';
import './App.css';
//import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ImageShow from './components/ImageShow';


const App = () => {
  const handleSubmit = (term) => {
    console.log('Do a search with', term);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
      <ImageShow />
    </div>
  )
}

export default App;