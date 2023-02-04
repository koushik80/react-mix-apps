//import 'bulma/css/bulma.css';
import './App.css';
//import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ImageShow from './components/ImageShow';



const App = () => {

  return (
    <div className="app">
      <SearchBar />
      <ImageList />
      <ImageShow />
    </div>
  )
}

export default App;