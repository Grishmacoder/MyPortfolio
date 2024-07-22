// src/components/Profile.js

import React from 'react';

const Profile = ({ name, title, description, image }) => {
  return (
    <div className="profile">
      {/* <img src={image} alt={`${name}'s profile`} /> */}
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
