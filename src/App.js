import 'bulma/css/bulma.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

//console.log(getRandomAnimals());

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>

      <AnimalShow type={animals.bird} />
      <AnimalShow type="cat" />
      <AnimalShow type="cow" />
      <AnimalShow type="dog" />
      <AnimalShow type="gator" />
      <AnimalShow type="horse" />
      <div>
        {animals}
      </div>
    </div>
  )
}

export default App;