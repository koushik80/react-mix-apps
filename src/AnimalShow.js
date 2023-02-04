import { useState } from 'react';
import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import horse from './images/horse.svg';
import heart from './images/heart.svg';

const svgMap = {
  // shortcut of bird:bird, cat: cat....and so on
  bird,
  cow,
  cat,
  dog,
  gator,
  horse
}

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={ handleClick }>
      <img alt="animal" src={ svgMap[type] } />
      <img alt="heart" src={ heart } />
    </div>
  )
}

export default AnimalShow;
