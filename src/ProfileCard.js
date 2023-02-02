import React from 'react'

const ProfileCard = (props) => {

    const title = props.title;
    const handle = props.handle;
    const image = props.image;

  return (
    <div>
     <div>{title}</div>
     <div>{image}</div>
     <div>{handle}</div>
    </div>
  )
}

export default ProfileCard


