import React from 'react'

const ProfileCard = ({ title, handle, image } ) => {
  /*
    const title = props.title;
    const handle = props.handle;
    const image = props.image;
  */
   //  or in one line or in the arguments in the function
    // const { title, handle, image } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="PDA logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard


