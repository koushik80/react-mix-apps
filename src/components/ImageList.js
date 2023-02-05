import './ImageList.css';
import ImageShow from './ImageShow';

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    //console.log(images)
    return <ImageShow key={image.id} image={image} />
  });

  return (
    <div className="image-list">
      {renderedImages}
    </div>)
}

export default ImageList;
