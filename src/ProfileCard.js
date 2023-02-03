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
    <div>
     <div>{title}</div>
     <div>{image}</div>
     <div>{handle}</div>
    </div>
  )
}

export default ProfileCard


